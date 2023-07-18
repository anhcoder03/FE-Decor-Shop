/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCategories } from "./handler";
import { ICategory } from "../../types/Category";

export interface CategoryState {
  categories: ICategory[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: null,
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload as ICategory[];
    });
    builder.addCase(fetchAllCategories.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload as string;
    });
  },
});

export default categorySlice.reducer;
