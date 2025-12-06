import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import UserSchema from "@/models/User";
import connectDB from "@/db/connectDB";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email }) {
            if (account.provider == "github" || account.provider == "google") {
                await connectDB();
                const currentUser = await UserSchema.findOne({ email: user.email })
                if (!currentUser) {
                    const newUser = await UserSchema.create({
                        email: user.email,
                        username: user.name,
                        name: user.name,
                        image: user.image
                    })
                }
            }
            return true;
        }
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };