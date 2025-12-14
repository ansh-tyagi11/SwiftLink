import SessionWrapper from "@/components/SessionWrapper";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function ProtectedLayout({ children }) {
    const session = await getServerSession(authOptions);
    const cookieStore = await cookies();
    const cookieSession = cookieStore.get("otp_session");
    if (!session && !cookieSession) redirect("/login");

    return (
        <SessionWrapper>
            {children}
        </SessionWrapper>
    );
}