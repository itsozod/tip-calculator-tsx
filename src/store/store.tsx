import { configureStore } from "@reduxjs/toolkit";
import { inputSlice } from "./features/inputSlice";

export const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
  },
});
