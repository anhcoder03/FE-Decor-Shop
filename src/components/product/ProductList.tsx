import React from "react";
import ProductItem from "./ProductItem";
import ProductListHeading from "./ProductListHeading";
import ProductFilterPrice from "./ProductFilterPrice";
import ProductCategoryList from "./ProductCategoryList";

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-30px pt-[30px]">
      {Array(6)
        .fill(0)
        .map((item, index) => (
          <ProductItem></ProductItem>
        ))}
    </div>
  );
};

export default ProductList;
