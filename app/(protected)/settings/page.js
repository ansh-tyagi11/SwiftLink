"use client";
import React, { useEffect, useState } from 'react'
import SideBar from '@/components/SideBar';
import { getName, updatePassword } from '@/actions/useractions';
import { toast } from 'react-toastify';
import useUserData from '../hooks/useUserData';
import TopNavBar from '@/components/TopNavBar';

export default function LinkShortlySettings() {
    const { data, setData, session } = useUserData();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [error, setError] = useState(false)

    useEffect(() => {
        // If either field is empty, don't show error
        if (!newPassword || !confirmNewPassword) {
            setError(true);
            return;
        }

        // If passwords don't match
        if (newPassword !== confirmNewPassword) {
            setError(true);
        }
        else {
            setError(false); // passwords match → clear error
        }
    }, [newPassword, confirmNewPassword]);

    const updateName = async () => {
        const updatedName = await getName(name, session?.user?.email || data.email);
        setName(updatedName)
        // setData(prev => ({ ...prev, name: updatedName }));
        toast.success("Name updated successfully!");
    }
    console.log(name)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedPassword = await updatePassword(data.email, password, confirmNewPassword);
        if (updatedPassword.success && updatedPassword.message) {
            toast.success(updatedPassword.message)
        }
        if(!updatedPassword.success){
            toast.error(updatedPassword.message)
        }
        setPassword("")
        setNewPassword("")
        setConfirmNewPassword("")
    }

    return (
        <div className="flex h-screen w-full bg-gray-50">
            {/* Sidebar */}
            <SideBar />


            {/* Main Content */}
            <main className="flex-1 overflow-y-auto md:p-8 p-6 pt-8">
                <div className='md:hidden block'><TopNavBar /></div>
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
                                                defaultValue={`${data.name}`}
                                                onChange={(e) => setName(e.target.value)}
                                                className="h-11 w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="Enter your full name"
                                                required
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
                                <button onClick={() => setName(`${data.name}`)} className="flex h-9 min-w-[84px] items-center justify-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-900 hover:bg-gray-300">
                                    Cancel
                                </button>
                                <button className="flex h-9 min-w-[84px] items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-indigo-700" disabled={!name} onClick={updateName}>
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

                        <form onSubmit={handleSubmit} method='POST'>
                            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                                <div className="p-6">
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                        <label className="flex w-full flex-col">
                                            <p className="pb-2 text-sm font-medium text-gray-900">Current Password</p>
                                            <input
                                                type="password"
                                                name='oldpassword'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
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
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
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
                                                value={confirmNewPassword}
                                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                                className={error ? 'h-11 w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500' : 'h-11 w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500'}
                                                placeholder="Enter new password"
                                                required={true}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4">
                                    <button type='submit' disabled={!password || !newPassword || !confirmNewPassword || error} className="flex h-9 min-w-[84px] items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-indigo-700">
                                        {/* <button type='submit' className="flex h-9 min-w-[84px] items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-indigo-700"> */}
                                        Update Password
                                    </button>
                                </div>
                            </div>
                        </form>
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

            </main >
        </div >
    );
}