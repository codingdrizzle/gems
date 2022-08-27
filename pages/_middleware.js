import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

export default async function middleware(req) {
    const token = await getToken({ req })
    console.log(token)
    const url = req.url
    if (url.includes('/user')) {
        if (token === undefined) {
            return NextResponse.redirect('/login')
        }

        try {
            if(token) return NextResponse.next()
        } catch (error) {
            return NextResponse.redirect('/login')
        }
    }
}