/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tproduct } from "../../types/product";
import { getAllProducts } from "../../api/product";

export const fetchAllProducts = createAsyncThunk<Tproduct[]>(
  "product/fetchAllProducts",
  async () => {
    const response = await getAllProducts();
    return response.product as Tproduct[];
  }
);
