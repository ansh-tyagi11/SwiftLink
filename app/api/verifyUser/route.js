import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = await cookies();
    const session = cookieStore.get("otp_session");

    if (!session) return NextResponse.json({ user: null });

    cookieStore.set("otp_session", session.value, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60, // 1 hour
        path: "/",
    });

    return NextResponse.json({ success: true, user: session.value })
}