import React from "react";
import {
  changeMaxSettingsValueCounter1AC,
  changeStartSettingsValueCounter1AC,
  resetCounter1AC,
  setCounter1AC,
  setCounter1SettingsAC,
} from "../../store/reducers/counterV1Reducer";
import commonS from "../СommonStyles.module.css";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";
import { Button } from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";

import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";
import { RootStateType, Counter1ValuesType } from "../../types";

export const CounterV1 = () => {
  let counter1Values = useSelector<RootStateType, Counter1ValuesType>(
    (state) => state.counterV1
  );

  const {
    count,
    startCount,
    maxCount,
    maxSettingsValue,
    startSettingsValue,
    instruction,
  } = { ...counter1Values };

  const dispatch = useDispatch();

  const setCount = () => {
    dispatch(setCounter1AC());
  };
  const resetCount = () => {
    dispatch(resetCounter1AC());
  };

  const setCounterSettings = () => {
    dispatch(setCounter1SettingsAC());
  };

  const changeMaxSettingsValue = (value: number) => {
    dispatch(changeMaxSettingsValueCounter1AC(value));
  };

  const changeStartSettingsValue = (value: number) => {
    dispatch(changeStartSettingsValueCounter1AC(value));
  };

  const incDisabled = count === maxCount || instruction !== "";
  const resetDisabled = count === startCount || instruction !== "";

  const setDisabled =
    maxSettingsValue < 1 ||
    startSettingsValue < 0 ||
    startSettingsValue >= maxSettingsValue;

  return (
    <>
      <div className={commonS.container}>
        <SettingsDisplay
          maxSettingsValue={maxSettingsValue}
          startSettingsValue={startSettingsValue}
          changeMaxSettingsValue={changeMaxSettingsValue}
          changeStartSettingsValue={changeStartSettingsValue}
        />
        <div className={commonS.buttonsContainer}>
          <Button
            title={"set"}
            callBack={setCounterSettings}
            disabled={setDisabled}
          />
        </div>
      </div>
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
    </>
  );
};
