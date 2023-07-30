import axios from "axios";

export const instance = axios.create({
  baseURL: "https://p4qn6v-8080.csb.app/api/v1",
  // baseURL: "http://localhost:8080/api/v1",
});
