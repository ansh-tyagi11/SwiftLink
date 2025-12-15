"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const redirect = () => {
    if (status === "authenticated") {
      router.push("/home")
    }
    else if (status === "unauthenticated") {
      router.push("/login")
    }
  }

  return (
    <>
      <Navbar />
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f6f8] dark:bg-[#101622]">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 pt-0 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

              {/* Main Content */}
              <main className="grow">
                {/* Hero Section */}
                <div className="flex min-h-[480px] flex-col gap-6 items-center justify-center text-center py-16 px-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
                      Shorten Your Links, Expand Your Reach.
                    </h1>
                    <h2 className="text-base font-normal leading-normal text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:text-lg">
                      The most powerful and easy-to-use URL shortener to build and protect your brand.
                    </h2>
                  </div>
                  <div className="flex flex-col sm:flex-row min-w-40 w-full max-w-[640px] mt-4">
                    <div className="flex w-full flex-1 items-stretch rounded-lg sm:rounded-r-none h-14">
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg sm:rounded-r-none text-gray-800 focus:outline-0 focus:ring-2 focus:ring-[#135bec]/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 text-base font-normal leading-normal"
                        placeholder="Paste a long URL here..."
                      />
                    </div>
                    <button onClick={() => redirect()} className="flex w-full sm:w-auto mt-2 sm:mt-0 min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-l-none h-14 px-5 bg-linear-to-r from-[#6A11CB] to-[#2575FC] hover:from-[#5e0ebe] hover:to-[#1b68f0] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-200">
                      <span className="truncate">Shorten</span>
                    </button>
                  </div>
                </div>

                {/* Features Section */}
                <div className="flex flex-col gap-10 px-4 pt-16 pb-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-0 text-left">
                    <div className="flex flex-1 gap-4 rounded-xl bg-white dark:bg-gray-900/50 p-6 flex-col border border-gray-200 dark:border-gray-800">
                      <div className="text-[#135bec]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold leading-tight dark:text-white">Instant Redirects</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                          Create short links that redirect instantly to your long URLs with maximum speed and reliability.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-4 rounded-xl bg-white dark:bg-gray-900/50 p-6 flex-col border border-gray-200 dark:border-gray-800">
                      <div className="text-[#135bec]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold leading-tight dark:text-white">Detailed Analytics</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                          Gain insights into your link performance with comprehensive and easy-to-understand analytics.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-4 rounded-xl bg-white dark:bg-gray-900/50 p-6 flex-col border border-gray-200 dark:border-gray-800">
                      <div className="text-[#135bec]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold leading-tight dark:text-white">Custom Aliases</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                          Personalize your shortened links with custom aliases to enhance brand recognition and trust.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How It Works Section */}
                <div className="flex flex-col gap-10 px-4 py-16">
                  <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter dark:text-white">How It Works</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                      A simple three-step process to shorten your URLs and get them ready for sharing.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center justify-center size-12 rounded-full bg-[#135bec]/10 text-[#135bec]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-bold leading-tight dark:text-white">1. Paste Your Long URL</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                          Simply copy your lengthy URL and paste it into the input field above.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center justify-center size-12 rounded-full bg-[#135bec]/10 text-[#135bec]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-bold leading-tight dark:text-white">2. Click Shorten</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                          Hit the "Shorten" button and our service will instantly generate a compact link.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center justify-center size-12 rounded-full bg-[#135bec]/10 text-[#135bec]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-bold leading-tight dark:text-white">3. Share Your Short URL</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                          Copy your new short URL and share it across your social media, emails, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col justify-end gap-6 px-4 py-20 text-center">
                  <div className="flex flex-col gap-2 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-black leading-tight tracking-tighter md:text-4xl dark:text-white">
                      Ready to get started?
                    </h1>
                    <p className="text-base font-normal leading-normal text-gray-600 dark:text-gray-400">
                      Sign up now and start creating powerful short links for your business.
                    </p>
                  </div>
                  <div className="flex flex-1 justify-center mt-4">
                    <a href="/sign-up">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#135bec] text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90">
                        <span className="truncate">Sign Up for Free</span>
                      </button>
                    </a>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}