/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Tproduct } from "../types/product";
import { instance } from "./instance";

const getAllProduct = () => {
  return instance.get("/products");
};

const getOneProduct = (id: any) => {
  return instance.get(`/products/${id}`);
};

const deleteProduct = (id: number | string) => {
  return instance.delete(`/products/${id}`);
};

const createProduct = (product: Tproduct) => {
  return instance.post(`products`, product);
};

const putProduct = (product: Tproduct) => {
  console.log("product_id", product);

  return instance.put(`products/${product?._id}`, product);
};

export {
  getAllProduct,
  getOneProduct,
  deleteProduct,
  createProduct,
  putProduct,
};
