import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { Providers } from "@/redux/providers";
// import { Bebas_Neue } from "@next/font/google";

// const bebas = Bebas_Neue({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout
      // className={roboto.className}
      >
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
