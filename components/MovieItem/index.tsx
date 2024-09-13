import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function MovieItem({
  id,
  image,
  title,
  valuation,
}: {
  id: number;
  image: string;
  title: string;
  valuation: string;
}) {
  return (
    <motion.article
      key={id}
      whileHover={{ scale: 1.05 }}
      className={
        "rounded-lg bg-charcoal overflow-hidden relative w-200px h-300px cursor-pointer"
      }
    >
      <Link href={`/movieInfo/${title}`}>
        <Image
          className={"absolute"}
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          fill
          alt={`Poster ${title}`}
          sizes="100%"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              opacity: { delay: 0.5 },
            },
          }}
          className={
            "absolute bottom-0 h-20 w-full shadow-custom-inset text-white text-30px leading-none p-10px overflow-scroll"
          }
        >
          <p>{title}</p>
        </motion.div>
        <p className={"absolute top-5px right-10px text-white"}>
          ⭐{valuation}
        </p>
      </Link>
    </motion.article>
  );
}

export default MovieItem;
