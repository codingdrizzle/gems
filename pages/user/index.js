import Head from 'next/head'
import React, { useEffect } from 'react'
import UserHome from '../../src/components/user-dashboard/user-home'
import jwt from 'jsonwebtoken'
import {useSetAtom} from "jotai";
import { tokenData} from "../../src/store";
import {message} from 'antd'
import jwt_decode from "jwt-decode";

const UserHomePage = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const token = typeof window !== "undefined" && localStorage.getItem('token')
    const setTokenData = useSetAtom(tokenData);

    useEffect(() => {
        const token_data = jwt_decode(token)
        setTokenData(token_data.user)
    },[])

    return (
        <>
            <Head>
                <title title='Ghana Emergency Services'>GEMS - Home</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <UserHome />
        </>
    )
}

export default UserHomePage