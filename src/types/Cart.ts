import { Tproduct } from "./product";

export interface ICart {
  productId: Tproduct;
  userId: string;
  quantity: number;
  _id?: string;
  totalPrice: number;
}
