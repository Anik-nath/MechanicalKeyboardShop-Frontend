import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export type TProduct = {
  _id: string;
  title: string;
  brand: string;
  description: string;
  image: string;
  availableQuantity: number;
  price: number;
  rating: number;
  isDeleted?: boolean;
};
export type TResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TProduct[];
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<TResponse, void>({
      query: () => "/product",
    }),
    getProductById: builder.query<TResponse, string>({
      query: (_id) => `/product/${_id}`,
    }),
    searchProducts: builder.query({
      query: (searchInput) => `/product?title=${searchInput}`,
    }),
    signup : builder.mutation({
      query: (user) => ({
        url : '/auth/signup',
        method: "POST",
        body: user
      })
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useLazySearchProductsQuery,
  useSignupMutation,
  useLoginMutation
} = productApi;
