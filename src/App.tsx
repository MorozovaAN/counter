import s from "./App.module.css";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";
import { useEffect, useState } from "react";

export const App = () => {
  const initStateCount = localStorage.getItem("count")
    ? Number(localStorage.getItem("count"))
    : 0;
  const initStartValue = localStorage.getItem("startValue")
    ? Number(localStorage.getItem("startValue"))
    : 0;
  const initMaxValue = localStorage.getItem("maxValue")
    ? Number(localStorage.getItem("maxValue"))
    : 0;

  const [count, setCount] = useState<number>(initStateCount);
  const [instruction, setInstruction] = useState("");
  const [startCount, setStartCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [maxSettingsValue, setMaxSettingsValue] = useState(initMaxValue);
  const [startSettingsValue, setStartSettingsValue] = useState(initStartValue);

  const setCounterValue = (value: number) => {
    setCount(value);
  };

  const setCounterSettings = (max: number, start: number) => {
    setInstruction("");
    setMaxCount(max);
    setStartCount(start);
    setCount(start);
  };

  useEffect(() => {
    localStorage.setItem("maxValue", JSON.stringify(maxSettingsValue));
  }, [maxSettingsValue]);
  useEffect(() => {
    localStorage.setItem("startValue", JSON.stringify(startSettingsValue));
  }, [startSettingsValue]);

  const changeMaxSettingsValue = (value: number) => {
    setMaxSettingsValue(value);
    value <= startSettingsValue
      ? setInstruction("Incorrect value!")
      : setInstruction("Enter values and press 'set'");
  };
  const changeStartSettingsValue = (value: number) => {
    setStartSettingsValue(value);
    value >= maxSettingsValue
      ? setInstruction("Incorrect value!")
      : setInstruction("Enter values and press 'set'");
  };

  return (
    <div className={s.container}>
      <Settings
        maxSettingsValue={maxSettingsValue}
        startSettingsValue={startSettingsValue}
        setCounterSettings={setCounterSettings}
        changeMaxSettingsValue={changeMaxSettingsValue}
        changeStartSettingsValue={changeStartSettingsValue}
      />
      <Counter
        count={count}
        instruction={instruction}
        startCount={startCount}
        maxCount={maxCount}
        setCounterValue={setCounterValue}
      />
    </div>
  );
};
