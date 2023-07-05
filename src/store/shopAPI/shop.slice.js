import { createSlice } from "@reduxjs/toolkit"

const LS_SHOP_KEY = "rsk"

const initialState = {
  basket: JSON.parse(localStorage.getItem(LS_SHOP_KEY) ?? "[]")
}

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addBasket(state, action) {
      state.basket.push(action.payload)
      localStorage.setItem(LS_SHOP_KEY, JSON.stringify(state.basket))
    },
    removeBasket(state, action) {
      state.basket = state.basket.filter(f => f !== action.payload)
      localStorage.setItem(LS_SHOP_KEY, JSON.stringify(state.basket))
    }
  }
})

export const shopActions = shopSlice.actions
export const shopReducer = shopSlice.reducer
