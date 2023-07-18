import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { IconSearch } from "../icons";
import { Link } from "react-router-dom";
import LoadingSearch from "../common/LoadingSearch";

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce<string>(searchValue, 500);
  const [resultSearch, setResultSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (debouncedValue) {
          setIsLoading(true); // Bắt đầu tải dữ liệu
          const response = await fetch(
            `http://localhost:8080/api/v1/search?key=${debouncedValue}`
          );
          const data = await response.json();
          setResultSearch(data);
        } else {
          setResultSearch([]);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedValue]);
  console.log(resultSearch);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="flex items-center bg-[#222222] px-5 py-3 w-[600px] justify-between rounded-lg relative">
      <input
        value={searchValue}
        type="text"
        placeholder="Search products"
        className="bg-transparent border-none outline-none"
        onChange={handleChange}
      />
      <div className="absolute bg-[#222222] w-full top-[60px] z-10 left-0 rounded-lg">
        {isLoading ? (
          <LoadingSearch></LoadingSearch>
        ) : searchValue && resultSearch.length > 0 ? (
          resultSearch.map((item: any) => (
            <Link to={`/product/${item._id}`} key={item._id}>
              <div className="flex items-center p-2 gap-3 hover:bg-primary rounded-lg">
                <img className="w-[30px]" src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            </Link>
          ))
        ) : null}
      </div>
      <IconSearch></IconSearch>
    </div>
  );
};

export default InputSearch;
