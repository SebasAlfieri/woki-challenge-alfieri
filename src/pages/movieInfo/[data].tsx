import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { HomePageProps } from "@/types/model";
import { Gallery, MovieDetails } from "@/components";
import { setMovies } from "@/redux/features/moviesDataBaseSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const MovieInfoPage: FC<HomePageProps> = ({ data }) => {
  const movies = useAppSelector((state) => state.moviesStorage.movies);
  const router = useRouter();
  const { query } = router;

  const movieDetails = data.find(
    (movie) => movie.original_title === query.data
  );

  console.log(movieDetails);

  if (!movieDetails) {
    return <div>No movie found</div>;
  }

  return (
    <main className="mt-200px">
      <MovieDetails
        poster={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
        background={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
        title={movieDetails.title}
        description={movieDetails.overview}
        valuation={movieDetails.vote_average.toString().slice(0, 3)}
      />

      <Gallery moviesDataGallery={movies} />
    </main>
  );
};

export default MovieInfoPage;
