import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { MovieItem } from "@/components";
import { MovieProps } from "@/types/model";
import { GalleryProps } from "@/types/model";

function Gallery({ moviesDataGallery }: GalleryProps) {
  const searchQuery = useAppSelector((state) => state.movies.searchQuery);

  const filteredMovies = moviesDataGallery.filter((item: MovieProps) =>
    item.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filteredMovies);
  return (
    <section
      className={" p-10 sm:p-20 bg-charcoal flex justify-center bg-white "}
    >
      <div
        className={
          "flex flex-wrap gap-30px justify-center w-100 bg-orange m-auto sm:w-[1000px] p-[30px] sm:py-[50px] rounded-lg"
        }
      >
        {filteredMovies.map((item) => (
          <MovieItem
            key={item.original_title}
            id={item.id}
            image={item.poster_path}
            title={item.original_title}
            // valuation={item.vote_average.toString().slice(0, 3)}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
