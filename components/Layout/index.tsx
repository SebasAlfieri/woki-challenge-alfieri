import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Footer, NavBar } from "@/components";

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <motion.main>
      <NavBar />
      <motion.main>{children}</motion.main>
      <Footer />
    </motion.main>
  );
};

export default Layout;
