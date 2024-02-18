import { createSlice } from "@reduxjs/toolkit";
import { Inputs } from "../../Types";
const initialState: Inputs = {
  priceInput: "",
  peopleInput: "",
  tip: 0,
  total: 0,
  customValue: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setPrice: (state: Inputs, { payload }) => {
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
    setCustom: (state, { payload }) => {
      state.customValue = payload;
    },
  },
});

export const { setPrice, setPeople, setTip, setTotal, setCustom } =
  inputSlice.actions;
