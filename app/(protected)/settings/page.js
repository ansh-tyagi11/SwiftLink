"use client";
import React, { useEffect, useState } from 'react'
import SideBar from '@/components/SideBar';
import { useSession } from 'next-auth/react';
import { getUser } from '@/actions/useractions';

export default function SwiftLinkSettings() {
    const { data: session, status } = useSession();
    const [data, setData] = useState({});
    const [name, setName] = useState({ name: "" });

    useEffect(() => {
        if (status == "authenticated")
            userData()
    }, [session])

    const userData = async () => {
        let data = await getUser(session.user.email)
        setData(data)
    }
    console.log(data)

    const updateName = async () => {
        let name = await getName(session.user.email, name)
    }
    console.log(name)

    return (
        <div className="flex h-screen w-full bg-gray-50">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                <div className="mx-auto flex max-w-4xl flex-col gap-8">
                    {/* Profile Section */}
                    <div>
                        <div className="mb-6 flex min-w-72 flex-col gap-2">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Profile</h1>
                            <p className="text-base text-gray-500">
                                Update your photo and personal details.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                            <div className="p-6">
                                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                                    {/* Profile Picture */}
                                    <div className="flex flex-col items-center">
                                        <div className="relative">
                                            <img className='h-24 w-24 rounded-full' src={`${data.image}`} alt="" />
                                            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100">
                                                <span className="material-symbols-outlined text-lg text-gray-500">
                                                    edit
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Form Fields */}
                                    <div className="flex-1 grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <label className="flex w-full flex-col">
                                            <p className="pb-2 text-sm font-medium text-gray-900">Full Name</p>
                                            <input
                                                type="text"
                                                name='text'
                                                value={name.text}
                                                defaultValue={`${data.name}`}
                                                onChange={(e) => setName(e.target.value)}
                                                className="h-11 w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="Enter your full name"
                                            />
                                        </label>

                                        <label className="flex w-full flex-col">
                                            <p className="pb-2 text-sm font-medium text-gray-900">Email Address</p>
                                            <input
                                                type="email"
                                                value={`${data.email}`}
                                                className="h-11 w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-sm text-gray-500"
                                                placeholder="Enter your email address"
                                                readOnly
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-end gap-3 rounded-b-xl border-t border-gray-200 bg-gray-50 px-6 py-4">
                                <button className="flex h-9 min-w-[84px] items-center justify-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-900 hover:bg-gray-300">
                                    Cancel
                                </button>
                                <button className="flex h-9 min-w-[84px] items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-indigo-700" onClick={() => updateName()}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Security Section */}
                    <div>
                        <div className="mb-6 flex min-w-72 flex-col gap-2">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Security</h2>
                            <p className="text-base text-gray-500">
                                Manage your password and two-factor authentication.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                            <div className="p-6">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                    <label className="flex w-full flex-col">
                                        <p className="pb-2 text-sm font-medium text-gray-900">Current Password</p>
                                        <input
                                            type="password"
                                            name='oldpassword'
                                            className="h-11 w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Enter current password"
                                            required={true}
                                        />
                                    </label>

                                    <label className="flex w-full flex-col">
                                        <p className="pb-2 text-sm font-medium text-gray-900">New Password</p>
                                        <input
                                            type="password"
                                            name='newpassword'
                                            className="h-11 w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Enter new password"
                                            required={true}
                                        />
                                    </label>

                                    <label className="flex w-full flex-col">
                                        <p className="pb-2 text-sm font-medium text-gray-900">Confirm New Password</p>
                                        <input
                                            type="password"
                                            name='confirmpassword'
                                            className="h-11 w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Enter new password"
                                            required={true}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4">
                                <button className="flex h-9 min-w-[84px] items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-indigo-700">
                                    Update Password
                                </button>
                            </div>

                            {/* Two-Factor Authentication */}
                            <div className="rounded-b-xl border-t border-gray-200 p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                                        <p className="text-sm text-gray-500">
                                            Add an extra layer of security to your account.
                                        </p>
                                    </div>
                                    <label className="relative inline-flex cursor-pointer items-center">
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                            className="peer sr-only"
                                        />
                                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-500/30"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style> */}
        </div>
    );
}