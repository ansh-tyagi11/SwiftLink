import { cookies } from "next/headers";

export async function POST(req) {
    const cookieStore = await cookies();

    cookieStore.delete("otp_session", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
    });

    return new Response(
        JSON.stringify({ success: true, message: "Logout successfully" }),
    );
}