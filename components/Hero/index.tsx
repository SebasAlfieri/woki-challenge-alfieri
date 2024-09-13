import Image from "next/image";
import { motion } from "framer-motion";
import { HeroProps } from "@/types/model";

function Hero({ featuredMovie }: HeroProps) {
  return (
    <section className="w-full bg-blue h-[300px] sm:h-[600px] 2xl:h-[700px] overflow-hidden flex items-center relative mt-[50px] sm:mt-20">
      {featuredMovie && (
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
              src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}`}
              fill
              alt={"popular"}
              loading="lazy"
            />
          </motion.div>
          <motion.h1
            className="text-white absolute left-20px sm:left-70px bottom-30px text-[35px] sm:text-[60px] leading-none
            
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
            {featuredMovie.original_title}
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
              ⭐{featuredMovie.vote_average.toString().slice(0, 3)}
            </motion.span>
          </motion.h1>
          <div className="block w-full h-full absolute top-0 shadow-custom-inset" />
        </div>
      )}
    </section>
  );
}

export default Hero;
