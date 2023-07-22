import React from "react";
import { LayoutMain } from "../components/layout";
// import ProductList from "../components/product/ProductList";
import ProductListPage from "../components/product/ProductListPage";

const ProductPage = () => {
  return (
    <LayoutMain>
      <ProductListPage></ProductListPage>
    </LayoutMain>
  );
};

export default ProductPage;
