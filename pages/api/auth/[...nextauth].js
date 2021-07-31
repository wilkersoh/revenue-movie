import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";

const database = {
  type: "sqlite",
  database: ":memory:",
  // Synchronize schema with database
  // Use in development or on first run only; may result in data loss!
  synchronize: true,
};

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // database: database,
  // adapter: Adapters.TypeORM.Adapter({
  //   type: "sqlite",
  //   database: ":memory:",
  //   synchronize: true,
  // }),
  pages: {
    signIn: "/auth/signin",
  },
};

export default (req, res) => NextAuth(req, res, options);
