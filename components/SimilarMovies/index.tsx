import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";

function SimilarMovies({ genres, title }: { genres: number[]; title: string }) {
  const movies = useAppSelector((state) => state.moviesStorage.movies);

  const similarMovies = movies.filter((movie) => {
    const commonGenres = movie.genre_ids.filter((genre: number) =>
      genres.includes(genre)
    );

    return commonGenres.length >= 2 && movie.original_title !== title;
  });

  return (
    <div className={"py-20 text-center overflow-auto"}>
      <h2 className={"text-50px"}>Similar titles</h2>
      <div
        className={
          "flex flex-col lg:flex-row gap-60px lg:gap-30px justify-center items-center"
        }
      >
        {similarMovies.length > 0 ? (
          similarMovies.slice(0, 4).map((movie) => (
            <div
              key={movie.id}
              className={"relative w-200px h-300px object-fit"}
            >
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                fill
                loading="lazy"
              />
              <p className="absolute bottom-[-30px]"> {movie.title}</p>
            </div>
          ))
        ) : (
          <p>No similar movies found.</p>
        )}
      </div>
    </div>
  );
}

export default SimilarMovies;
