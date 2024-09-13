import { Gallery, MovieDetails, SimilarMovies } from "@/components";
import "tailwindcss/tailwind.css";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";

function MovieDetailContainer() {
  const movies = useAppSelector((state) => state.moviesStorage.movies);

  const router = useRouter();
  const { query } = router;
  const movieDetails = movies.find(
    (movie) => movie.original_title === query.data
  );
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
      <SimilarMovies
        genres={movieDetails.genre_ids}
        title={movieDetails.original_title}
      />

      <Gallery moviesDataGallery={movies} />
    </main>
  );
}
export default MovieDetailContainer;
