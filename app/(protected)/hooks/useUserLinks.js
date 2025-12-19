"use client";
import { useEffect, useState } from "react";
import useUserData from "./useUserData";
import { forUserlink, deleteLink2 } from "@/actions/useractions";
import { toast } from "react-toastify";

export default function useUserLinks() {
    const { data, session } = useUserData();
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const email = data?.email || session?.user?.email;
        if (!email) return;

        async function getLink() {
            const res = await forUserlink(email);
            setLinks(res?.links || []);
        }

        getLink();
    }, [data?.email, session?.user?.email]);

    const deleteLink = async (id) => {
        let a = await deleteLink2(id)
        if (a.success) {
            setLinks(prev => prev.filter(link => link._id !== id));
            toast.success(a.message)
        }
    };

    const sortedLinks = [...links].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );


    console.log(links)
    console.log("links is array:", Array.isArray(links), links.length);

    return { sortedLinks, deleteLink ,setLinks};
}