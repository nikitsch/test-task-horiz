import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "./shopAPI/shop.api";
import { shopReducer } from "./shopAPI/shop.slice";

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    shop: shopReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware)
})