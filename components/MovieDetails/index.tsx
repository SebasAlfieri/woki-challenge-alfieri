import { motion } from "framer-motion";
import Image from "next/image";
import { MovieDetailsProps } from "@/types/model";

const MovieDetails = ({
  poster,
  background,
  title,
  description,
  valuation,
}: MovieDetailsProps) => {
  console.log("detail", title);

  return (
    <motion.div className={"relative text-black"}>
      {title}aa
      {poster}
      {description}
      {valuation}
      <Image
        src={`https://image.tmdb.org/t/p/original/${background}`}
        alt={`${title} background`}
        fill
        sizes="100%"
      />
    </motion.div>
  );
};

export default MovieDetails;
