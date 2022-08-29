import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "../../../models/userSchema";
// import connect from "../../../utils/connect-mongo";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        // await connect();
        const { email, password } = credentials;
        let user = await User.findOne({ email }).exec();
        console.log(user)
        if (!user) {
          throw new Error("No user found.");
        }
        const userDoc = user._doc;
        const isMatch = await bcrypt.compare(password, userDoc.password);

        // If no error and we have user data, return it
        if (user && isMatch) {
          // delete userDoc.password
          delete userDoc.complaints
          // userDoc.name = userDoc.firstname + userDoc.lastname;
          req.user = userDoc;
          return userDoc;
        }
        // Return null if user data could not be retrieved
        throw new Error("Username or Password incorrect");
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  sessions: { jwt : true},
  callbacks: {
    async session({ session, user, token }) {
      if (token && token.id) {
        session.user = token.user;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user && user._id) {
        token.id = user._id;
        token.user = user;
      }
      return token;
    },
  },
});
