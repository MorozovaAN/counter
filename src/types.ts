import { rootReducer } from "./store/store";
import {
  changeMaxSettingsValueCounter2AC,
  changeStartSettingsValueCounter2AC,
  resetCounter2AC,
  setCounter2AC,
  setCounterSettingsCounter2AC,
} from "./store/reducers/counterV2Reducer";
import {
  changeMaxSettingsValueCounter1AC,
  changeStartSettingsValueCounter1AC,
  resetCounter1AC,
  setCounter1AC,
  setCounter1SettingsAC,
} from "./store/reducers/counterV1Reducer";

export type RootStateType = ReturnType<typeof rootReducer>;

//Counter 1
export type Counter1ValuesType = {
  count: number;
  startCount: number;
  maxCount: number;
  maxSettingsValue: number;
  startSettingsValue: number;
  instruction: "Incorrect value!" | "Enter values and press 'set'" | "";
};
export type actionTypeCounter1 =
  | setCounter1ACType
  | resetCounter1ACType
  | setCounterSettingsCounter1ACType
  | changeMaxSettingsValueCounter1ACType
  | changeStartSettingsValueCounter1Type;
type setCounter1ACType = ReturnType<typeof setCounter1AC>;
type resetCounter1ACType = ReturnType<typeof resetCounter1AC>;
type setCounterSettingsCounter1ACType = ReturnType<
  typeof setCounter1SettingsAC
>;
type changeMaxSettingsValueCounter1ACType = ReturnType<
  typeof changeMaxSettingsValueCounter1AC
>;
type changeStartSettingsValueCounter1Type = ReturnType<
  typeof changeStartSettingsValueCounter1AC
>;

//Counter 2
export type Counter2ValuesType = {
  count: number;
  startCount: number;
  maxCount: number;
  maxSettingsValue: number;
  startSettingsValue: number;
  instruction: "Click 'set' to set the values" | "";
};
export type actionTypeCounter2 =
  | setCounter2ACType
  | resetCounter2ACType
  | setCounterSettingsCounter2ACType
  | changeMaxSettingsValueCounter2ACType
  | changeStartSettingsValueCounter2Type;
type setCounter2ACType = ReturnType<typeof setCounter2AC>;
type setCounterSettingsCounter2ACType = ReturnType<
  typeof setCounterSettingsCounter2AC
>;
type resetCounter2ACType = ReturnType<typeof resetCounter2AC>;
type changeMaxSettingsValueCounter2ACType = ReturnType<
  typeof changeMaxSettingsValueCounter2AC
>;
type changeStartSettingsValueCounter2Type = ReturnType<
  typeof changeStartSettingsValueCounter2AC
>;
