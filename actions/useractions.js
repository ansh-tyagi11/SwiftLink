"use server"
import User from "@/models/User";
import connectDB from "@/db/connectDB";
import OtpStore from "@/models/OtpStore";
import argon2 from "argon2";
import crypto from "crypto";
import { sendEmails } from "@/lib/otpEmail";

export const getUser = async (email) => {
    await connectDB();
    const oldUser = await User.findOne({ email }).lean();
    oldUser._id = oldUser._id.toString();

    return oldUser;
}

export const getName = async (name, email) => {
    await connectDB();
    const oldName = await User.findOne({ email })

    if (oldName) {
        await User.updateOne({ "name": name })
    }

    return true;
}

export const createUserAccount = async (form) => {
    await connectDB();

    const name = form.name;
    const email = form.email;
    const password = await argon2.hash(form.password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 3,
        parallelism: 1
    })

    let existingUser = await User.findOne({ email: email }).lean();
    if (existingUser) {
        return { error: "User already exists. Please login instead." };
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const OTPid = crypto.randomBytes(16).toString("hex");
    await OtpStore.create({
        otpId: OTPid,
        email: email,
        name: name,
        password: password,
        otp: otp,
        expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmails(form.email, form.name, otp)

    return { email, success: true, OTPid };
}

export async function verifySignupOtp(email, otp) {
    await connectDB();
    const record = await OtpStore.findOne({ "email": email, "otp": otp });

    if (!record) {
        return { error: "Invalid OTP" };
    }

    if (record.expiresAt < Date.now()) {
        return { error: "OTP expired" };
    }

    const existing = await User.findOne({ "email": email })

    if (!existing) {
        const newUser = await User.create({
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

    return { success: true, message: "Your login successfull." };
}

export async function resendSignupOtp(email) {
    await connectDB();
    const record = await OtpStore.findOne({ "email": email });

    if (!record) {
        return { error: "No OTP record found" };
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    record.otp = otp;
    record.expiresAt = Date.now() + 5 * 60 * 1000;
    record.attempts = 3;
    await record.save();
    await sendEmails(email, record.name, otp)

    return { success: true };
}

export async function checkId(email, id) {
    await connectDB();
    const record = await OtpStore.findOne({ email: email, otpId: id });

    if (!record) {
        return false;
    }

    if (record.expiresAt < Date.now()) {
        return false;
    }

    return true;
}

export const generateLoginOtp = async (form) => {
    await connectDB();

    let email = form.email;
    let password = form.password;

    const existing = await User.findOne({ "email": email }).lean();
    if (!existing) {
        return { success: false, error: "User not found. Please sign up first." };
    }

    let userPassword = existing.signUp.password;
    let userName = existing.signUp.name;

    const passwordMatch = await argon2.verify(userPassword, password);

    if (!passwordMatch) {
        return { success: false, error: "Incorrect password." };
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const OTPid = crypto.randomBytes(16).toString("hex");

    const passwordLogin = await argon2.hash(form.password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 3,
        parallelism: 1
    })

    await OtpStore.create({
        otpId: OTPid,
        email: email,
        name: userName,
        password: passwordLogin,
        otp: otp,
        expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmails(email, userName, otp)

    return { email, success: true, OTPid };
};
