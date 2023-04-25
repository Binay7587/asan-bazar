import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const cart = state.cart.slice();
      let found = false;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId === productId) {
          cart[i].quantity = Number(quantity);
          found = true;
          break;
        }
      }

      if (!found) {
        cart.push(action.payload);
      }

      state.cart = cart;
      localStorage.setItem(import.meta.env.VITE_CART_KEY, JSON.stringify(cart));
    },
    updateCart: (state) => {
      const cart = JSON.parse(localStorage.getItem(import.meta.env.VITE_CART_KEY)) || [];
      state.cart = cart;
    },
  },
  extraReducers: {},
});

export const { setCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;