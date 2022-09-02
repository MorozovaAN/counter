import React, { FC } from "react";
import commonS from "../СommonStyles.module.css";
import { Button } from "../common/Button/Button";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";
import { valuesType } from "../../reducers/counterReducer";

type CounterType = {
  values: valuesType;
  setCount: () => void;
  resetCount: () => void;
};
export const Counter: FC<CounterType> = ({ values, setCount, resetCount }) => {
  const { count, instruction, startCount, maxCount } = values;

  const incDisabled = count === maxCount || instruction !== "";
  const resetDisabled = count === startCount || instruction !== "";

  return (
    <div className={commonS.container}>
      <CounterDisplay
        count={count}
        instruction={instruction}
        maxCount={maxCount}
      />
      <div className={commonS.buttonsContainer}>
        <Button title={"inc"} callBack={setCount} disabled={incDisabled} />
        <Button
          title={"reset"}
          callBack={resetCount}
          disabled={resetDisabled}
        />
      </div>
    </div>
  );
};
