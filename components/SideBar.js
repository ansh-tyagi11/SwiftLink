"use client";
import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

const SideBar = () => {
    return (
        <aside className="flex md:w-64 w-12 shrink-0 flex-col justify-between border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151C2C] p-4">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 p-2">
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcYiF_jiKYGvK0RxiZawDaWliD4EQh-uJ2XQxnAnve-AjLeuTxel5w3NAUe4_kxgcKzgbaXIomcxcHgnXzBZ4mZ5HzvDLXnW7qc1v3vjcBf0C9blCgUXkdZlvAYMbe9195TM2XiaF_IzNlXYBJUU3CvRwOyZdoZrYA2aHj-PS8IJwVCpvWy7XW-pK6ax0tJT3qjnQ8bnzSwv1eksVVkeK7n8rqPosVj7IzKVhH1L_3SIGjnNVVS-AXCil7Jca-byM8yGXu2Lu5-ofG")' }}
                        />
                        <h1 className="text-gray-900 dark:text-white text-lg font-bold leading-normal">SwiftLink</h1>
                    </div>
                </div>
                <nav className="flex flex-col justify-items-start gap-2 mt-4">
                    <Link className='flex items-center gap-3 px-3 py-2 rounded-lg bg-linear-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-md' href="/home">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>home</span>
                        <p className="text-sm font-medium leading-normal hidden md:block">Home</p>
                    </Link>
                    <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#135bec]/10 dark:bg-[#135bec]/20 text-[#135bec] dark:text-[#135bec] dark:hover:bg-gray-800" href="/allLinks">
                        <span className="material-symbols-outlined text-xl fill-1!">link</span>
                        <p className="text-sm font-medium leading-normal hidden md:block">All Links</p>
                    </Link>
                    <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="/settings">
                        <span className="material-symbols-outlined text-xl">settings</span>
                        <p className="text-sm font-medium leading-normal hidden md:block">Settings</p>
                    </Link>
                </nav>
            </div>
            <div className="flex justify-center flex-col gap-2">
                <Link className="flex min-w-12 md:w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#4F46E5] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4F46E5]/90" href="/home">
                    <span className="truncate">+ </span>
                    <span className="truncate hidden md:block"> New Link</span>
                </Link>
                <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
                <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="/contact">
                    <span className="material-symbols-outlined text-xl">help</span>
                    <p className="text-sm font-medium leading-normal hidden md:block">Help Center</p>
                </Link>
                <button onClick={() => signOut()} className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d121b] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
                    <span className="material-symbols-outlined text-xl">logout</span>
                    <p className="text-sm font-medium leading-normal hidden md:block">Log out</p>
                </button>
            </div>
        </aside>
    )
}

export default SideBar