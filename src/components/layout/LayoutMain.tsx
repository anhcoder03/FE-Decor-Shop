import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

interface ILayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMainProps) => {
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
