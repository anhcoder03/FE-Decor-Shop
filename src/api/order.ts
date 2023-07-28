import { instance } from "./instance";

export const getAllOrder = (page = 1) => {
  return instance.get(`/order?page=${page}`);
};
export const order = (data: any) => {
  return instance.post(`/order`, data);
};
