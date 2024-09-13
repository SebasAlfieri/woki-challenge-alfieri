import { FC } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { HomePageContainer } from "@/containers";
import { HomePageProps } from "@/types/model";
import { setMovies } from "@/redux/features/moviesDataBaseSlice";
import { store } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";

const HomePage: FC<HomePageProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  dispatch(setMovies(data));

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
  const state = store.getState().movies.movies;

  if (state.length > 0) {
    return {
      props: {
        data: state,
      },
    };
  }

  try {
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );
    const data = response.data.results;

    store.dispatch(setMovies(data));

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
