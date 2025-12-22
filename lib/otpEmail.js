import { sendEmail } from "./mailer";

export async function sendEmails(email, name, otp) {

  const html = `<div style="max-width: 600px; margin: 40px auto; padding: 30px; font-family: Arial, sans-serif; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 10px; color: #333;">
  <h2 style="color: #0070f3; text-align: center;">LinkShortly OTP Verification</h2>
  <p>Hi <strong>${name}</strong>,</p>
  <p>Thank you for verifying your account/request with LinkShortly.</p>
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
    Never share your OTP with anyone. LinkShortly personnel will never ask you for this code.
  </p>
  <p style="font-size: 14px; color: #555;">
    If the OTP expires, you will need to request a new one on the LinkShortly website.
  </p>
  <p>Thank you for using LinkShortly!</p>
  <p>Best regards,<br>
  <strong>The LinkShortly Team</strong><br>
  <a href="https://www.swiftlink.com" style="color: #0070f3; text-decoration: none;">www.swiftlink.com</a></p>
  </div>`;


  await sendEmail(email, "Your LinkShortly Verification Code (OTP)", html);
}
