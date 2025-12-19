"use client"
import React from 'react'
import SideBar from '@/components/SideBar';
import TopNavBar from '@/components/TopNavBar';
import { useState, useEffect } from 'react';
import { forShortUrl } from '@/actions/useractions';
import useUserData from '../hooks/useUserData';
import { toast } from 'react-toastify';
import useUserLinks from '../hooks/useUserLinks';

export default function SwiftLinkHome() {
    const { data, session } = useUserData();
    const { links } = useUserLinks();
    const [link, setLink] = useState("");

    const shortUrl = async (e) => {
        e.preventDefault();

        let afterShortUrl = await forShortUrl(link, data.email || session.user.email)

        if (!afterShortUrl.success) {
            toast.error(afterShortUrl.message)
            setLink("")
        }
        if (afterShortUrl.success) {
            toast.success(afterShortUrl.message)
            setLink("")
        }
    }

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50">
            <div className="flex h-full min-h-screen">
                {/* SideNavBar */}
                <SideBar />

                {/* Main Content */}
                <main className="flex-1 flex flex-col">
                    {/* TopNavBar */}
                    <TopNavBar />

                    {/* Page Content */}
                    <div className="flex-1 p-10 overflow-auto">
                        <div className="max-w-4xl mx-auto">
                            {/* URL Shortener Card */}
                            <div className="p-6 rounded-xl bg-white shadow-lg">
                                <div className="flex flex-wrap items-center gap-4">
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <input
                                            type='text'
                                            name='text'
                                            onChange={(e) => setLink(e.target.value)}
                                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 border border-slate-300 bg-gray-50 h-14 placeholder:text-gray-600 p-4 text-base font-normal leading-normal"
                                            placeholder="Paste a long URL to shorten..."
                                        />
                                    </label>
                                    <button onClick={shortUrl} type='submit' className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-linear-to-r from-indigo-500 to-purple-500 text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
                                        <span className="truncate">Shorten</span>
                                    </button>
                                </div>
                            </div>

                            {/* Recent Activity Section */}
                            <div className="mt-12 h-[50vh]">
                                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                                <div className="mt-6 flex flex-col gap-4">

                                    {links.length > 0 ?
                                        links.map((li) => {
                                           return (
                                            <div key={li.shortId} className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-base font-semibold text-indigo-500">{process.env.NEXT_PUBLIC_BASE_URL}/{li.shortId}</p>
                                                    <p className="text-sm text-gray-600 truncate max-w-md">{li.originalUrl}</p>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <p className="text-sm text-gray-600 whitespace-nowrap">45 clicks - 2 mins ago</p>
                                                    <button onClick={() => navigator.clipboard.writeText(
                                                        `${process.env.NEXT_PUBLIC_BASE_URL}/${li.shortId}`
                                                    )} className="p-2 rounded-lg hover:bg-slate-100 text-gray-600">
                                                        <span className="text-xl">📋</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}) :
                                        <div className='flex items-center justify-center'>No Links found.</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}