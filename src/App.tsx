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
  counterReducer,
  resetCounterAC,
} from "./reducers/counterReducer";

export const App = () => {
  const [values, dispatchValues] = useReducer(counterReducer, {
    count: 0,
    startCount: 0,
    maxCount: 0,
    maxSettingsValue: 1,
    startSettingsValue: 0,
    instruction: "Enter values and press 'set'",
  });
  const setCount = () => {
    dispatchValues(setCounterAC());
  };
  const resetCount = () => {
    dispatchValues(resetCounterAC());
  };

  const setCounterSettings = () => {
    dispatchValues(setCounterSettingsAC());
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
      <Counter values={values} setCount={setCount} resetCount={resetCount} />
      <CounterWithSettings />
    </div>
  );
};
