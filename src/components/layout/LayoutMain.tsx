/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

interface ILayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMainProps) => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      {children}
      <Footer></Footer>
    </>
  );
};

export default LayoutMain;
