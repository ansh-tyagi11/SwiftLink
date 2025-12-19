"use client";
import { useEffect, useState } from "react";
import useUserData from "./useUserData";
import { forUserlink } from "@/actions/useractions";

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

    console.log("links is array:", Array.isArray(links), links.length);

    return { links };
}