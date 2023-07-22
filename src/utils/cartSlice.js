import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems.pop();
    },
    removeCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
