import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <>
            <Navbar />
            <div
                className="bg-[#f5f6f8] dark:bg-[#101022] text-[#111827] dark:text-white font-display antialiased min-h-screen flex flex-col">

                {/* Main Content Area*/}
                <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-2xl">
                        {/* Heading Section */}
                        <div className="text-center mb-10">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight mb-4">
                                Questions? We're Ready to Help.
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
                                For all inquiries, please fill out the form below. We prioritize quick responses and aim to get back
                                to you within one business day.
                            </p>
                        </div>
                        {/* Contact Form Card */}
                        <div
                            className="bg-white dark:bg-[#1a1a2e] shadow-xl shadow-gray-200/50 dark:shadow-none rounded-2xl p-6 md:p-10 border border-gray-100 dark:border-gray-800">
                            <form action="#" className="space-y-6" method="POST">
                                {/* Row 1: Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-[#111827] dark:text-gray-200 mb-2"
                                        htmlFor="fullName">Full Name</label>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6062f6]/20 focus:border-[#6062f6] transition-all duration-200"
                                            id="fullName" name="fullName" placeholder="Enter your full name" type="text" />
                                    </div>
                                </div>
                                {/* Row 2: Email Address */}
                                <div>
                                    <label className="block text-sm font-semibold text-[#111827] dark:text-gray-200 mb-2"
                                        htmlFor="email">Email Address</label>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6062f6]/20 focus:border-[#6062f6] transition-all duration-200"
                                            id="email" name="email" placeholder="you@example.com" type="email" />
                                    </div>
                                </div>
                                {/* Row 3: Subject */}
                                <div>
                                    <label className="block text-sm font-semibold text-[#111827] dark:text-gray-200 mb-2"
                                        htmlFor="subject">Subject</label>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6062f6]/20 focus:border-[#6062f6] transition-all duration-200"
                                            id="subject" name="subject" placeholder="How can we help?" type="text" />
                                    </div>
                                </div>
                                {/* Row 4: Your Message */}
                                <div>
                                    <label className="block text-sm font-semibold text-[#111827] dark:text-gray-200 mb-2"
                                        htmlFor="message">Your Message</label>
                                    <div className="relative">
                                        <textarea
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6062f6]/20 focus:border-[#6062f6] transition-all duration-200 resize-none"
                                            id="message" name="message" placeholder="Tell us more about your inquiry..."
                                            rows="5"></textarea>
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <button
                                    className="w-full flex items-center justify-center h-12 rounded-lg text-white font-bold text-base tracking-wide shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all transform hover:-translate-y-0.5 bg-linear-to-r from-[#6366F1] to-[#8B5CF6]"
                                    type="button">
                                    Send Email
                                </button>
                            </form>
                            {/* Footer Link */}
                            <div className="mt-8 text-center border-t border-gray-100 dark:border-gray-800 pt-6">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Prefer to email directly? Contact us at
                                    <a className="font-medium text-[#6062f6] hover:underline hover:text-[#6062f6]/80 transition-colors"
                                        href="mailto:support@swiftlink.com">support@swiftlink.com</a>
                                </p>
                            </div>
                        </div>
                        {/* Optional Help Grid (Below fold engagement) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <a className="group flex justify-center flex-col items-center p-6 bg-white dark:bg-[#1a1a2e] rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all"
                                href="#">
                                <div
                                    className="w-10 h-10 rounded-full bg-[#6062f6]/10 text-[#6062f6] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined">bug_report</span>
                                </div>
                                <h3 className="font-bold text-sm text-[#111827] dark:text-white mb-1">Report a Bug</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Found an issue? Let us know</p>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}