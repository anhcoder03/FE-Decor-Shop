import { instance } from "./instance";

export const getAllOrder = () => {
  return instance.get(`/order`);
};
export const order = (data: any) => {
  return instance.post(`/order`, data);
};
