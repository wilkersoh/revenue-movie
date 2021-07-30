import { SWRConfig } from "swr";
import { Provider } from "next-auth/client";
import fetcher from "@/utils/fetcher";
import "@/styles/globals.tailwind.css";
import "@/styles/index.css";

function MyApp({ Component, pageProps }) {

  return (
    <Provider
      session={pageProps.session}
      options={{ baseUrl: "http://localhost:3000" }}>
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
