/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login } from "../../api/auth";
import { IUser } from "../../types/User";

export const handleLogin = createAsyncThunk<
  IUser,
  { username: string; password: string }
>("auth/login", async (data: IUser) => {
  try {
    const response: any = await login(data);
    toast.success(response.data.message);
    return response.data as IUser;
  } catch (error: any) {
    toast.error(error.response.data.message);
    throw new Error(error.response.data.message);
  }
});
