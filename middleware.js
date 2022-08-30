import { withAuth } from 'next-auth/middleware'

export default withAuth(
    function middleware(){
        return NextResponse.rewrite(new URL('/user', req.url))
    },
    {
        callbacks: {
            authorized(token){
                return token?.role === 'user'
            }
        } 
    }

)

export const config = { matcher: ['/', '/user']}