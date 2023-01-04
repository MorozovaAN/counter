import { createSlice } from "@reduxjs/toolkit";
export type CounterV2Type = {
  value: number;
  startValue: number;
  maxValue: number;
  maxSettingsValue: number;
  startSettingsValue: number;
  instruction: "Click 'set' to set the values" | "";
};

const initialState: CounterV2Type = {
  value: 0,
  startValue: 0,
  maxValue: 0,
  maxSettingsValue: 1,
  startSettingsValue: 0,
  instruction: "Click 'set' to set the values",
};
export const counterV2Slice = createSlice({
  name: "counterV2",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
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
      state.maxSettingsValue = action.payload.value;
    },
    changeStartValue: (state, action) => {
      state.startSettingsValue = action.payload.value;
    },
  },
});

export const {
  increment,
  reset,
  setSettings,
  changeMaxValue,
  changeStartValue,
} = counterV2Slice.actions;

export default counterV2Slice.reducer;
