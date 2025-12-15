import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <>
            <Navbar />
            <div
                className="bg-[#f6f6f8] dark:bg-[#101622] text-slate-900 dark:text-white font-manrope overflow-x-hidden antialiased">
                <div className="relative flex min-h-screen flex-col">

                    <main className="grow">
                        {/* <!-- HeroSection --> */}
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
                                        <button
                                            className="h-12 px-6 rounded-lg bg-[#135bec] text-white text-base font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                                            Get Started
                                        </button>
                                        <button
                                            className="h-12 px-6 rounded-lg bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                            Learn More
                                        </button>
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
                        {/* <!-- Stats --> */}

                        <section
                            className="bg-linear-to-b from-background-light dark:from-[#0c111a] to-white dark:to-background-dark py-16 md:py-20 -mt-10 md:-mt-16 relative z-10">
                            <div className="px-4 md:px-40 flex justify-center">
                                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div
                                        className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 text-center items-center">
                                        <span className="material-symbols-outlined text-4xl text-primary mb-2">trending_up</span>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                                            Total Links Managed</p>
                                        <p className="text-slate-900 dark:text-white text-4xl font-extrabold mt-1">1M+</p>
                                        <p className="text-xs text-slate-400">Scalable infrastructure</p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 text-center items-center">
                                        <span className="material-symbols-outlined text-4xl text-primary mb-2">verified_user</span>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                                            Service Uptime</p>
                                        <p className="text-slate-900 dark:text-white text-4xl font-extrabold mt-1">99.99%</p>
                                        <p className="text-xs text-slate-400">Guaranteed reliability</p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 text-center items-center">
                                        <span className="material-symbols-outlined text-4xl text-primary mb-2">groups</span>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                                            Enterprise Clients</p>
                                        <p className="text-slate-900 dark:text-white text-4xl font-extrabold mt-1">200+</p>
                                        <p className="text-xs text-slate-400">Happy Users</p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 text-center items-center">
                                        <span className="material-symbols-outlined text-4xl text-primary mb-2">timer</span>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                                            Years of Innovation</p>
                                        <p className="text-slate-900 dark:text-white text-4xl font-extrabold mt-1">5+</p>
                                        <p className="text-xs text-slate-400">Pioneering link tech</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- FeatureSection (Mission & Vision) --> */}
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

                        {/* <!-- Team Section --> */}
                        <section
                            className="py-20 px-4 md:px-40 bg-white dark:bg-[#101622] border-t border-slate-100 dark:border-slate-800">
                            <div className="flex justify-center">
                                <div className="flex flex-col max-w-[960px] w-full">
                                    <div className="mb-12 text-center">
                                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Meet the Team</h2>
                                        <p className="text-slate-600 dark:text-slate-400">The minds behind the links.</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {/* <!-- Member 1 --> */}
                                        <div className="flex flex-col items-center text-center group">
                                            <div
                                                className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800 group-hover:border-[#135bec] transition-colors">
                                                <img alt="Portrait of Sarah Jenkins, CEO" className="w-full h-full object-cover"
                                                    data-alt="Portrait of Sarah Jenkins, CEO"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJHGeNhoddSgZ26Hc0pMfwc960dolVFHO_dxebZCXgK5hJv_a-Vl3RL9YtfZYvwl81fPK7noeabtNa7OiA4Xd8yS-1LRRSqLrY8T_U2BPYx3w8V0p9JM6xBxa-SMzCWa0-e_xltduBEG_pwErtZytD4F7R0IpR_plkGYLfc9mmpXWDqhshBQm8CSBT3b0DvT_EfWQIoHvQR00ZfUFL4QY5vsRIPqDef0pzyOBJmrvH5uIdRgM3w0Pvz9E-zs3Wp8NCMSrzJnjgQh4" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sarah Jenkins</h3>
                                            <p className="text-sm text-[#135bec] font-medium mb-2">CEO &amp; Co-Founder</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Visionary leader with 10+ years in
                                                SaaS.</p>
                                        </div>
                                        {/* <!-- Member 2 --> */}
                                        <div className="flex flex-col items-center text-center group">
                                            <div
                                                className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800 group-hover:border-[#135bec] transition-colors">
                                                <img alt="Portrait of David Chen, CTO" className="w-full h-full object-cover"
                                                    data-alt="Portrait of David Chen, CTO"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtiw7bkD2-SEMj15x7J7u01OOHp_MzamN9h_Ok8B4JngzP36rE_RmbyyNjJF46UsYsdFCwHqtbt0mlstiv8VvWRyHhpdtJcWPmkB20r2ZNjNg79v7KDbNfx8rlt2rTSu20wCzE2DX5oMRGFUkcF8M9G8ximewA52oSpdpRlGL_60I8-4SECdpsrw_XXW_b_r8H4fwM0ihyOrRh3ShjZzFB-0nKY8k6r5gccOOa6CsojmZ92dn-zSZwb4rlhXAHwNAcIXRHuh2c8Go" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">David Chen</h3>
                                            <p className="text-sm text-[#135bec] font-medium mb-2">CTO</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">System architect &amp; security
                                                expert.</p>
                                        </div>
                                        {/* <!-- Member 3 --> */}
                                        <div className="flex flex-col items-center text-center group">
                                            <div
                                                className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800 group-hover:border-[#135bec] transition-colors">
                                                <img alt="Portrait of Elena Rodriguez, Head of Product"
                                                    className="w-full h-full object-cover"
                                                    data-alt="Portrait of Elena Rodriguez, Head of Product"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuS0Nh7EPZTootaVjrWLU6UYawqqSqNZOdmiAbjz1n0PNqd8bSWoTu7SOrzlki0Efc26Pg8vdj3WRDSysgJ7h1BhjncabiDq8dp5-FYTnO3l8SVHRT_E9a0tLxmzt3WT1fqPJssHszU28-KRPf7pQN7dclKhq1ZbTto85hQpNsaRrajXK7gdCylIGMsEMT7AggmyUmW2_xDpWLc62pqzSxn_0FzGknIxOR_aqxIccAEXszz0q-3vVOT9F1moZ9E_3DquQllh06lQA" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Elena Rodriguez</h3>
                                            <p className="text-sm text-[#135bec] font-medium mb-2">Head of Product</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Obsessed with user experience.</p>
                                        </div>
                                        {/* <!-- Member 4 --> */}
                                        <div className="flex flex-col items-center text-center group">
                                            <div
                                                className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800 group-hover:border-[#135bec] transition-colors">
                                                <img alt="Portrait of Michael Ross, Lead Developer"
                                                    className="w-full h-full object-cover"
                                                    data-alt="Portrait of Michael Ross, Lead Developer"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-rHhrdCdPDRBAPKfSvME5jb_Xhn5m0tCmt0PS5EfOcDllIaLc-KIA5awNCFii_bUwlEz1FyN3edkaYw9UDq2r6fZCHEQ1jarF9vKm8o4XBDYVfTjNprK8Yxi6jNbxRyLl_VKVZTibqsrEgZHJttj5u8jrW3vuB0WpMVnjq0D-MuiR2d1TEJp6diUu9dYUzjokeyBZuWznCpkH9iAhgbe9qNEDzwKmWyDRphdXj9jBEEvE-8YL4f-NCjUBeEbA9kP7_An81KnEViM" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Michael Ross</h3>
                                            <p className="text-sm text-[#135bec] font-medium mb-2">Lead Developer</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Full-stack wizard &amp; API guru.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- CTA Section --> */}
                        <section className="py-20 px-4">
                            <div
                                className="max-w-[960px] mx-auto bg-[#135bec] rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                                {/* <!-- decorative circles --> */}
                                <div
                                    className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl">
                                </div>
                                <div
                                    className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl">
                                </div>
                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    <h2 className="text-3xl md:text-4xl font-black leading-tight">Ready to streamline your links?</h2>
                                    <p className="text-blue-100 text-lg max-w-xl">Join thousands of marketers and developers who trust
                                        SwiftLink for their URL shortening needs.</p>
                                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                        <button
                                            className="h-12 px-8 rounded-lg bg-white text-[#135bec] text-base font-bold hover:bg-slate-100 transition-colors">
                                            Start for Free
                                        </button>
                                        <button
                                            className="h-12 px-8 rounded-lg bg-[#135bec] border border-white/30 text-white text-base font-bold hover:bg-white/10 transition-colors">
                                            Contact Sales
                                        </button>
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
