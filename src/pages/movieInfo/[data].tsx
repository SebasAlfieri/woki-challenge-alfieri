import { useEffect, FC } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { HomePageProps } from "@/types/model";
import { Gallery, MovieDetails } from "@/components";

const MovieInfoPage: FC<HomePageProps> = ({ data }) => {
  const router = useRouter();
  const { query } = router;

  const movieDetails = data.find(
    (movie) => movie.original_title === query.data
  );
  console.log("details", movieDetails);
  console.log(data);
  if (!movieDetails) {
    return <div>No movie found</div>;
  }

  console.log(movieDetails);

  return (
    <div className="mt-200px">
      <MovieDetails
        poster={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
        background={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
        title={movieDetails.title}
        description={movieDetails.overview}
        valuation={movieDetails.vote_average.toString().slice(0, 3)}
      />
      <Gallery moviesDataGallery={data} />
    </div>
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
