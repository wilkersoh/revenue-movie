import { SWRConfig } from "swr";
import { Provider } from "next-auth/client";
import fetcher from "@/utils/fetcher";
import "@/styles/globals.tailwind.css";
import "@/styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  const {session} = pageProps;
  return (
    <Provider
      session={session}
      options={{ baseUrl: process.env.SITE }}>
      <SWRConfig
        value={{
          refreshInterval: 5000,
          fetcher,
        }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  );
}


export default MyApp;
