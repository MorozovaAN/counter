import React, { FC } from "react";
import commonS from "../СommonStyles.module.css";
import { Button } from "../common/Button/Button";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";

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
  const incDisabled = count === maxCount || instruction !== "";
  const resetDisabled = count === startCount || instruction !== "";

  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(startCount);
  };

  return (
    <div className={commonS.container}>
      <CounterDisplay
        count={count}
        instruction={instruction}
        maxCount={maxCount}
      />
      <div className={commonS.buttonsContainer}>
        <Button title={"inc"} callBack={increment} disabled={incDisabled} />
        <Button title={"reset"} callBack={reset} disabled={resetDisabled} />
      </div>
    </div>
  );
};
