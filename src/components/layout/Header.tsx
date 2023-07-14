import React from "react";
import { Link } from "react-router-dom";
import { InputSearch } from "../input";
import { IconCart, IconUser } from "../icons";

const Header = () => {
  return (
    <div className="container flex items-center justify-between py-[30px] border-b border-b-[#ffffff]">
      <Link to="">
        <img src="logo.png" alt="" />
      </Link>
      <div>
        <InputSearch></InputSearch>
      </div>
      <div className="flex items-center gap-[50px]">
        <IconUser></IconUser>
        <div className="flex items-center gap-4">
          <div className="relative">
            <IconCart></IconCart>
            <span className="absolute flex items-center justify-center w-5 h-5 rounded-full -right-3 -top-3 bg-primary">
              0
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <span>My Cart</span>
            <span>($00,0)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
