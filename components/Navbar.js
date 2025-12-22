import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="layout-container flex h-full grow flex-col">
            <div className="relative flex w-full flex-col overflow-x-hidden bg-[#f6f6f8] dark:bg-[#101622]">
                <div className="px-4 pb-0 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* Header */}
                        <header className="flex items-center justify-between whitespace-nowrap px-0 sm:px-10 py-3">
                            <div className="flex items-center gap-4">
                                <div className="text-[#135bec] size-6 sm:size-7">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_6_535)">
                                            <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_6_535">
                                                <rect fill="white" height="48" width="48"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] dark:text-white">LinkShortly</h2>
                            </div>
                            <div className="hidden md:flex flex-1 justify-center gap-9">
                                <Link className="text-sm font-medium leading-normal hover:text-[#135bec] dark:text-gray-300 dark:hover:text-[#135bec]" href="/about">About</Link>
                                <Link className="text-sm font-medium leading-normal hover:text-[#135bec] dark:text-gray-300 dark:hover:text-[#135bec]" href="/contact">Contact</Link>
                            </div>
                            <div className="flex gap-2">
                                <Link href="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f6f6f8] dark:bg-[#101622] text-[#111318] dark:text-gray-200 border border-gray-200 dark:border-gray-700 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <span className="truncate">Login</span>
                                </Link>
                                <Link href="/sign-up" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#135bec] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90">
                                    <span className="truncate">Sign Up</span>
                                </Link>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar