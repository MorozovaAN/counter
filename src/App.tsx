import s from "./App.module.css";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";
import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);

  const setCounterValue = (value: number) => {
    setCount(value);
  };
  const setStartCounterValue = (value: number) => {
    setStartCount(value);
  };
  const setMaxCounterValue = (value: number) => {
    setMaxCount(value);
  };
  return (
    <div className={s.container}>
      <Settings
        setCounterValue={setCounterValue}
        setStartCounterValue={setStartCounterValue}
        setMaxCounterValue={setMaxCounterValue}
        startCount={startCount}
        maxCount={maxCount}
      />
      <Counter
        count={count}
        startCount={startCount}
        maxCount={maxCount}
        setCounterValue={setCounterValue}
      />
    </div>
  );
};
