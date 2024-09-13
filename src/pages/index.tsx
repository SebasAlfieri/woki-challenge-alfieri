import { FC } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { HomePageContainer } from "@/containers";
import { HomePageProps } from "@/types/model";

const HomePage: FC<HomePageProps> = ({ data }) => {
  return (
    <>
      {data ? (
        <HomePageContainer moviesData={data} />
      ) : (
        <p>Error loading data</p>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );
    const data = response.data.results;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};

export default HomePage;
