import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { Providers } from "@/redux/providers";
import axios from "axios";
import { MovieProps } from "@/types/model";

export interface MyAppProps extends AppProps {
  data?: MovieProps[];
}

function App({ Component, pageProps, data }: MyAppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} moviesData={data} />
      </Layout>
    </Providers>
  );
}

App.getInitialProps = async () => {
  try {
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );
    const data = response.data.results;

    return {
      pageProps: {
        data,
      },
    };
  } catch (error) {
    return {
      pageProps: {
        data: null,
      },
    };
  }
};

export default App;
