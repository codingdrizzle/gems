import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import User from '../../../models/userSchema'


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
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)

                const { email, password } = credentials
                console.log({ email, password })
                const user = await User.findOne({ email }).exec()
                if (!user) {
                    throw new Error("No user found.")
                }
                const userDoc = user._doc

                const isMatch = await bcrypt.compare(password, userDoc.password)



                // If no error and we have user data, return it
                if (user && isMatch) {
                    delete userDoc.password
                    return userDoc
                }
                // Return null if user data could not be retrieved
                throw new Error("Username or Password incorrect")
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user && user._id) {
                token.id = user._id
            }
            return token
        },
        async session({ session, user, token }) {
            if (user) {
                session.id = token.id
                // session.user.username = user.username
                // session.user.firstname = user.firstname
            }
            return session
        }
    }

})