export type valuesType = {
  count: number;
  startCount: number;
  maxCount: number;
  maxSettingsValue: number;
  startSettingsValue: number;
  instruction: "Incorrect value!" | "Enter values and press 'set'" | "";
};
type actionType =
  | setCounterACType
  | setCounterSettingsACType
  | changeMaxSettingsValueACType
  | changeStartSettingsValueType;
type setCounterACType = ReturnType<typeof setCounterAC>;
type setCounterSettingsACType = ReturnType<typeof setCounterSettingsAC>;
type changeMaxSettingsValueACType = ReturnType<typeof changeMaxSettingsValueAC>;
type changeStartSettingsValueType = ReturnType<
  typeof changeStartSettingsValueAC
>;

export const valuesReducer = (
  state: valuesType,
  action: actionType
): valuesType => {
  switch (action.type) {
    case "SET-COUNTER":
      return {
        ...state,
        count: action.count,
      };
    case "SET-COUNTER-SETTINGS":
      return {
        ...state,
        count: action.start,
        startCount: action.start,
        maxCount: action.max,
        instruction: "",
      };
    case "CHANGE-MAX-SETTINGS-VALUE":
      return {
        ...state,
        maxSettingsValue: action.value,
        instruction:
          action.value <= state.startSettingsValue || action.value < 0
            ? "Incorrect value!"
            : "Enter values and press 'set'",
      };
    case "CHANGE-START-SETTINGS-VALUE":
      return {
        ...state,
        startSettingsValue: action.value,
        instruction:
          action.value >= state.maxSettingsValue || action.value < 0
            ? "Incorrect value!"
            : "Enter values and press 'set'",
      };
    default:
      return state;
  }
};

export const setCounterAC = (count: number) => {
  return {
    type: "SET-COUNTER",
    count,
  } as const;
};
export const setCounterSettingsAC = (max: number, start: number) => {
  return {
    type: "SET-COUNTER-SETTINGS",
    max,
    start,
  } as const;
};

export const changeMaxSettingsValueAC = (value: number) => {
  return {
    type: "CHANGE-MAX-SETTINGS-VALUE",
    value,
  } as const;
};

export const changeStartSettingsValueAC = (value: number) => {
  return {
    type: "CHANGE-START-SETTINGS-VALUE",
    value,
  } as const;
};
