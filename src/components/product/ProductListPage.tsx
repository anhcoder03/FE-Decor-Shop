import React from "react";
import ProductItem from "./ProductItem";
import ProductListHeading from "./ProductListHeading";
import ProductFilterPrice from "./ProductFilterPrice";
import ProductCategoryList from "./ProductCategoryList";
import ProductList from "./ProductList";

const ProductListPage = () => {
  return (
    <div className="container">
      <ProductListHeading></ProductListHeading>
      <div className="main grid grid-cols-custom pt-[30px] gap-30px pb-[30px]">
        <div className="">
          <ProductFilterPrice></ProductFilterPrice>
          <ProductCategoryList></ProductCategoryList>
        </div>
        <ProductList></ProductList>
      </div>
    </div>
  );
};

export default ProductListPage;
