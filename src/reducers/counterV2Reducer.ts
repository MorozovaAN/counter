export type CounterV2ValuesType = {
  count: number;
  startCount: number;
  maxCount: number;
  maxSettingsValue: number;
  startSettingsValue: number;
  instruction: "Click 'set' to set the values" | "";
};
type actionType =
  | setCounterACType
  | resetCounterACType
  | setCounterSettingsACType
  | changeMaxSettingsValueACType
  | changeStartSettingsValueType;
type setCounterACType = ReturnType<typeof setCounterAC>;
type setCounterSettingsACType = ReturnType<typeof setCounterSettingsAC>;
type resetCounterACType = ReturnType<typeof resetCounterAC>;
type changeMaxSettingsValueACType = ReturnType<typeof changeMaxSettingsValueAC>;
type changeStartSettingsValueType = ReturnType<
  typeof changeStartSettingsValueAC
>;

export const counterV2Reducer = (
  state: CounterV2ValuesType,
  action: actionType
): CounterV2ValuesType => {
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
      };
    case "CHANGE-START-SETTINGS-VALUE":
      return {
        ...state,
        startSettingsValue: action.value,
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
