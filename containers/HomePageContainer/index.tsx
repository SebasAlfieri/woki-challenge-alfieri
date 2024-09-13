import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { useGetMoviesQuery } from "@/redux/services/api";
import { setMovies } from "@/redux/features/moviesDataBaseSlice";
import { Gallery, Hero } from "@/components";
import "tailwindcss/tailwind.css";
import { HomePageContainerProps } from "@/types/model";
import { MovieProps } from "@/types/model";

function HomePageContainer({ moviesData }: HomePageContainerProps) {
  const dispatch = useAppDispatch();
  const { data: movies, error, isLoading } = useGetMoviesQuery(undefined);
  const [featuredMovie, setFeaturedMovie] = useState<MovieProps | null>(null);
  console.log(movies); //TO DO fix

  useEffect(() => {
    if (moviesData) {
      dispatch(setMovies(moviesData));

      const sortedMovies = [...moviesData].sort(
        (a, b) => b.popularity - a.popularity
      );
      const top5Movies = sortedMovies.slice(0, 5);
      const randomMovie =
        top5Movies[Math.floor(Math.random() * top5Movies.length)];

      setFeaturedMovie(randomMovie);
    }
  }, [moviesData, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <main>
      {moviesData && (
        <>
          {featuredMovie && <Hero featuredMovie={featuredMovie} />}
          <Gallery moviesDataGallery={moviesData} />
        </>
      )}
    </main>
  );
}

export default HomePageContainer;
