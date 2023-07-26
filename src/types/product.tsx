export type Tproduct = {
  productId: any;
  totalPrice(totalPrice: any): import("react").ReactNode;
  _id?: string;
  name: string;
  price: number;
  desc: string;
  image: string;
  categoryId: string;
  slug?: string;
  quantity?: number;
};
