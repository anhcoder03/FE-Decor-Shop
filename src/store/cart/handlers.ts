/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "../../api/cart";
import { dataResponse } from "./cartSlice";

export const handleGetCart = createAsyncThunk<dataResponse, { userId: any }>(
  "cart/getAll ",
  async (userId: any) => {
    try {
      const response: any = await getCart(userId);
      return response.data as dataResponse;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
