"use client";
import React from 'react';
import Link from 'next/link';
import SideBar from '@/components/SideBar';
import TopNavBar from '@/components/TopNavBar';
import useUserLinks from '../hooks/useUserLinks';
import { toast } from 'react-toastify';
import { updatedClick } from '@/actions/useractions';

export default function Dashboard() {
    let { sortedLinks, deleteLink } = useUserLinks();

    const handleDelete = (id) => {
        deleteLink(id)
    }

    const updateClick = async (id) => {
        let a = await updatedClick(id)

        if (a.success) {
            return true;
        }
        return false;
    }

    return (
        <div className="font-display bg-[#f6f6f8]  dark:bg-[#101622]  text-[#171A1C] dark:text-gray-200">
            <div className="relative flex min-h-screen w-full flex-col">
                <div className="flex h-full w-full flex-1 overflow-x-hidden overflow-y-hidden">

                    {/*  SideNavBar  */}
                    <SideBar />

                    {/*  Main Content  */}
                    <main className="flex flex-1 flex-col lg:p-8 lg:pt-0" style={{ padding: 0 }}>
                        <div className='md:-ml-8 ml-0'><TopNavBar /></div>

                        <div className="w-full max-w-7xl mx-auto p-6 md:pt-6 pt-0 mt-[66px] md:mt-0">
                            {/*  PageHeading  */}
                            <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pt-6">
                                <div className="flex flex-col">
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">All Links</h1>
                                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage, edit, and track your shortened URLs.</p>
                                </div>
                            </div>
                            {/*  Toolbar & SearchBar  */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                                <div className="w-full sm:max-w-xs">
                                    <label className="flex flex-col w-full">
                                        <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                                            <div className="text-[#4c669a] dark:text-gray-400 flex bg-white dark:bg-[#151C2C] items-center justify-center p-3 rounded-l-lg border border-gray-300 dark:border-gray-700 border-r-0">
                                                <span className="material-symbols-outlined text-xl">search</span>
                                            </div>
                                            <input
                                                className="form-input p-3 pb-[17px] w-full rounded-r-lg text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151C2C] outline-none focus:outline-none focus:ring-0 placeholder:text-[#4c669a] dark:placeholder:text-gray-500 text-sm"
                                                placeholder="Search your links..."
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="hidden md:block items-center gap-3">
                                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151C2C] px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Filter by Date</p>
                                        <span className="material-symbols-outlined text-xl text-gray-500 dark:text-gray-400">expand_more</span>
                                    </button>
                                </div>
                            </div>
                            {/*  Data Table  */}
                            <div className="h-[60vh] hidden md:block overflow-y-auto bg-white dark:bg-[#151C2C] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                            <tr>
                                                <th className="px-6 py-3" scope="col">Short Link</th>
                                                <th className="px-6 py-3" scope="col">Original URL</th>
                                                <th className="px-6 py-3" scope="col">Clicks</th>
                                                <th className="px-6 py-3" scope="col">Date Created</th>
                                                <th className="px-6 py-3 text-right" scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                                            {sortedLinks.map((li, index) => (

                                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center gap-2">
                                                            <Link onClick={() => updateClick(li._id)} className="font-medium text-[#135bec] hover:underline" href={`${li.originalUrl}`} target="_blank">{process.env.NEXT_PUBLIC_BASE_URL}/{li.shortId}</Link>
                                                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" onClick={() => {
                                                                navigator.clipboard.writeText(
                                                                    `${process.env.NEXT_PUBLIC_BASE_URL}/${li.shortId}`
                                                                ); toast.success("Copied!");
                                                            }}>
                                                                <span className="material-symbols-outlined text-base">content_copy</span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 max-w-2.5 py-4 whitespace-nowrap truncate">
                                                        <span title={`${li.originalUrl}`}>{li.originalUrl}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{li.clicks}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap"> {new Date(li.createdAt).toDateString()}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                                        <button onClick={() => handleDelete(li._id)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                                                            <span className="material-symbols-outlined">more_horiz</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody >
                                    </table>
                                </div>
                            </div>

                            {/* Mobile Cards */}
                            <div className="md:hidden h-[60vh] w-full max-w-full space-y-4 overflow-x-hidden">
                                {sortedLinks.map((li) => (
                                    <div key={li._id}
                                        className="w-full max-w-full bg-white dark:bg-[#151C2C] border border-gray-200 dark:border-gray-800 rounded-xl p-4 space-y-2 overflow-hidden">

                                        {/* Short Link */}
                                        <div className="w-full">
                                            <p className="text-xs text-gray-500">Short Link</p>
                                            <div className='flex items-center gap-0'>
                                                <Link onClick={() => updateClick(li._id)} className="text-[#135bec] font-medium break-all w-full" href={`${li.originalUrl}`} target="_blank">
                                                    {process.env.NEXT_PUBLIC_BASE_URL}/{li.shortId}
                                                </Link>
                                                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" onClick={() => {
                                                    navigator.clipboard.writeText(
                                                        `${process.env.NEXT_PUBLIC_BASE_URL}/${li.shortId}`
                                                    ); toast.success("Copied!");
                                                }}>
                                                    <span className="material-symbols-outlined text-base">content_copy</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="w-full min-w-0">
                                            <p className="text-xs text-gray-500">Original URL</p>
                                            <div className="w-full min-w-0">
                                                <p className="text-sm text-gray-700 dark:text-gray-300 truncate" style={{ maxWidth: "200px" }} title={li.originalUrl}>
                                                    {li.originalUrl}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex justify-between text-sm w-full">
                                            <div className="min-w-0">
                                                <p className="text-gray-500 text-xs">Clicks</p>
                                                <p>{li.clicks}</p>
                                            </div>

                                            <div className="min-w-0 text-right">
                                                <p className="text-gray-500 text-xs">Created</p>
                                                <p className="whitespace-nowrap">
                                                    {new Date(li.createdAt).toDateString()}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <button
                                            onClick={() => handleDelete(li._id)}
                                            className="w-full mt-2 py-2 text-sm rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div >
        </div >
    );
}
