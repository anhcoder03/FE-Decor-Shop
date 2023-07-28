/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/auth";
import { IUser } from "../../types/User";

export type TDataResponse = {
  user: IUser | null;
  message: string;
  accessToken: string;
};

export const handleLogin = createAsyncThunk<
  TDataResponse,
  { email: string; password: string }
>("auth/login", async (data: { email: string; password: string }, thunkApi) => {
  try {
    const response: any = await login(data);
    return response.data as TDataResponse;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
