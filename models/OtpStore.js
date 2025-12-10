import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const otpStoreSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, lowercase: true, trim: true, },
        name: { type: String, required: true, },
        password: { type: String, required: true, },
        otp: { type: String, required: true, },
        expiresAt: { type: Date, required: true, index: { expires: 20 }, },
        attempts: { type: Number, default: 3, },
        isVerified: { type: Boolean, default: false, },
    },
    { timestamps: true, }
);

export default mongoose.models.OtpStore || model('OtpStore', otpStoreSchema);