import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shop/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/"
  }),
  // refetchOnFocus: true,
  endpoints: build => ({
    searchProducts: build.query({
      query: () => ({
        url: `products`
      })
    })
  })
})
export const {useSearchProductsQuery} = shopApi