import { createSlice } from "@reduxjs/toolkit";
import { Inputs } from "../../Types";
const initialState: Inputs = {
  priceInput: "",
  peopleInput: "",
  tip: 0,
  total: 0,
  customValue: "",
  error: "",
  track: "",
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
    setCustom: (state, { payload }) => {
      state.customValue = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setTrack: (state, { payload }) => {
      state.track = payload;
    },
  },
});

export const {
  setPrice,
  setPeople,
  setTip,
  setTotal,
  setCustom,
  setError,
  setTrack,
} = inputSlice.actions;
