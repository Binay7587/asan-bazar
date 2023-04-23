import { createSlice } from "@reduxjs/toolkit";

const CartSlicer = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        setCart: (state, action) => {
            let cart = JSON.parse(localStorage.getItem(process.env.REACT_APP_CART_KEY)) || [];

            const productIndex = cart.findIndex(item => item.product === action.payload.product);
            if (productIndex !== -1) {
                cart[productIndex].quantity += parseInt(action.payload.quantity);
            } else {
                cart.push(action.payload);
            }

            state.cart = cart;
            localStorage.setItem(process.env.REACT_APP_CART_KEY, JSON.stringify(cart));

        },
        updateCart: (state, action) => {
            let cart = JSON.parse(localStorage.getItem(process.env.REACT_APP_CART_KEY)) || [];
            state.cart = cart;
        }
    },
    extraReducers: {

    }
});

export const { setCart, updateCart } = CartSlicer.actions;
export default CartSlicer.reducer;