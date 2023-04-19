import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/user.slicer";

const store = configureStore({
    reducer: {
        User: UserReducer
    }
});

export default store;