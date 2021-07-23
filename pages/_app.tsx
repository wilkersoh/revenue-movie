import { SWRConfig } from "swr";

import "@/styles/globals.tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 5000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
