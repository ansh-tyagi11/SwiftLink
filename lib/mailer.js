import nodemailer from "nodemailer";

export async function sendEmail(to, subject, html) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });


    const mailOptions = {
        from: `"LinkShortly" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.log("Email error:", error);
        return { success: false, error };
    }
}