/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { instance } from "./instance";

export const addToCart = (data: any) => {
  return instance.post("/cart", data);
};
export const getCart = (userId: string) => {
  return instance.get(`/cart/${userId}`);
};
export const updateCart = (data: any) => {
  return instance.put(`/cart`, data);
};
