"use server"
import User from "@/models/User";
import connectDB from "@/db/connectDB";

export const getUser = async (email) => {
    await connectDB();
    const oldUser = await User.findOne({ email }).lean();

    return oldUser;
}

export const getName = async (email, name) => {
    await connectDB();
    const oldName = await User.findOne({ email })

    if (oldName) {
        await User.updateOne({ "name": name })
    }
    return true;
}