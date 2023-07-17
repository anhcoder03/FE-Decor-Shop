import React from "react";

const ProductCategoryList = () => {
  return (
    <div>
      <div className="list-category pt-[30px]">
        <label
          htmlFor="price-filter"
          className="block text-[#ffffff] font-bold mb-2"
        >
          Category:
        </label>
        <ul className="space-y-1">
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <li>
                <a
                  href=""
                  className="block rounded-lg bg-[#222222] p-3 text-[16px] text-[#ffffff] hover:bg-primary hover:text-[#ffffff]"
                >
                  All Category
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCategoryList;
