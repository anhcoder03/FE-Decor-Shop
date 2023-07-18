/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./handler";
import { Tproduct } from "../../types/product";

export interface ProductState {
  products: Tproduct[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: null,
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload as Tproduct[];
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload as string;
    });
  },
});

export default productSlice.reducer;
