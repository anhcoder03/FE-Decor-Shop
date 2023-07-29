import { IUser } from "../types/User";
import { instance } from "./instance";

export const createUser = (user: IUser) => {
  return instance.post("/signup", user);
};
export const login = (user: any) => {
  return instance.post("/signin", user);
};
export const getAllUser = (page = 1) => {
  return instance.get(`/user?page=${page}`);
};
export const deleteUser = (id: number | string) => {
  return instance.delete(`/user/${id}`);
};
