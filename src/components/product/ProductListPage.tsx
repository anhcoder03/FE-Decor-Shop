import React from "react";
import ProductItem from "./ProductItem";
import ProductListHeading from "./ProductListHeading";
import ProductFilterPrice from "./ProductFilterPrice";
import ProductCategoryList from "./ProductCategoryList";
import ProductList from "./ProductList";
import ProductDetailHeader from "../../modules/productDetail/ProductDetailHeader";

const ProductListPage = () => {
  return (
    <div className="">
      <ProductDetailHeader nameProduct=""></ProductDetailHeader>
      <div className="container">
        <ProductListHeading></ProductListHeading>
        <div className="main grid grid-cols-custom gap-30px pb-[30px]">
          <div className="">
            <ProductFilterPrice></ProductFilterPrice>
            <ProductCategoryList></ProductCategoryList>
          </div>
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
