"use client";
import { useEffect, useState } from "react";

export default function isActive() {
    const [data, setData] = useState(null)

    useEffect(() => {
        isUserActive();
    }, [])

    const isUserActive = async () => {
        const res = await fetch("/api/verifyUser");
        const verifyResponse = await res.json();

        if (verifyResponse.success) {
            setData(true);
            return;
        }
        setData(false)
    }
    return { data }
}