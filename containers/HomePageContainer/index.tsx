import { useGetMoviesQuery } from "@/redux/services/api";
import { Gallery, Hero } from "@/components";
import "tailwindcss/tailwind.css";

function HomePageContainer() {
  const { data: movies, error, isLoading } = useGetMoviesQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <main>
      {movies && (
        <>
          <Hero />
          <Gallery moviesDataGallery={movies} />
        </>
      )}
    </main>
  );
}

export default HomePageContainer;
