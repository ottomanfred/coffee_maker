import { configureStore } from "@reduxjs/toolkit";
import coffeeBankReducer from "./features/coffee/coffeesSlice";

const store = configureStore({
  reducer: {
    coffeeBank: coffeeBankReducer,
  },
});

export default store;
