import { IUser } from "../types/User";
import { instance } from "./instance";

export const createUser = (user: IUser) => {
  return instance.post("/signup", user);
};
export const login = (user: any) => {
  return instance.post("/signin", user);
};