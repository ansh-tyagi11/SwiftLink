import User from "@/models/User";
import connectDB from "@/db/connectDB";
import ShortUrl from "@/models/ShortUrl";
import { customAlphabet } from 'nanoid';
import dns from "dns";
import { URL } from "url";

export async function POST(req) {
    const { originalUrl, email } = await req.json();

    await connectDB()

    let link = originalUrl.trim()

    if (typeof link !== "string" || /^\d+$/.test(link)) {
        return new Response(JSON.stringify({ success: false, message: "Invalid URL" }));
    }

    if (!link.startsWith("http://") && !link.startsWith("https://")) {
        link = "https://" + link;
    }

    let url = new URL(link)
    const BLOCKED_TLDS = ["zip", "xyz", "kim", "top", "click", "country"];

    const SHORTENER_DOMAINS = [
        "bit.ly",
        "tinyurl.com",
        "t.co",
        "goo.gl",
        "rebrand.ly",
        "cutt.ly",
        "is.gd"
    ];

    if (SHORTENER_DOMAINS.includes(url.hostname)) {
        return new Response(JSON.stringify({ success: false, message: "Shortening another shortener is not allowed" }));
    }

    const trackingParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid"];
    trackingParams.forEach(param => url.searchParams.delete(param));

    const host = url.hostname.toLowerCase();
    const privatePatterns = [
        /^localhost$/,
        /^127\./,
        /^10\./,
        /^192\.168\./,
        /^172\.(1[6-9]|2[0-9]|3[0-1])\./
    ];

    const tld = host.split(".").pop().toLowerCase();
    if (BLOCKED_TLDS.includes(tld)) {
        return new Response(JSON.stringify({ success: false, message: "TLD not allowed due to spam issues" }));
    }

    const domainExists = await new Promise((resolve) => {
        dns.lookup(host, (err, address) => resolve(address || null));
    });

    if (!domainExists) {
        return new Response(JSON.stringify({ success: false, message: "Domain does not exist (DNS failed)" }));
    }

    if (privatePatterns.some(p => p.test(domainExists))) {
        return new Response(JSON.stringify({ success: false, message: "Local/private URLs are blocked" }));
    }

    let user = await User.findOne({ email })

    if (!user) return new Response(JSON.stringify({ success: false, message: "Authentication required. Please log in." }));

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const generateId = customAlphabet(alphabet, 6);

    const shortId = generateId();

    let already = await ShortUrl.findOne({ originalUrl: url.toString(), owner: user._id })
    if (already) {
        return new Response(JSON.stringify({ success: false, message: "This url shorten already have." }))
    }

    let newUrl = await ShortUrl.create({
        originalUrl: url.toString(),
        shortId: shortId,
        owner: user._id,
    })

    return new Response(JSON.stringify({ newUrl, success: true, message: "Url shorten is created." }))

}