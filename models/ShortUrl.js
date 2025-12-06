import mongoose from "mongoose";

const ShortUrlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true, },
    shortId: { type: String, required: true, unique: true, },
    ownerEmail: { type: String, required: true, },
    clicks: { type: Number, default: 0, },
    analytics: [{
        timestamp: { type: Date, default: Date.now },
        ip: String,
        country: String,
        browser: String,
        device: String,
        referrer: String,
    }],
    isActive: { type: Boolean, default: true, },
    expiresAt: { type: Date, default: null, },
    title: { type: String, default: "", },
    tags: { type: String },
    createdAt: { type: Date, default: Date.now, }
}, { timestamps: true, });

export default mongoose.models.ShortUrl || mongoose.model("ShortUrl", ShortUrlSchema);