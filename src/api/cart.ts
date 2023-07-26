/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { instance } from "./instance";

export const addToCart = (data: any) => {
  return instance.post("/cart", data);
};
export const getCart = (userId: any) => {
  return instance.get(`/cart/${userId}`);
};
