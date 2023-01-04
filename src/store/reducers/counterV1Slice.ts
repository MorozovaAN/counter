// import { actionTypeCounter1, Counter1ValuesType } from "../../types";
//
// const initialState: Counter1ValuesType = {
//   count: 0,
//   startCount: 0,
//   maxCount: 0,
//   maxSettingsValue: 1,
//   startSettingsValue: 0,
//   instruction: "Enter values and press 'set'",
// };
// export const counterV1Reducer = (
//   state = initialState,
//   action: actionTypeCounter1
// ): Counter1ValuesType => {
//   switch (action.type) {
//     case "INCREASE-COUNTER1":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "RESET-COUNTER1":
//       return {
//         ...state,
//         count: state.startCount,
//       };
//     case "SET-COUNTER1-SETTINGS":
//       return {
//         ...state,
//         startCount: state.startSettingsValue,
//         maxCount: state.maxSettingsValue,
//         count: state.startCount,
//         instruction: "",
//       };
//     case "CHANGE-MAX-SETTINGS-VALUE-COUNTER1":
//       return {
//         ...state,
//         maxSettingsValue: action.value,
//         instruction:
//           action.value <= state.startSettingsValue || action.value < 0
//             ? "Incorrect value!"
//             : "Enter values and press 'set'",
//       };
//     case "CHANGE-START-SETTINGS-VALUE-COUNTER1":
//       return {
//         ...state,
//         startSettingsValue: action.value,
//         instruction:
//           action.value >= state.maxSettingsValue || action.value < 0
//             ? "Incorrect value!"
//             : "Enter values and press 'set'",
//       };
//     default:
//       return state;
//   }
// };
//
// //action creators
// export const increaseCounter1AC = () => {
//   return {
//     type: "INCREASE-COUNTER1",
//   } as const;
// };
//
// export const resetCounter1AC = () => {
//   return {
//     type: "RESET-COUNTER1",
//   } as const;
// };
//
// export const setCounter1SettingsAC = () => {
//   return {
//     type: "SET-COUNTER1-SETTINGS",
//   } as const;
// };
//
// export const changeMaxSettingsValueCounter1AC = (value: number) => {
//   return {
//     type: "CHANGE-MAX-SETTINGS-VALUE-COUNTER1",
//     value,
//   } as const;
// };
//
// export const changeStartSettingsValueCounter1AC = (value: number) => {
//   return {
//     type: "CHANGE-START-SETTINGS-VALUE-COUNTER1",
//     value,
//   } as const;
// };

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
  reset,
  setSettings,
  changeMaxValue,
  changeStartValue,
} = counterV1Slice.actions;

export default counterV1Slice.reducer;
