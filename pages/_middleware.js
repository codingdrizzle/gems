import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

export default async function middleware(req) {
    console.log(req.cookies)
    let {cookies} = req
    const jwt = cookies.OursiteJWT;
    let url = req.url

    if(!jwt && url.includes('/user')){
        return NextResponse.redirect('https://gems-gh.herokuapp.com/login')
    }
    if(jwt && url.includes('/login')){
        return NextResponse.redirect('https://gems-gh.herokuapp.com/user')
    }




    // const token = await getToken({ req })
    // console.log(token)
    // const url = req.url
    // if (url.includes('/user')) {
    //     if (token === undefined) {
    //         return NextResponse.redirect('/login')
    //     }

    //     try {
    //         if(token) return NextResponse.next()
    //     } catch (error) {
    //         return NextResponse.redirect('/login')
    //     }
    // }
}