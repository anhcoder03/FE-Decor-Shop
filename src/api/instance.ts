import axios from "axios";

export const instance = axios.create({
  baseURL: "https://m2ldsw-8080.csb.app/api/v1",
});
