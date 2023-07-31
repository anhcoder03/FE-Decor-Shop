/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { instance } from "./instance";

export const getAllOrder = (page = 1) => {
  return instance.get(`/order?page=${page}`);
};
export const order = (data: any) => {
  return instance.post(`/order`, data);
};

export const getOrderByUserId = (userId: string, page = 1) => {
  return instance.get(`/order/${userId}?page=${page}`);
};
export const getOrderById = (id: any) => {
  return instance.get(`/orderId/${id}`);
};

export const deleteOrder = (id: any) => {
  return instance.delete(`/order/${id}`);
};
export const updateOrder = (id: any, data: any) => {
  return instance.put(`/order/${id}`, data);
};
