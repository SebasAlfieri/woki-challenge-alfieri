import { FC } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { HomePageProps } from "@/types/model";
import { Gallery, MovieDetails } from "@/components";

const MovieInfoPage: FC<HomePageProps> = ({ data }) => {
  const router = useRouter();
  const { query } = router;

  const movieDetails = data.find(
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
      <Gallery moviesDataGallery={data} />
    </main>
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
        data: [],
      },
    };
  }
};

export default MovieInfoPage;
