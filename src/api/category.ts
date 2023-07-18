import { instance } from "./instance";

export const getAllCategory = () => {
  return instance.get("/categories");
};

export const getCategories = async (): Promise<any> => {
  try {
    const response = await instance.get("/categories");
    console.log(response);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
