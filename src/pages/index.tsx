import { FC } from "react";
import "tailwindcss/tailwind.css";
import { HomePageContainer } from "@/containers";
import { HomePageProps } from "@/types/model";
import { setMovies } from "@/redux/features/moviesDataBaseSlice";
import { useAppDispatch } from "@/redux/hooks";

const HomePage: FC<HomePageProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  dispatch(setMovies(data));

  return <>{data ? <HomePageContainer /> : <p>Error loading data</p>}</>;
};

export default HomePage;
