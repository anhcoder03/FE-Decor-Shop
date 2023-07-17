import React from "react";

const ProductFilterPrice = () => {
  return (
    <div>
      <div className="filter">
        <div className="w-full">
          <label
            htmlFor="price-filter"
            className="block text-[#ffffff] font-bold mb-2"
          >
            Lọc theo giá:
          </label>
          <div className="bg-[#222222] p-3 rounded-lg">
            <select id="price-filter" className="bg-[#222222] w-full">
              <option value="all">Tất cả</option>
              <option value="under50">Dưới 50 đô la</option>
              <option value="50to100">50 - 100 đô la</option>
              <option value="over100">Trên 100 đô la</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterPrice;
