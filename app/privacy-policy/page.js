import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <div
                className="bg-[#f6f6f8] dark:bg-[#101622] text-[#111827] dark:text-white flex flex-col min-h-screen font-display overflow-x-hidden">

                {/* Page Content */}
                <div className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#111318] dark:text-white mb-4">Privacy
                            Policy</h1>
                        <div
                            className="inline-flex items-center gap-2 bg-white dark:bg-[#1a2332] border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full shadow-sm">
                            <span className="material-symbols-outlined text-gray-400 text-[18px]">calendar_month</span>
                            <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium">Last Updated: October 24, 2023</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">

                        {/* Main Content Area */}
                        <main className="flex-1 w-full min-w-0">
                            <div
                                className="bg-white dark:bg-[#1a2332] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-800 p-6 md:p-10 lg:p-14">
                                {/* 1. Introduction */}
                                <section className="mb-14 scroll-mt-32" id="intro">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span
                                            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-white font-bold text-sm">1</span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white">Introduction</h2>
                                    </div>
                                    <div className="prose prose-lg dark:prose-invert max-w-none text-[#616f89] dark:text-gray-300">
                                        <p className="leading-relaxed mb-4">
                                            At SwiftLink, we prioritize your privacy and transparency. This policy outlines exactly
                                            what data we collect, why we collect it, and how we protect it. We are committed to
                                            ensuring your personal information remains secure.
                                        </p>
                                        <p className="leading-relaxed">
                                            Our URL shortening service allows users to shorten long URLs and share them easily. By
                                            accessing or using our Service, you signify that you have read, understood, and agree to
                                            our collection, storage, use, and disclosure of your personal information as described
                                            in this Privacy Policy and our Terms of Service.
                                        </p>
                                    </div>
                                </section>
                                {/* 2. Data We Collect */}
                                <section className="mb-14 scroll-mt-32" id="collect">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span
                                            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#135bec]/10 text-[#135bec] font-bold text-sm">2</span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white">Data We Collect
                                        </h2>
                                    </div>
                                    <div className="space-y-8">
                                        <div>
                                            <h3
                                                className="text-lg font-bold text-[#135bec] dark:text-blue-400 mb-3 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[20px]">person</span>
                                                User Account Data
                                            </h3>
                                            <p className="text-[#616f89] dark:text-gray-300 leading-relaxed text-base">
                                                When you register for a SwiftLink account, we collect personal information such as
                                                your username, email address, and password. If you subscribe to a paid plan, we also
                                                collect billing information, though payment processing is handled by our secure
                                                third-party partners (e.g., Stripe).
                                            </p>
                                        </div>
                                        <div>
                                            <h3
                                                className="text-lg font-bold text-[#135bec] dark:text-blue-400 mb-3 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[20px]">link</span>
                                                Link &amp; Click Data
                                            </h3>
                                            <p className="text-[#616f89] dark:text-gray-300 leading-relaxed text-base">
                                                For every link created or clicked using our service, we automatically collect
                                                certain data points to provide analytics features. This includes:
                                            </p>
                                            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#616f89] dark:text-gray-300">
                                                <li><strong>IP Address:</strong> Used to determine broad geographic location
                                                    (City/Country).</li>
                                                <li><strong>Device Information:</strong> Browser type, operating system, and device
                                                    type (Mobile/Desktop).</li>
                                                <li><strong>Referrer URL:</strong> The website where the SwiftLink URL was clicked.
                                                </li>
                                                <li><strong>Time &amp; Date:</strong> The exact timestamp of the click event.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Important Highlight Box */}
                                    <blockquote
                                        className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-[#135bec] rounded-r-lg relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-5">
                                            <span className="material-symbols-outlined text-6xl">lock</span>
                                        </div>
                                        <div className="relative z-10">
                                            <p className="text-[#111318] dark:text-white font-bold text-lg mb-2">We DO NOT sell your
                                                Personal Data.</p>
                                            <p className="text-[#616f89] dark:text-gray-300 text-sm leading-relaxed">
                                                We respect your trust. We do not sell, trade, or rent your personal identification
                                                information to others. We may share generic aggregated demographic information not
                                                linked to any personal identification information regarding visitors and users with
                                                our business partners and trusted affiliates.
                                            </p>
                                        </div>
                                    </blockquote>
                                </section>
                                {/* 3. How We Use Data */}
                                <section className="mb-14 scroll-mt-32" id="use">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span
                                            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-white font-bold text-sm">3</span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white">How We Use Data
                                        </h2>
                                    </div>
                                    <p className="text-[#616f89] dark:text-gray-300 leading-relaxed text-base mb-4">
                                        We use the collected data for various purposes essential to our service:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div
                                            className="p-4 rounded-lg bg-[#f9fafb] dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-[#135bec] mt-1">build</span>
                                                <div>
                                                    <h4 className="font-bold text-[#111318] dark:text-white text-sm">Service Maintenance
                                                    </h4>
                                                    <p className="text-xs text-gray-500 mt-1">To provide and maintain our Service,
                                                        including monitoring usage.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="p-4 rounded-lg bg-[#f9fafb] dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-[#135bec] mt-1">support_agent</span>
                                                <div>
                                                    <h4 className="font-bold text-[#111318] dark:text-white text-sm">Customer Support
                                                    </h4>
                                                    <p className="text-xs text-gray-500 mt-1">To assist you when you contact us about
                                                        issues or questions.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="p-4 rounded-lg bg-[#f9fafb] dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-[#135bec] mt-1">analytics</span>
                                                <div>
                                                    <h4 className="font-bold text-[#111318] dark:text-white text-sm">Analytics</h4>
                                                    <p className="text-xs text-gray-500 mt-1">To provide link creators with insights on
                                                        their link performance.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="p-4 rounded-lg bg-[#f9fafb] dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-[#135bec] mt-1">gavel</span>
                                                <div>
                                                    <h4 className="font-bold text-[#111318] dark:text-white text-sm">Legal Compliance
                                                    </h4>
                                                    <p className="text-xs text-gray-500 mt-1">To comply with applicable laws and enforce
                                                        our terms.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* 4. Click Tracking */}
                                <section className="mb-14 scroll-mt-32" id="tracking">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span
                                            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-white font-bold text-sm">4</span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white">Click Tracking
                                            &amp; Analytics</h2>
                                    </div>
                                    <p className="text-[#616f89] dark:text-gray-300 leading-relaxed text-base">
                                        Our core service involves tracking clicks on shortened URLs. We provide this data to the
                                        creator of the link in an aggregated format (e.g., "100 clicks from United States"). We
                                        strive to protect the privacy of those clicking links. We do not expose personally
                                        identifiable information (PII) of clickers to link creators. The data visible to creators is
                                        anonymized and aggregated.
                                    </p>
                                </section>
                                {/* 5. User Rights */}
                                <section className="mb-8 scroll-mt-32" id="rights">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span
                                            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-white font-bold text-sm">5</span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white">User Rights</h2>
                                    </div>
                                    <p className="text-[#616f89] dark:text-gray-300 leading-relaxed text-base mb-6">
                                        You have specific rights regarding your data. SwiftLink is committed to facilitating the
                                        exercise of these rights:
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="mt-1 min-w-5">
                                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                            </div>
                                            <div>
                                                <strong className="text-[#111318] dark:text-white block mb-1">Right to Access</strong>
                                                <p className="text-sm text-[#616f89] dark:text-gray-400">You can request copies of your
                                                    personal data.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 min-w-5">
                                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                            </div>
                                            <div>
                                                <strong className="text-[#111318] dark:text-white block mb-1">Right to Deletion (Right
                                                    to be Forgotten)</strong>
                                                <p className="text-sm text-[#616f89] dark:text-gray-400">You can request that we delete
                                                    your personal data, under certain conditions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="mt-8 p-5 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                                        <p className="text-[#111318] dark:text-white font-medium mb-2">Contact for Data Requests</p>
                                        <p className="text-sm text-[#616f89] dark:text-gray-400 mb-3">If you wish to exercise any of
                                            these rights, please contact our Data Protection Officer at:</p>
                                        <a className="inline-flex items-center gap-2 text-[#135bec] font-bold hover:underline"
                                            href="mailto:privacy@swiftlink.com">
                                            <span className="material-symbols-outlined text-[18px]">mail</span>
                                            privacy@swiftlink.com
                                        </a>
                                    </div>
                                </section>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}