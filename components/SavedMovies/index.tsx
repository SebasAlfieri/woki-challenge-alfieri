import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

function SavedMovies() {
  const saved = useAppSelector((state) => state.moviesStorage.savedMovies);

  console.log(saved);
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Saved Movies</h2>
      {saved.length === 0 ? (
        <p>No saved movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {saved.map((movie) => (
            <motion.div
              key={movie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={movie.poster_path}
                alt={movie.title}
                width={300}
                height={450}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{movie.overview}</p>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span>{movie.vote_average}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default SavedMovies;
