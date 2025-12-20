"use server";
import User from "@/models/User";
import connectDB from "@/db/connectDB";
import OtpStore from "@/models/OtpStore";
import argon2 from "argon2";
import crypto from "crypto";
import { sendEmails } from "@/lib/otpEmail";
import ShortUrl from "@/models/ShortUrl";
import { customAlphabet } from 'nanoid';
import dns from "dns";
import { URL } from "url";

export async function POST() {

}