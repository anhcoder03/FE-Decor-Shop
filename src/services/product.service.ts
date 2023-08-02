import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Tproduct } from "../types/product";

export interface IProductResponse {
  message?: string;
  product: Tproduct[];
  data?: Tproduct[];
  success?: boolean;
  totalPage?: number;
  totalProduct?: number;
}

const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1",
  }),
  tagTypes: ["Product"],
  endpoints: (build) => ({
    getProducts: build.query<IProductResponse, string | undefined>({
      query: (url = "/products") => url,
      providesTags: ["Product"],
    }),
    addProduct: build.mutation<IProductResponse, Tproduct>({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    editProduct: build.mutation<IProductResponse, Tproduct>({
      query: (data) => {
        const { _id, ...body } = data;
        return {
          url: `/products/${_id as string}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    removeProduct: build.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useEditProductMutation,
  useRemoveProductMutation,
} = productApi;
export const productReducer = productApi.reducer;
export default productApi;
