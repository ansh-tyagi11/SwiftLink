"use server";
import User from "@/models/User";
import connectDB from "@/db/connectDB";
import OtpStore from "@/models/OtpStore";
import argon2 from "argon2";
import crypto from "crypto";
import { sendEmails } from "@/lib/otpEmail";

export const getUser = async (email) => {
    await connectDB();
    const user = await User.findOne({ email }).lean();
    if (!user) return null;
    if (user._id) user._id = user._id.toString();
    return user;
};

export const getName = async (name, email) => {
    await connectDB();
    const found = await User.findOne({ email });
    if (found) {

        await User.updateOne({ email }, { $set: { name } });
    }
    return true;
};

export const createUserAccount = async (form) => {
    await connectDB();

    let invalidChars = [',', '\\', "'", '*', '+', '-', '/'];

    const name = form.name;
    const email = form.email;

    for (let char of invalidChars) {
        if (email.includes(char)) {
            return { error: `Your email can’t include '${char}'. Please enter a valid email to continue.` };
        };
    }

    const hashedPassword = await argon2.hash(form.password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 3,
        parallelism: 1,
    });

    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
        return { error: "User already exists. Please login instead." };
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const OTPid = crypto.randomBytes(16).toString("hex");

    await OtpStore.create({
        otpId: OTPid,
        email,
        name,
        password: hashedPassword,
        otp,
        expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmails(email, name, otp);

    return { email, success: true, OTPid };
};

export async function verifySignupOtp(email, otp) {
    await connectDB();
    const record = await OtpStore.findOne({ email, otp });

    if (!record) {
        return { error: "Invalid OTP" };
    }

    if (record.expiresAt < Date.now()) {
        return { error: "OTP expired" };
    }

    const existing = await User.findOne({ email });

    if (!existing) {
        await User.create({
            email: record.email,
            name: record.name,
            signUp: {
                password: record.password,
                name: record.name,
                email: record.email,
            },
        });
        await OtpStore.deleteMany({ email });
        return { success: true, message: "OTP verified successfully! Your account is now active." };
    }

    await OtpStore.deleteMany({ email });
    return { email, success: true, message: "Login successful.", redirect: "/home" };
}

export async function resendSignupOtp(email) {
    await connectDB();
    const record = await OtpStore.findOne({ email });

    if (!record) {
        return { error: "No OTP record found" };
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    record.otp = otp;
    record.expiresAt = Date.now() + 5 * 60 * 1000;
    record.attempts = 3;
    await record.save();

    await sendEmails(email, record.name, otp);
    return { success: true };
}

export async function checkId(email, id) {
    await connectDB();
    const record = await OtpStore.findOne({ email, otpId: id });

    if (!record) return false;
    if (record.expiresAt < Date.now()) return false;
    return true;
}

export const generateLoginOtp = async (form) => {
    await connectDB();

    const email = (form.email).trim();
    const password = (form.password).trim();

    const existing = await User.findOne({ email }).lean();
    if (!existing) {
        return { success: false, error: "User not found. Please sign up first." };
    }

    const userPasswordHash = existing.signUp?.password;
    const userName = existing.signUp?.name || existing.name;

    if (!userPasswordHash) {
        return { success: false, error: "User has no password. Please use social login or reset password." };
    }

    const passwordMatch = await argon2.verify(userPasswordHash, password);
    if (!passwordMatch) {
        return { success: false, error: "Incorrect password." };
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const OTPid = crypto.randomBytes(16).toString("hex");

    const passwordLoginHash = await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 3,
        parallelism: 1,
    });

    await OtpStore.create({
        otpId: OTPid,
        email,
        name: userName,
        password: passwordLoginHash,
        otp,
        expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmails(email, userName, otp);
    return { email, success: true, OTPid };
};
