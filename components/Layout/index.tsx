import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Footer, NavBar } from "@/components";
import { Bebas_Neue } from "@next/font/google";

export interface LayoutProps {
  children: ReactNode;
}

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--f-bebas-neue",
});

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <motion.main className={`${bebasNeue.variable}`}>
      <NavBar />
      <motion.main>{children}</motion.main>
      <Footer />
    </motion.main>
  );
};

export default Layout;
