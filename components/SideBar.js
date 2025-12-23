"use client";
import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SideBar = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (path) => pathname === path;

    const logOut = async () => {
        if (session) {
            signOut();
            return;
        }

        const res = await fetch("/api/logout", {
            method: "POST",
            credentials: "include",
        });
        let data = await res.json();
        if (data.success) {
            toast.success(data.message)
            router.push("/login")
        }
    }

    return (
        <>
            <aside className='md:block hidden'>
                <div className="flex h-screen lg:w-64 w-14 shrink-0 flex-col justify-between border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151C2C] lg:p-4 pl-1.5 p-4">
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center">

                                <div className="flex items-center gap-2">
                                    <img src="/favicon.png" width={32} height={32} alt="Logo" />
                                    <h2 className="font-bold leading-none tracking-[-0.015em] dark:text-white text-[28px] md:hidden lg:block">
                                        <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                            Link
                                        </span>
                                        Shortly
                                    </h2>
                                </div>

                            </div>
                        </div>
                        <nav className="flex flex-col justify-items-start gap-2 mt-4">

                            <Link className={`relative group flex items-center gap-3 lg:px-3 px-1.5 py-2 rounded-lg transition-all ${isActive('/home') ? 'bg-linear-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-md' : 'text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`} href="/home">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>home</span>

                                <p className="text-sm font-medium leading-normal hidden md:hidden lg:block">Home</p>

                                <p className="text-sm font-medium leading-normal hidden lg:hidden lg:group-hover:hidden group-hover:block absolute bottom-7 left-8 group-hover:text-black group-hover:border-black group-hover:bg-white group-hover:text-sm">Home</p>

                            </Link>

                            <Link className={`relative group flex items-center gap-3 lg:px-3 px-1.5 py-2 rounded-lg transition-all ${isActive('/allLinks') ? 'bg-linear-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-md' : 'text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`} href="/allLinks">

                                <span className="material-symbols-outlined text-xl fill-1!">link</span>

                                <p className="text-sm font-medium leading-normal hidden md:hidden lg:block">All Links</p>

                                <p className="text-sm font-medium leading-normal hidden lg:hidden lg:group-hover:hidden group-hover:block absolute bottom-7 left-8 group-hover:text-black group-hover:border-black group-hover:bg-white group-hover:text-sm whitespace-nowrap">All Links</p>

                            </Link>

                            <Link className={`relative group flex items-center gap-3 lg:px-3 px-1.5 py-2 rounded-lg transition-all ${isActive('/settings') ? 'bg-linear-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-md' : 'text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`} href="/settings">

                                <span className="material-symbols-outlined text-xl">settings</span>

                                <p className="text-sm font-medium leading-normal hidden md:hidden lg:block">Settings</p>

                                <p className="text-sm font-medium leading-normal hidden lg:hidden lg:group-hover:hidden group-hover:block absolute bottom-7 left-8 group-hover:text-black group-hover:border-black group-hover:bg-white group-hover:text-sm">Settings</p>

                            </Link>

                        </nav>
                    </div>

                    <div className="flex justify-center flex-col gap-2">

                        <Link className="relative group flex lg:min-w-12 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#4F46E5] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4F46E5]/90" href="/home">
                            <span className="lg:truncate">+ </span>

                            <span className="truncate hidden md:hidden lg:block"> New Link</span>

                            <div className="text-sm font-medium leading-normal hidden lg:hidden lg:group-hover:hidden group-hover:block absolute left-8 bottom-8 group-hover:text-black group-hover:border-black group-hover:bg-white group-hover:text-sm whitespace-nowrap ">New Link</div>

                        </Link>

                        <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>

                        <Link className="relative group flex items-center gap-3 lg:px-3 px-1.5 py-2 rounded-lg text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="/contact">

                            <span className="material-symbols-outlined text-xl">help</span>

                            <p className="text-sm font-medium leading-normal hidden md:hidden lg:block">Help Center</p>

                            <p className="text-sm font-medium leading-normal hidden lg:hidden lg:group-hover:hdden group-hover:block absolute bottom-7 left-8 group-hover:text-black group-hover:border-black group-hover:bg-white group-hover:text-sm whitespace-nowrap">Help Centre</p>
                        </Link>

                        <button onClick={logOut} className="relative group flex items-center gap-3 lg:px-3 px-1.5 py-2 rounded-lg text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">

                            <span className="material-symbols-outlined text-xl">logout</span>

                            <p className="text-sm font-medium leading-normal hidden md:hidden lg:block">Log out</p>

                            <p className="text-sm font-medium leading-normal hidden lg:hidden lg:group-hover:hidden group-hover:block absolute bottom-7 left-8 group-hover:text-black group-hover:border-black group-hover:bg-white group-hover:text-sm whitespace-nowrap">Log out</p>

                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideBar