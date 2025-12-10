"use client";
import { useState, useRef, useEffect } from "react";
import { verifySignupOtp, resendSignupOtp } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(60);
  const email = searchParams.get("email");

  useEffect(() => {
    setLoading(true)
    timer2();
    const timer = setTimeout(() => {
      setLoading(false)
      console.log("hi i am set time out")
    }, 1000)
    return () => clearTimeout(timer)
  }, [count])

  const timer2 = () => {
    if (count == 0) {
      return;
    }
    const time = setTimeout(() => {
      setCount(prev => prev - 1)
    }, 1000)
    return () => clearTimeout(time)
  }

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) inputsRef.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputsRef.current[index - 1].focus();
    }
  };

  const verifyOtp = async () => {
    const otpValue = otp.join("");
    if (!otpValue) {
      toast("Kindly please fill otp.")
      return;
    }
    console.log("OTP entered:", otpValue);
    const result = await verifySignupOtp(email, otpValue);
    if (result.success) {
      toast("OTP verified successfully! Your account is now active.");
    } else {
      toast("Invalid OTP. Please try again.");
    }
  };

  const newOtp = async () => {
    setLoading(true);
    setCount(60);
    let otp = await resendSignupOtp(email);
    if (otp.success) {
      toast("new Otp send to you email")
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-background-light dark:bg-background-dark font-display text-[#131022] dark:text-white">
      <div className="w-full max-w-md">
        {/* Header */}
        <header className="flex items-center justify-center gap-4 text-[#100d1b] dark:text-white mb-8">
          <div className="h-8 w-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_535)">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd" />
              </g>
              <defs>
                <clipPath id="clip0_6_535"><rect fill="white" height="48" width="48" /></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em]">SwiftLink</h2>
        </header>

        {/* Main */}
        <main className="w-full flex flex-col items-center bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-200 dark:border-white/10">
          <div className="flex w-full flex-col gap-3 text-center mb-8">
            <span className="material-symbols-outlined text-4xl" data-icon="mail_lock">mail_lock</span>
            <p className="text-[#100d1b] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Verify Your Account</p>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
              A 6-digit code has been sent to your registered email. Enter the code below to proceed.
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="flex justify-center py-3 w-full">
            <fieldset className="relative flex justify-center gap-3 sm:gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="flex h-14 w-12 text-center text-lg font-bold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary dark:bg-background-dark dark:text-white rounded-lg border border-gray-300 dark:border-white/20 focus:border-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputsRef.current[index] = el)}
                />
              ))}
            </fieldset>
          </div>

          {/* Actions */}
          <div className="flex flex-col w-full px-4 py-3 mt-5 gap-4">
            <button
              onClick={verifyOtp}
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-linear-to-r from-purple-600 to-blue-500 text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
            >
              <span className="truncate">Verify Code</span>
            </button>
            <button
              disabled={loading}
              onClick={newOtp} className={`flex justify-between items-center w-full ${loading ? " cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
              <p>{count}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-center underline hover:text-primary dark:hover:text-white ">Resend Code</p>
            </button>
          </div>
        </main>
      </div >
    </div >
  );
}
