import { configureStore } from "@reduxjs/toolkit";
import coffeeBankReducer from "../features/coffeesSlice";

const store = configureStore({
    reducer: {
        coffeeBank: coffeeBankReducer,
    },
});

export default store; 