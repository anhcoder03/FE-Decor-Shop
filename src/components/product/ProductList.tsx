import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { ProductState } from "../../store/product/productSlice";
import { RootState } from "../../store/configureStore";
import { fetchAllProducts } from "../../store/product/handler";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading }: ProductState = useSelector(
    (state: RootState) => state.product
  );
  console.log(products);
  useEffect(() => {
    dispatch(fetchAllProducts() as any);
  }, [dispatch]);
  return (
    <div className="grid grid-cols-3 gap-30px pt-[30px]">
      {products !== null &&
        products?.map((item) => (
          <ProductItem key={item._id} data={item}></ProductItem>
        ))}
    </div>
  );
};

export default ProductList;
