import s from "./App.module.css";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";
import { useReducer } from "react";
import { CounterWithSettings } from "./components/CounterWithSettings/CounterWithSettings";
import {
  changeMaxSettingsValueAC,
  changeStartSettingsValueAC,
  setCounterAC,
  setCounterSettingsAC,
  valuesReducer,
} from "./reducers/counterReducer";

export const App = () => {
  const [values, dispatchValues] = useReducer(valuesReducer, {
    count: 0,
    startCount: 0,
    maxCount: 0,
    maxSettingsValue: 1,
    startSettingsValue: 0,
    instruction: "Enter values and press 'set'",
  });
  const setCount = (count: number) => {
    dispatchValues(setCounterAC(count));
  };

  const setCounterSettings = (max: number, start: number) => {
    dispatchValues(setCounterSettingsAC(max, start));
  };

  const changeMaxSettingsValue = (value: number) => {
    dispatchValues(changeMaxSettingsValueAC(value));
  };

  const changeStartSettingsValue = (value: number) => {
    dispatchValues(changeStartSettingsValueAC(value));
  };

  return (
    <div className={s.container}>
      <Settings
        values={values}
        setCounterSettings={setCounterSettings}
        changeMaxSettingsValue={changeMaxSettingsValue}
        changeStartSettingsValue={changeStartSettingsValue}
      />
      <Counter values={values} setCount={setCount} />
      <CounterWithSettings />
    </div>
  );
};
