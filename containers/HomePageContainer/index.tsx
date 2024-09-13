import { Gallery, Hero } from "@/components";
import "tailwindcss/tailwind.css";
import { useAppSelector } from "@/redux/hooks";

function HomePageContainer() {
  const movies = useAppSelector((state) => state.moviesStorage.movies);

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
