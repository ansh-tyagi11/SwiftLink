"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { getUser } from '@/actions/useractions'

const TopNavBar = () => {
    const { data: session, status } = useSession()
    const [data, setData] = useState({})

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
    )
}

export default TopNavBar