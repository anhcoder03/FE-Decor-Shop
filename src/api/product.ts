/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Tproduct } from "../types/product";
import { instance } from "./instance";

const getAllProduct = (url = "/products") => {
  return instance.get(url);
};

const getOneProduct = (id: any) => {
  return instance.get(`/products/${id}`);
};
const getProductWithSlug = (slug: any) => {
  return instance.get(`/product/${slug}`);
};
const searchProduct = (key: any) => {
  return instance.get(`/search?key=${key}`);
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
  getProductWithSlug,
  searchProduct,
};

export const getAllProducts = async (): Promise<any> => {
  try {
    const response = await instance.get("/products");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
