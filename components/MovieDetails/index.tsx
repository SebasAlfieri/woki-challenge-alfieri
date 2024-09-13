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
    <motion.article className="w-full bg-blue h-[300px] sm:h-[600px] 2xl:h-[700px] overflow-hidden flex items-center relative mt-[50px] sm:mt-20">
      <div className="relative w-full h-full">
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              opacity: {
                delay: 0,
                duration: 2,
              },
            },
          }}
        >
          <Image
            className="absolute inset-0 object-cover"
            src={`https://image.tmdb.org/t/p/original/${background}`}
            fill
            alt={"popular"}
            priority
          />
        </motion.div>
        <motion.h1
          className="text-white absolute right-20px sm:right-70px top-30px sm:top-auto sm:bottom-30px text-[35px] sm:text-[60px] leading-none
            
            z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              opacity: {
                delay: 1,
                duration: 1,
              },
              y: {
                delay: 1,
                duration: 1.3,
              },
            },
          }}
        >
          {title}
          <motion.span
            className="text-19px sm:text-29.5px sm:ml-20px leading-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                opacity: {
                  delay: 1.5,
                  duration: 0.3,
                },
              },
            }}
          >
            ⭐{valuation.toString().slice(0, 3)}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-white absolute left-20px sm:left-70px bottom-30px text-[21.5px] sm:text-[21px] leading-none h-1/2 sm:h-auto sm:w-1/3  overflow-scroll z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              opacity: {
                delay: 1,
                duration: 1,
              },
              y: {
                delay: 1,
                duration: 1.3,
              },
            },
          }}
        >
          {description}
        </motion.p>
      </div>
      <div className="block w-full h-full absolute top-0 shadow-custom-inset" />
    </motion.article>
  );
};

export default MovieDetails;
