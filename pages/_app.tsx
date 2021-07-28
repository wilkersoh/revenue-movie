import { SWRConfig } from "swr";
import { Provider } from "next-auth/client";
import fetcher from "@/utils/fetcher";
import "@/styles/globals.tailwind.css";
import "@/styles/index.css";

function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  return (
    <Provider session={session}>
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
