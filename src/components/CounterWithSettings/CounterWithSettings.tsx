import React, { FC } from "react";
import commonS from "../СommonStyles.module.css";
import { Route, Routes } from "react-router-dom";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";
import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";
import { Button } from "../common/Button/Button";

type CounterWithSettingsType = {
  count: number;
  instruction: string;
  maxCount: number;
  changeMaxSettingsValue: (value: number) => void;
  changeStartSettingsValue: (value: number) => void;
};
export const CounterWithSettings: FC<CounterWithSettingsType> = ({
  count,
  instruction,
  maxCount,
  changeMaxSettingsValue,
  changeStartSettingsValue,
}) => {
  const increment = () => {
    setCount(count + 1);
  };
  const incDisabled = count === maxCount || instruction !== "";
  return (
    <div className={commonS.container}>
      <Routes>
        <Route
          path={"/"}
          element={
            <CounterDisplay
              count={count}
              instruction={instruction}
              maxCount={maxCount}
            />
          }
        />
        <Route
          path={"/set"}
          element={
            <SettingsDisplay
              maxSettingsValue={5}
              startSettingsValue={1}
              changeMaxSettingsValue={changeMaxSettingsValue}
              changeStartSettingsValue={changeStartSettingsValue}
            />
          }
        />
      </Routes>
      <div className={commonS.buttonsContainer}>
        <Button title={"inc"} callBack={increment} disabled={incDisabled} />
        <Button title={"reset"} callBack={increment} disabled={incDisabled} />
        <Button title={"set"} callBack={increment} disabled={incDisabled} />
      </div>
    </div>
  );
};
