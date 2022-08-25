import s from "./App.module.css";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";
import { useEffect, useState } from "react";

type instructionType = "Incorrect value!" | "Enter values and press 'set'" | "";

export const App = () => {
  const initStateCount = localStorage.getItem("count")
    ? Number(localStorage.getItem("count"))
    : 0;
  const initInstruction = localStorage.getItem("count")
    ? ""
    : "Enter values and press 'set'";

  let initStartValue = 0;
  let initMaxValue = 1;
  let initStartCount = 0;
  let initMaxCount = 0;

  if (localStorage.getItem("startValue")) {
    initStartValue = Number(localStorage.getItem("startValue"));
    initMaxValue = Number(localStorage.getItem("maxValue"));
    initStartCount = Number(localStorage.getItem("startValue"));
    initMaxCount = Number(localStorage.getItem("maxValue"));
  }

  const [count, setCount] = useState(initStateCount);
  const [instruction, setInstruction] =
    useState<instructionType>(initInstruction);

  const [startCount, setStartCount] = useState(initStartCount);
  const [maxCount, setMaxCount] = useState(initMaxCount);

  const [maxSettingsValue, setMaxSettingsValue] = useState(initMaxValue);
  const [startSettingsValue, setStartSettingsValue] = useState(initStartValue);

  // const setCounterValue = (value: number) => {
  //   setCount(value);
  // };

  const setCounterSettings = (max: number, start: number) => {
    setInstruction("");
    setMaxCount(max);
    setStartCount(start);
    setCount(start);
  };

  useEffect(() => {
    localStorage.setItem("maxValue", JSON.stringify(maxCount));
  }, [maxCount]);
  useEffect(() => {
    localStorage.setItem("startValue", JSON.stringify(startCount));
  }, [startCount]);

  const changeMaxSettingsValue = (value: number) => {
    setMaxSettingsValue(value);
    value <= startSettingsValue || value < 0
      ? setInstruction("Incorrect value!")
      : setInstruction("Enter values and press 'set'");
  };
  const changeStartSettingsValue = (value: number) => {
    setStartSettingsValue(value);
    value >= maxSettingsValue || value < 0
      ? setInstruction("Incorrect value!")
      : setInstruction("Enter values and press 'set'");
  };

  return (
    <>
      <div className={s.container}>
        {/*<h2>Version 1</h2>*/}
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
          setCount={setCount}
        />
      </div>
    </>
  );
};
