import s from "./App.module.css";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";
import { useState } from "react";

export const App = () => {
  const initStateCount = localStorage.getItem("count")
    ? localStorage.getItem("count")
    : 0;
  const [count, setCount] = useState(Number(initStateCount));
  const [startCount, setStartCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);

  const setCounterValue = (value: number) => {
    setCount(value);
  };

  const setCounterSettings = (max: number, start: number) => {
    setMaxCount(max);
    setStartCount(start);
    setCount(start);
  };

  return (
    <div className={s.container}>
      <Settings setCounterSettings={setCounterSettings} />
      <Counter
        count={count}
        startCount={startCount}
        maxCount={maxCount}
        setCounterValue={setCounterValue}
      />
    </div>
  );
};
