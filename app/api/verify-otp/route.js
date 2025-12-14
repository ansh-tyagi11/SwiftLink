import { cookies } from "next/headers";
import { verifySignupOtp } from "@/actions/useractions";

export async function POST(req) {

  const body = await req.json();
  const { email, otp } = body;
  const cookieStore = await cookies();

  let a = await verifySignupOtp(email, otp)
  if (!a) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }))
  }
  cookieStore.set("otp_session", email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60,
    path: "/",
  });

  return new Response(
    JSON.stringify({ success: true, message: "OTP verified successfully", redirect: "/home" }),
  );
}