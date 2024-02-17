import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceInput: 0,
  peopleInput: 0,
  tip: 0,
  total: 0,
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setPrice: (state, { payload }) => {
      state.priceInput = payload;
    },
    setPeople: (state, { payload }) => {
      state.peopleInput = payload;
    },
    setTip: (state, { payload }) => {
      state.tip = payload;
    },
    setTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export const { setPrice, setPeople, setTip, setTotal } = inputSlice.actions;
