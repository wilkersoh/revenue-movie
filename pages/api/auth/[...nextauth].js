import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  database: process.env.DATABASE_URL,
  pages: {
    signIn: "/account/signup",
  },
};

export default (req, res) => NextAuth(req, res, options);
