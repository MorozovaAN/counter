import { createSlice } from "@reduxjs/toolkit";

export type CounterV1Type = {
  value: number;
  startValue: number;
  maxValue: number;
  maxSettingsValue: number;
  startSettingsValue: number;
  instruction: "Incorrect value!" | "Enter values and press 'set'" | "";
};

const initialState: CounterV1Type = {
  value: 0,
  startValue: 0,
  maxValue: 0,
  maxSettingsValue: 1,
  startSettingsValue: 0,
  instruction: "Enter values and press 'set'",
};

export const counterV1Slice = createSlice({
  name: "counterV1",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = state.startValue;
    },
    setSettings: (state) => {
      state.startValue = state.startSettingsValue;
      state.maxValue = state.maxSettingsValue;
      state.value = state.startSettingsValue;
      state.instruction = "";
    },
    changeMaxValue: (state, action) => {
      const newValue = action.payload.value;
      state.maxSettingsValue = newValue;
      state.instruction =
        newValue <= state.startSettingsValue || newValue < 0
          ? "Incorrect value!"
          : "Enter values and press 'set'";
    },
    changeStartValue: (state, action) => {
      const newValue = action.payload.value;
      state.startSettingsValue = newValue;
      state.instruction =
        newValue >= state.maxSettingsValue || newValue < 0
          ? "Incorrect value!"
          : "Enter values and press 'set'";
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  setSettings,
  changeMaxValue,
  changeStartValue,
} = counterV1Slice.actions;

export default counterV1Slice.reducer;
