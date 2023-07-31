import { ICart } from "./Cart";
import { IUser } from "./User";

export type TOrderResponse = {
  data: {
    orders: IOrder[];
    message: string;
    totalOrder: number;
    totalPage: number;
  };
};

export interface IOrder {
  paymentMethods: string;
  paymentStatus: string;
  phoneNumber: string;
  shippingAddress: string;
  totalAmount: number;
  userId: IUser;
  _id: string;
  updatedAt?: string;
  createdAt?: string;
  carts: ICart[];
  status: string;
}

export type TOrderDetail = {
  data: {
    orders: IOrder;
    message: string;
    totalOrder: number;
    totalPage: number;
  };
};
