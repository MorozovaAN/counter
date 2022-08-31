import React, { FC } from "react";
import commonS from "../СommonStyles.module.css";
import { Button } from "../common/Button/Button";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";
import { valuesType } from "../../reducers/counterReducer";

type CounterType = {
  values: valuesType;
  setCount: (count: number) => void;
};
export const Counter: FC<CounterType> = ({ values, setCount }) => {
  const { count, instruction, startCount, maxCount } = values;

  const incDisabled = count === maxCount || instruction !== "";
  const resetDisabled = count === startCount || instruction !== "";

  const increment = () => {
    setCount(values.count + 1);
  };
  const reset = () => {
    setCount(values.startCount);
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
