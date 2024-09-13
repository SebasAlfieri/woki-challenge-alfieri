import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { MovieItem } from "@/components";
import { useAppDispatch } from "@/redux/hooks";
import { setSearchQuery } from "@/redux/features/moviesDataBaseSlice";
import { MovieProps } from "@/types/model";
import { GalleryProps } from "@/types/model";

function Gallery({ moviesDataGallery }: GalleryProps) {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(
    (state) => state.moviesStorage.searchQuery
  );

  console.log("aaaa", moviesDataGallery);

  const filteredMovies = moviesDataGallery.filter((item: MovieProps) =>
    item.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <section
      className={
        "bg-charcoal flex justify-center bg-white relative flex-col bg-black pb-20"
      }
    >
      <nav className="w-full h-[50px] sm:h-20 bg-darkBlue sticky top-0 z-20 flex mb-10 sm:mb-50px">
        <input
          className="b-red m-auto py-1 px-2 sm:w-[500px] bg-blue text-white"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </nav>
      <div
        className={
          "flex gap-20px justify-center flex-col w-100 bg-darkBlue m-auto sm:w-[1000px] p-[30px] sm:py-[50px] sm:rounded-lg text-white text-30px"
        }
      >
        <h2 className="text-center ">
          {searchQuery === ""
            ? "AVAILABLE MOVIES"
            : `RESULTS FOR ${searchQuery}`}{" "}
        </h2>
        <div className="flex flex-wrap gap-30px justify-center w-full m-auto rounded-lg">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((item) => (
              <MovieItem
                key={item.original_title}
                id={item.id}
                image={item.poster_path}
                title={item.original_title}
                valuation={item.vote_average.toString().slice(0, 3)}
              />
            ))
          ) : (
            <p className="text-21px">no results found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
