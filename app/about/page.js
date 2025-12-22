import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Navbar />
            <div
                className="bg-[#f6f6f8] dark:bg-[#101622] text-slate-900 dark:text-white font-manrope overflow-x-hidden antialiased">
                <div className="relative flex min-h-screen flex-col">

                    <main className="grow">
                        {/*  HeroSection  */}
                        <section className="px-4 md:px-40 py-10 md:py-20 flex justify-center bg-white dark:bg-[#101622]">
                            <div className="flex flex-col max-w-[960px] w-full gap-8 lg:flex-row items-center">
                                <div className="flex flex-col gap-6 lg:w-1/2">
                                    <div className="flex flex-col gap-4 text-left">
                                        <h1
                                            className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                                            Empowering Connections, One Link at a Time
                                        </h1>
                                        <h2
                                            className="text-base md:text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                                            The fastest, most reliable way to manage and track your URLs. We make digital sharing
                                            seamless, secure, and insightful for everyone.
                                        </h2>
                                    </div>
                                    <div className="flex gap-4">
                                        <Link href="/sign-up">
                                            <button
                                                className="h-12 px-6 rounded-lg bg-[#135bec] text-white text-base font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                                                Get Started
                                            </button>
                                        </Link>
                                        <Link href="/">
                                            <button
                                                className="h-12 px-6 rounded-lg bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                                Learn More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div
                                        className="aspect-video w-full rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shadow-xl overflow-hidden"
                                        data-alt="Abstract futuristic blue digital network connections"
                                        style={{
                                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6kETR0LrjGeKMtejhv3fzBsgOGa8s9pWlg2m7oXXeoF_3PDH2tcpFUIfs8EbY6F5O4nElK8fFkvz76ug-_IRtqUm8tXhjB3VBg80277LWfG9oiYt0iD6QUDzFxpsm0xsobc0BXTClXYcNwPcivorNFIkzuVaArThkuQ19PvpSDlmfnItQZJVyFkEnuoEiePmvw63ZqNnmHdDmArv5LDTCZSLmqwAL58jPplYvLsL1lg4E5i4qJSKcD9EgBWlQm-qyzB07pHjl_Lo")`
                                        }}
                                    ></div>
                                </div>


                            </div>
                        </section>
                        {/*  Stats  */}

                        <section
                            className="bg-linear-to-b from-background-light dark:from-[#0c111a] to-white dark:to-background-dark py-16 md:py-20 -mt-10 md:-mt-16 relative z-10">
                            <div className="px-4 md:px-40 flex justify-center">
                                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div
                                        className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 text-center items-center">
                                        <span className="material-symbols-outlined text-4xl text-[#135bec] mb-2">trending_up</span>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                                            Total Links Managed</p>
                                        <p className="text-slate-900 dark:text-white text-4xl font-extrabold mt-1">1M+</p>
                                        <p className="text-xs text-slate-400">Scalable infrastructure</p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 text-center items-center">
                                        <span className="material-symbols-outlined text-4xl text-[#135bec] mb-2">verified_user</span>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                                            Service Uptime</p>
                                        <p className="text-slate-900 dark:text-white text-4xl font-extrabold mt-1">99.99%</p>
                                        <p className="text-xs text-slate-400">Guaranteed reliability</p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 text-center items-center">
                                        <span className="material-symbols-outlined text-4xl text-[#135bec] mb-2">groups</span>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                                            Enterprise Clients</p>
                                        <p className="text-slate-900 dark:text-white text-4xl font-extrabold mt-1">200+</p>
                                        <p className="text-xs text-slate-400">Happy Users</p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 text-center items-center">
                                        <span className="material-symbols-outlined text-4xl text-[#135bec] mb-2">timer</span>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                                            Years of Innovation</p>
                                        <p className="text-slate-900 dark:text-white text-4xl font-extrabold mt-1">5+</p>
                                        <p className="text-xs text-slate-400">Pioneering link tech</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*  FeatureSection (Mission & Vision)  */}
                        <section className="py-20 px-4 md:px-40 bg-white dark:bg-[#101622]">
                            <div className="flex justify-center">
                                <div className="flex flex-col max-w-[960px] w-full gap-12">
                                    <div className="flex flex-col gap-4 text-center items-center">
                                        <h2
                                            className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                                            Our Mission &amp; Vision
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 text-lg font-normal max-w-2xl">
                                            Driven by a passion for simplicity and efficiency in the digital space, we are building
                                            the future of link management.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div
                                            className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#f6f6f8] dark:bg-slate-800/50 p-8 hover:border-[#135bec]/50 transition-colors group">
                                            <div
                                                className="size-12 rounded-full bg-[#135bec]/10 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined text-2xl">ads_click</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    To simplify the web's pathways and make information accessible instantly. We
                                                    believe every click counts and should lead somewhere meaningful without delay.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#f6f6f8] dark:bg-slate-800/50 p-8 hover:border-[#135bec]/50 transition-colors group">
                                            <div
                                                className="size-12 rounded-full bg-[#135bec]/10 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined text-2xl">visibility</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    A world where digital sharing is seamless, secure, and insightful for everyone.
                                                    We aim to set the standard for URL shortening and analytics globally.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/*  CTA Section  */}
                        <section className="py-20 px-4">
                            <div
                                className="max-w-[960px] mx-auto bg-[#135bec] rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                                {/*  decorative circles  */}
                                <div
                                    className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl">
                                </div>
                                <div
                                    className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl">
                                </div>
                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    <h2 className="text-3xl md:text-4xl font-black leading-tight">Ready to streamline your links?</h2>
                                    <p className="text-blue-100 text-lg max-w-xl">Join thousands of marketers and developers who trust
                                        LinkShortly for their URL shortening needs.</p>
                                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                        <Link href="/login">
                                            <button
                                                className="h-12 px-8 rounded-lg bg-white text-[#135bec] text-base font-bold hover:bg-slate-100 transition-colors">
                                                Start for Free
                                            </button>
                                        </Link>
                                        <Link href="/contact">
                                            <button
                                                className="h-12 px-8 rounded-lg bg-[#135bec] border border-white/30 text-white text-base font-bold hover:bg-white/10 transition-colors">
                                                Contact Sales
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}
