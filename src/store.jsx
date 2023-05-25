import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./reducers/user.slicer";
import CartReducer from "./reducers/cart.slicer";

const persistConfig = {
    key: "root",
    storage,
};

const persistedUserReducer = persistReducer(persistConfig, UserReducer);

const store = configureStore({
    reducer: {
        User: persistedUserReducer,
        Cart: CartReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable non-serializable value check
    }),
});

export const persistor = persistStore(store);
export default store;
