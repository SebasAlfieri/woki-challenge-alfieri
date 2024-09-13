import React, { FC, ReactNode } from "react";
import { AccountCreation, Footer, NavBar } from "@/components";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--f-bebas-neue",
});
export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className={`${bebasNeue.variable}`}>
      <NavBar />
      <section>{children}</section>
      <AccountCreation />
      <Footer />
    </main>
  );
};

export default Layout;
