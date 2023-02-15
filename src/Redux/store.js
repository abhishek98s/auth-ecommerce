import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import orderReducer from "./OrderSlice";

export const store = configureStore({
    reducer: {
        toggle: toggleReducer,
        order: orderReducer,
    },
})