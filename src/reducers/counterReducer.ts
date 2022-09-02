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
  | resetCounterACType
  | setCounterSettingsACType
  | changeMaxSettingsValueACType
  | changeStartSettingsValueType;
type setCounterACType = ReturnType<typeof setCounterAC>;
type resetCounterACType = ReturnType<typeof resetCounterAC>;
type setCounterSettingsACType = ReturnType<typeof setCounterSettingsAC>;
type changeMaxSettingsValueACType = ReturnType<typeof changeMaxSettingsValueAC>;
type changeStartSettingsValueType = ReturnType<
  typeof changeStartSettingsValueAC
>;

export const counterReducer = (
  state: valuesType,
  action: actionType
): valuesType => {
  switch (action.type) {
    case "SET-COUNTER":
      return {
        ...state,
        count: state.count + 1,
      };
    case "RESET-COUNTER":
      return {
        ...state,
        count: state.startCount,
      };
    case "SET-COUNTER-SETTINGS":
      return {
        ...state,
        startCount: state.startSettingsValue,
        maxCount: state.maxSettingsValue,
        count: state.startCount,
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

export const setCounterAC = () => {
  return {
    type: "SET-COUNTER",
  } as const;
};

export const resetCounterAC = () => {
  return {
    type: "RESET-COUNTER",
  } as const;
};

export const setCounterSettingsAC = () => {
  return {
    type: "SET-COUNTER-SETTINGS",
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
