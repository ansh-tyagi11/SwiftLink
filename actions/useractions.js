"use server"
import User from "@/models/User";
import connectDB from "@/db/connectDB";
import OtpStore from "@/models/OtpStore";
import { sendEmail } from "@/lib/mailer";
import argon2 from "argon2";

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
        return null;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await OtpStore.create({
        email: email,
        name: name,
        password: password,
        otp: otp,
        expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmail(form.email, "Your SwiftLink Verification Code (OTP)", `<div style="max-width: 600px; margin: 40px auto; padding: 30px; font-family: Arial, sans-serif; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 10px; color: #333;">
    <h2 style="color: #0070f3; text-align: center;">SwiftLink OTP Verification</h2>
    <p>Hi <strong>${form.name}</strong>,</p>
    <p>Thank you for verifying your account/request with SwiftLink.</p>
    <p>To complete your <strong>registration</strong>, please use the following One-Time Password (OTP) code:</p>
    <div style="text-align: center; margin: 20px 0;">
     <span style="display: inline-block; padding: 15px 25px; font-size: 24px; font-weight: bold; background-color: #0070f3; color: #fff; border-radius: 8px; letter-spacing: 4px;">
       ${otp}
     </span>
   </div>
   <p>This code is valid for <strong>5 minutes</strong>. Please do not share this code with anyone for your security.</p>
   <p>If you did not initiate this request, please disregard this email.</p>
   <h4 style="margin-top: 30px; color: #555;">Important Security Note:</h4>
   <p style="font-size: 14px; color: #555;">
     Never share your OTP with anyone. SwiftLink personnel will never ask you for this code.
   </p>
   <p style="font-size: 14px; color: #555;">
     If the OTP expires, you will need to request a new one on the SwiftLink website.
   </p>
   <p>Thank you for using SwiftLink!</p>
   <p>Best regards,<br>
   <strong>The SwiftLink Team</strong><br>
   <a href="https://www.swiftlink.com" style="color: #0070f3; text-decoration: none;">www.swiftlink.com</a></p>
   </div>
`);

    return { email, success: true };
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

    return { success: true };
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
    await sendEmail(email, "Your SwiftLink Verification Code (OTP)", `<div style="max-width: 600px; margin: 40px auto; padding: 30px; font-family: Arial, sans-serif; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 10px; color: #333;">
    <h2 style="color: #0070f3; text-align: center;">SwiftLink OTP Verification</h2>
    <p>Hi <strong>${record.name}</strong>,</p>
    <p>Thank you for verifying your account/request with SwiftLink.</p>
    <p>To complete your <strong>registration</strong>, please use the following One-Time Password (OTP) code:</p>
    <div style="text-align: center; margin: 20px 0;">
     <span style="display: inline-block; padding: 15px 25px; font-size: 24px; font-weight: bold; background-color: #0070f3; color: #fff; border-radius: 8px; letter-spacing: 4px;">             
         ${otp}
        </span>
    </div>
    <p>This code is valid for <strong>5 minutes</strong>. Please do not share this code with anyone for your security.</p>
    <p>If you did not initiate this request, please disregard this email.</p>
    <h4 style="margin-top: 30px; color: #555;">Important Security Note:</h4>
    <p style="font-size: 14px; color: #555;">
        Never share your OTP with anyone. SwiftLink personnel will never ask you for this code.
    </p>
    <p style="font-size: 14px; color: #555;">
        If the OTP expires, you will need to request a new one on the SwiftLink website.
    </p>
    <p>Thank you for using SwiftLink!</p>
    <p>Best regards,<br>
    <strong>The SwiftLink Team</strong><br>
    <a href="https://www.swiftlink.com" style="color: #0070f3; text-decoration: none;">www.swiftlink.com</a></p>
    </div>
`);
    return { success: true };
}

