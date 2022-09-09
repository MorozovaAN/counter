import { actionTypeCounter2, Counter2ValuesType } from "../../types";

const initialState: Counter2ValuesType = {
  count: 0,
  startCount: 0,
  maxCount: 0,
  maxSettingsValue: 1,
  startSettingsValue: 0,
  instruction: "Click 'set' to set the values",
};

export const counterV2Reducer = (
  state = initialState,
  action: actionTypeCounter2
): Counter2ValuesType => {
  switch (action.type) {
    case "SET-COUNTER2":
      return {
        ...state,
        count: state.count + 1,
      };
    case "RESET-COUNTER2":
      return {
        ...state,
        count: state.startCount,
      };
    case "SET-COUNTER2-SETTINGS":
      return {
        ...state,
        startCount: state.startSettingsValue,
        maxCount: state.maxSettingsValue,
        count: state.startSettingsValue,
        instruction: "",
      };
    case "CHANGE-MAX-SETTINGS-VALUE-COUNTER2":
      return {
        ...state,
        maxSettingsValue: action.value,
      };
    case "CHANGE-START-SETTINGS-VALUE-COUNTER2":
      return {
        ...state,
        startSettingsValue: action.value,
      };
    default:
      return state;
  }
};

//action creators
export const setCounter2AC = () => {
  return {
    type: "SET-COUNTER2",
  } as const;
};

export const resetCounter2AC = () => {
  return {
    type: "RESET-COUNTER2",
  } as const;
};

export const setCounterSettingsCounter2AC = () => {
  return {
    type: "SET-COUNTER2-SETTINGS",
  } as const;
};

export const changeMaxSettingsValueCounter2AC = (value: number) => {
  return {
    type: "CHANGE-MAX-SETTINGS-VALUE-COUNTER2",
    value,
  } as const;
};

export const changeStartSettingsValueCounter2AC = (value: number) => {
  return {
    type: "CHANGE-START-SETTINGS-VALUE-COUNTER2",
    value,
  } as const;
};
