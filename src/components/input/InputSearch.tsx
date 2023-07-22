/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { IconSearch } from "../icons";
import { searchProduct } from "../../api/product";
import ResultSearch from "../search/ResultSearch";
import useClickOutSide from "../../hooks/useClickOutSIde";

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce<string>(searchValue, 500);
  const [resultSearch, setResultSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { show, setShow, nodeRef } = useClickOutSide(".search-header");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (debouncedValue) {
          setIsLoading(true);
          const response = await searchProduct(debouncedValue);
          setResultSearch(response.data);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    void fetchData();
  }, [debouncedValue]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="flex items-center bg-[#222222] px-5 py-3 w-[600px] justify-between rounded-lg relative">
      <input
        ref={nodeRef}
        onClick={() => {
          setShow(!show);
        }}
        value={searchValue}
        type="text"
        placeholder="Search products"
        className="bg-transparent border-none outline-none"
        onChange={handleChange}
      />
      <div className="absolute bg-[#222222] w-full top-[60px] z-10 left-0 rounded-lg">
        <ResultSearch
          data={resultSearch}
          show={show}
          loading={isLoading}
        ></ResultSearch>
      </div>
      <IconSearch></IconSearch>
    </div>
  );
};

export default InputSearch;
