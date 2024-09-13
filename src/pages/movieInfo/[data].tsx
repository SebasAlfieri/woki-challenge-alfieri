import { FC, useEffect } from "react";
import { HomePageProps } from "@/types/model";
import { setMovies } from "@/redux/features/moviesDataBaseSlice";
import { useAppDispatch } from "@/redux/hooks";
import { MovieDetailContainer } from "@/containers";

const MovieInfoPage: FC<HomePageProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setMovies(data));
    }
  }, [data, dispatch]);

  return <>{data ? <MovieDetailContainer /> : <p>Error loading data</p>}</>;
};

export default MovieInfoPage;
