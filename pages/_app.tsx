import { SWRConfig } from "swr";
import fetcher from "@/utils/fetcher";
import "@/styles/globals.tailwind.css";
import "@/styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 5000,
        fetcher
      }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
