import React, { FC, useEffect } from "react";
import s from "./Counter.module.css";
import commonS from "../СommonStyles.module.css";
import { Button } from "../common/Button/Button";

type CounterType = {
  count: number;
  instruction: string;
  startCount: number;
  maxCount: number;
  setCount: (value: number) => void;
};
export const Counter: FC<CounterType> = ({
  count,
  instruction,
  startCount,
  maxCount,
  setCount,
}) => {
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const incDisabled = count === maxCount || instruction !== "";
  const resetDisabled = count === startCount || instruction !== "";

  const valueClasses = instruction
    ? `${
        instruction === "Incorrect value!" ? s.instructionError : s.instruction
      }`
    : `${count >= maxCount && count !== 0 ? s.limitValue : s.value}`;

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(startCount);
  };
  return (
    <div className={commonS.container}>
      <div className={commonS.display}>
        <p className={valueClasses}>{instruction ? instruction : count}</p>
      </div>
      <div className={commonS.buttonsContainer}>
        <Button title={"inc"} callBack={increment} disabled={incDisabled} />
        <Button title={"reset"} callBack={reset} disabled={resetDisabled} />
      </div>
    </div>
  );
};
