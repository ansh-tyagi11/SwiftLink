"use client";
import { useState, useRef, useEffect } from "react";
import { verifySignupOtp, resendSignupOtp, checkId } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const [otpDigits, setOtpDigits] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const email = searchParams.get("email");
  const requestId = searchParams.get("id");
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    validateRequest();

    const sessionTimer = setTimeout(() => {
      toast("Your session has expired.");
      router.push("/sign-up");
    }, 5 * 60 * 1000);

    return () => clearTimeout(sessionTimer);

  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      setIsCountingDown(false);
      return;
    }

    setIsCountingDown(true);
    const timer = setTimeout(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const validateRequest = async () => {
    const exists = await checkId(email, requestId);
    if (!exists) {
      toast("No such OTP request found. Please sign up or log in again.");
      router.push("/sign-up");
    }
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    const next = [...otpDigits];
    next[index] = value;
    setOtpDigits(next);
    if (value && index < otpDigits.length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      const next = [...otpDigits];
      next[index - 1] = "";
      setOtpDigits(next);
      if (inputRefs.current[index - 1]) inputRefs.current[index - 1].focus();
    }
  };

  // const handleVerifyOtp = async () => {
  //   const otpValue = otpDigits.join("");
  //   if (!otpValue) {
  //     toast.warning("Please enter the OTP.");
  //     return;
  //   }
  //   if (otpValue.length !== 6) {
  //     toast.warning("OTP must be 6 digits.");
  //     return;
  //   }
  //   // const result = await verifySignupOtp(email, otpValue);
  //   const res = await fetch("/api/verify-otp", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, otp: otpValue }),
  //   });

  //   console.log(res);
  //   let data = await res.json();

  //   if (res.ok && data.message) {
  //     toast.success(result.message);
  //     // router.push("/home");
  //   } else {
  //     toast("Invalid OTP. Please try again.");
  //   }
  // };

  const handleVerifyOtp = async () => {
    const otpValue = otpDigits.join("");

    if (!otpValue || otpValue.length !== 6) {
      toast.warning("OTP must be 6 digits.");
      return;
    }

    const res = await fetch("http://localhost:3000/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp: otpValue }),
    });

    let data = await res.json();

    if (res.ok && data.message) {
      toast.success(result.message);
      router.push("/home");
    } else {
      toast("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    setIsCountingDown(true);
    setSecondsLeft(60);
    const resp = await resendSignupOtp(email);
    if (resp?.success) {
      toast.success("New OTP sent to your email.");
    } else {
      toast.warning("Your session has expired.");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-[#f6f6f8] dark:bg-[#101622] font-display text-[#131022] dark:text-white">
      <div className="w-full max-w-md">
        {/* Header */}
        <header className="flex items-center justify-center gap-4 text-[#100d1b] dark:text-white mb-8">
          <div className="h-8 w-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_535)">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd" />
              </g>
              <defs>
                <clipPath id="clip0_6_535">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
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
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="flex h-14 w-12 text-center text-lg font-bold [appearance:textfield] focus:outline-0 focus:ring-2 focus:ring-primary dark:bg-background-dark dark:text-white rounded-lg border border-gray-300 dark:border-white/20 focus:border-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  value={digit}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleInputKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </fieldset>
          </div>

          {/* Actions */}
          <div className="flex flex-col w-full px-4 py-3 mt-5 gap-4">
            <button
              onClick={handleVerifyOtp}
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-linear-to-r from-purple-600 to-blue-500 text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
            >
              <span className="truncate">Verify Code</span>
            </button>

            <button disabled={isCountingDown} onClick={handleResendOtp} className="flex justify-between items-center w-full">
              <p className={`text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-center underline hover:text-primary dark:hover:text-white ${isCountingDown ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                Resend Code
              </p>
              <p className={`${isCountingDown ? "inline text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-center hover:text-primary dark:hover:text-white" : "hidden"}`}>
                You can resend the code in {secondsLeft} seconds.
              </p>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
