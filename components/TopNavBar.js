"use client";
import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { getUser } from '@/actions/useractions';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const TopNavBar = () => {
    const { data: session, status } = useSession()
    const [data, setData] = useState({})
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    const toggleSidebar = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (status === "loading") return;

        userData();
    }, [status]);

    const userData = async () => {
        try {
            if (session) {
                let data = await getUser(session.user.email)
                setData(data)
            }
            const res = await fetch("/api/verifyUser");
            const data2 = await res.json();
            let a = await getUser(data2.user)
            if (a) {
                setData(a)
            }
            console.log(data2.user);
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className='md:block hidden'>
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-10 py-4 dark:border-slate-800 dark:bg-[#101122]">
                    <label className="flex flex-col min-w-40 h-10! w-full max-w-sm">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-gray-600 flex border-none bg-gray-50 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input
                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-50 dark:bg-slate-800 h-full placeholder:text-gray-600 px-4 text-sm font-normal leading-normal"
                                placeholder="Search your links..."
                                defaultValue=""
                            />
                        </div>
                    </label>
                    <div className="flex flex-1 justify-end gap-4 items-center">
                        <div className="flex items-center gap-3">
                            <img
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                src={`${data.image}`}
                            />
                            <div className='group flex items-center cursor-pointer'>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">{`${data.name}`}</span>
                                <span className="material-symbols-outlined text-gray-600 dark:text-slate-400">expand_more</span>
                                <div className='hidden group-hover:block bg-white/15 text-centre'>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{`${data.email}`}</span>
                                    <button onClick={() => signOut()} className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" >
                                        <span className="material-symbols-outlined text-xl">logout</span>
                                        <p className="text-sm font-medium leading-normal">Log out</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <div className='md:hidden block'>
                <div className='flex flex-row justify-between items-center pt-2  h-[100px] border-white bg-white w-full'>
                    <div>Logo</div>
                    <div>
                        <button onClick={toggleSidebar}
                            className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white dark:bg-[#151C2C] shadow-lg border border-gray-200 dark:border-gray-800" >
                            <span className="material-symbols-outlined text-gray-900 dark:text-white">
                                {isOpen ? 'close' : 'menu'}
                            </span>
                        </button>

                        {/* Overlay for mobile */}
                        {isOpen && (<div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />)}

                        {/* Sidebar */}
                        <aside
                            className={`fixed md:static inset-y-0 right-0 z-40 flex flex-col justify-between w-64 md:w-64 lg:w-72 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151C2C] p-4 md:p-4 lg:p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>

                            {/* <aside className={`fixed md:static inset-y-0 right-0 z-40 flex flex-col justify-between w-64 md:w-64 lg:w-72 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151C2C] p-4 md:p-4 lg:p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}> */}
                            <div className="flex flex-col gap-4">
                                {/* Logo Section */}
                                <div className="flex items-center gap-3 p-2">
                                    <div className="flex items-center flex-col gap-3 px-3 py-2">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">Hi, {`${data.name}`}</span>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{`${data.email}`}</span>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <nav className="flex flex-col gap-2 mt-4">
                                    <Link onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive('/home') ? 'bg-linear-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-md' : 'text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                        href="/home">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/home') ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                                            home
                                        </span>
                                        <p className="text-sm font-medium leading-normal">Home</p>
                                    </Link>

                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive('/allLinks') ? 'bg-linear-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-md' : 'text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                        href="/allLinks">
                                        <span
                                            className="material-symbols-outlined text-xl"
                                            style={{ fontVariationSettings: isActive('/allLinks') ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }} >
                                            link
                                        </span>
                                        <p className="text-sm font-medium leading-normal">All Links</p>
                                    </Link>

                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive('/settings') ? 'bg-linear-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-md' : 'text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                        href="/settings"
                                    >
                                        <span className="material-symbols-outlined text-xl">settings</span>
                                        <p className="text-sm font-medium leading-normal">Settings</p>
                                    </Link>
                                </nav>
                            </div>

                            {/* Bottom Section */}
                            <div className="flex flex-col gap-2">
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#4F46E5] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4F46E5]/90 transition-colors"
                                    href="/home"
                                >
                                    <span className="truncate">+ New Link</span>
                                </Link>

                                <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>

                                <Link
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    href="/contact"
                                >
                                    <span className="material-symbols-outlined text-xl">help</span>
                                    <p className="text-sm font-medium leading-normal">Help Center</p>
                                </Link>

                                <button
                                    onClick={() => {
                                        signOut();
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">logout</span>
                                    <p className="text-sm font-medium leading-normal">Log out</p>
                                </button>

                            </div>
                        </aside>
                    </div>
                </div >
            </div >
        </>
    )
}

export default TopNavBar