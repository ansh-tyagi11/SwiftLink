"use server";
import User from "@/models/User";
import connectDB from "@/db/connectDB";
import OtpStore from "@/models/OtpStore";
import argon2 from "argon2";
import crypto from "crypto";
import { sendEmails } from "@/lib/otpEmail";
import ShortUrl from "@/models/ShortUrl";

export const getUser = async (email) => {
    await connectDB();
    const user = await User.findOne({ email }).lean();
    if (!user) return null;
    if (user._id) user._id = user._id.toString();
    return user;
};

export const getName = async (name, email) => {
    await connectDB();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
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
    const otpId = crypto.randomBytes(16).toString("hex");

    await OtpStore.create({
        otpId,
        email,
        name,
        password: hashedPassword,
        otp,
        expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmails(email, name, otp);

    return { email, success: true, otpId, OTPid: otpId };
};

export async function verifySignupOtp(email, otp) {
    await connectDB();
    const otpRecord = await OtpStore.findOne({ email, otp });

    if (!otpRecord) {
        return { error: "Invalid OTP" };
    }

    if (otpRecord.expiresAt < Date.now()) {
        return { error: "OTP expired" };
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        await User.create({
            email: otpRecord.email,
            name: otpRecord.name,
            signUp: {
                password: otpRecord.password,
                name: otpRecord.name,
                email: otpRecord.email,
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
    const otpRecord = await OtpStore.findOne({ email });

    if (!otpRecord) {
        return { error: "No OTP record found" };
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpRecord.otp = otp;
    otpRecord.expiresAt = Date.now() + 5 * 60 * 1000;
    otpRecord.attempts = 3;
    await otpRecord.save();

    await sendEmails(email, otpRecord.name, otp);
    return { success: true };
}

export async function checkId(email, id) {
    await connectDB();
    const otpRecord = await OtpStore.findOne({ email, otpId: id });

    if (!otpRecord) return false;
    if (otpRecord.expiresAt < Date.now()) return false;
    return true;
}

export const generateLoginOtp = async (form) => {
    await connectDB();

    const email = (form.email).trim();
    const password = (form.password).trim();

    const existingUser = await User.findOne({ email }).lean();
    if (!existingUser) {
        return { success: false, error: "User not found. Please sign up first." };
    }

    const storedPasswordHash = existingUser.signUp?.password;
    const displayName = existingUser.signUp?.name || existingUser.name;

    if (!storedPasswordHash) {
        return { success: false, error: "User has no password. Please use social login or reset password." };
    }

    const passwordMatch = await argon2.verify(storedPasswordHash, password);
    if (!passwordMatch) {
        return { success: false, error: "Incorrect password." };
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpId = crypto.randomBytes(16).toString("hex");

    const passwordLoginHash = await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 3,
        parallelism: 1,
    });

    await OtpStore.create({
        otpId,
        email,
        name: displayName,
        password: passwordLoginHash,
        otp,
        expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmails(email, displayName, otp);
    return { email, success: true, otpId, OTPid: otpId };
};

export async function updatePassword(email, password, confirmNewPassword) {
    await connectDB();
    let user = await User.findOne({ email: email })

    console.log(user)
    let currentPasswordHash = user.signUp.password;
    console.log(currentPasswordHash)
    const passwordMatch = await argon2.verify(currentPasswordHash, password);
    if (!passwordMatch) {
        return { success: false, error: "Incorrect password." };
    }

    const newHashedPassword = await argon2.hash(confirmNewPassword, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 3,
        parallelism: 1,
    });

    user.signUp.password = newHashedPassword;
    await user.save();
    console.log("done")
    return { success: true, message: "Password Updated Successfully." }
}

export async function forUserlink(email) {
    await connectDB();
    console.log(email)

    const user = await User.findOne({ email });
    if (!user) {
        return { success: false, message: "User not found" };
    }

    const userId = user._id;

    let links = await ShortUrl.find({ owner: userId }).lean();

    links.forEach(link => {
        if (link._id) link._id = link._id.toString();
        if (link.owner) link.owner = link.owner.toString();
    });

    return { success: true, links };
}

export async function deleteLink(id) {
    await connectDB();
    const deleteResult = await ShortUrl.deleteOne({ _id: id });

    return { success: true, message: "Link deleted successfully." };

}