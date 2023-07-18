/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory } from "../../types/Category";
import { getCategories } from "../../api/category";

export const fetchAllCategories = createAsyncThunk<ICategory[]>(
  "category/fetchAllCategories",
  async () => {
    const response = await getCategories();
    return response.category as ICategory[];
  }
);
