import React from "react";
import { IconSearch } from "../icons";

const InputSearch = () => {
  return (
    <div className=" flex items-center bg-[#222222] px-5 py-3 w-[600px] justify-between rounded-lg">
      <input
        type="text"
        placeholder="Search products"
        className="bg-transparent border-none outline-none"
      />
      <IconSearch></IconSearch>
    </div>
  );
};

export default InputSearch;
