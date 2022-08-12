import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import User from '../../../models/userSchema'
import connect from '../../../utils/connect-mongo'


export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {
                connect()
                const { email, password } = credentials
                let user = await User.findOne({ email }).exec()
                
                if (!user) {
                    throw new Error("No user found.")
                }
                const userDoc = user._doc
                const isMatch = await bcrypt.compare(password, userDoc.password)

                // If no error and we have user data, return it
                if (user && isMatch) {
                    // delete userDoc.password
                    // userDoc.name = userDoc.firstname + userDoc.lastname;
                    return userDoc
                }
                // Return null if user data could not be retrieved
                throw new Error("Username or Password incorrect")
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, user, token }) {
            if (token && token.id) {
                session.user.id = token.id
                session.user.name = token.name
                console.log('session got called',  session)
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user && user._id) {
                token.id = user._id
                token.name = user.firstname
            }
            return token
        }
    }

})