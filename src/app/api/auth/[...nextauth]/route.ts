import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";

export const options: NextAuthOptions = {

  providers: [
    GoogleProvider({
      clientId:process.env.GOOGLE_ID as string,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_API_KEY as string,
      clientSecret: process.env.TWITTER_API_SECRET as string,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),

    CredentialsProvider({
    async authorize(credentials) {
        const res = await fetch("https://exam.elevateegy.com/api/v1/auth/signin",{
          body:JSON.stringify({
            email:credentials?.email,
            password:credentials?.password
          }),
          method:"POST",
          headers:{
            "content-type":"application/json",
          },
        }
      );
      
        const user = await res.json();
        console.log("user data is here",user)
if(user?.message=='success')return user
       return null;
      },
      credentials: {
        email: {
          label: "User Name",
          placeholder: "Please enter your user Name",
          type: "text",
        },
        password: {
          label: "Password",
          placeholder: "Please enter your password",
          type: "password",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
session: {
strategy: "jwt",
},
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
