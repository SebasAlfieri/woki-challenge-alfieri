import React from "react";
import { motion } from "framer-motion";
import { SavedMovies } from "@/components";
import { MovieProps } from "@/types/model";

function MyMoviesPage({ data }: { data: MovieProps[] }) {
  console.log(data);
  return (
    <motion.main className="w-full h-full bg-blue z-30 top-0 flex relative">
      <SavedMovies />
    </motion.main>
  );
}

export default MyMoviesPage;
