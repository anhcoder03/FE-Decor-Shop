import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:1234/api/v1",
});
