import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/user.slicer";
import CartReducer from "./reducers/cart.slicer";

const store = configureStore({
    reducer: {
        User: UserReducer,
        Cart: CartReducer
    }
});

export default store;