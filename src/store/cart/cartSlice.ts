import { createSlice } from "@reduxjs/toolkit";
import { handleGetCart } from "./handlers";
import { Tproduct } from "../../types/product";

export type dataResponse = {
  message?: string;
  totalQuantity?: number | undefined;
  carts: Tproduct[];
  totalAmount?: number;
};

export interface cartState {
  carts: Tproduct[] | null;
  quantity: number | undefined;
  totalAmount: number | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState: cartState = {
  carts: null,
  quantity: 0,
  totalAmount: 0,
  loading: false,
  error: undefined,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.carts = null;
      state.quantity = 0;
      state.totalAmount = 0;
      state.loading = false;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleGetCart.fulfilled, (state, action) => {
      state.carts = action.payload.carts;
      state.quantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
      state.loading = false;
    });
    builder.addCase(handleGetCart.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { resetCart } = cartSlice.actions;

export default cartSlice.reducer;
