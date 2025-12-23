"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getUser } from '@/actions/useractions';

export default function useUserData() {
    const { data: session, status } = useSession();
    const [data, setData] = useState({});

    useEffect(() => {
        if (status === "loading") return;

        fetchUser();
    }, [status]);

    const fetchUser = async () => {
        try {
            if (session) {
                let data = await getUser(session.user.email)
                setData(data)
                return;
            }
            const res = await fetch("/api/verifyUser");
            const verifyResponse = await res.json();
            let verifyiedUser = await getUser(verifyResponse.user)
            if (verifyiedUser) {
                setData(verifyiedUser)
            }
            
        }
        catch (error) {
            return error;
        }
    }
    
    return { data, setData, session }
}
