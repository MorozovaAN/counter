import React, { useState } from "react";
import commonS from "../СommonStyles.module.css";
import s from "./CounterV2.module.css";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";
import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";
import { Button } from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../store/store";
import {
  changeMaxValue,
  changeStartValue,
  CounterV2Type,
  increment,
  decrement,
  reset,
  setSettings,
  toggleSettings,
} from "../../store/slices/counterV2Slice";

//todo: 1. - исключить дробные числа - чтоб нельзя было ввести,
// 2. подсветить ошибку если стартовое число равно или больше максимального
// 3. написать в заголовке, что этот счетчик для отрицательных и положительных целых чисел
export const CounterV2 = () => {
  const counter2Values = useSelector<RootStateType, CounterV2Type>(
    (state) => state.counterV2
  );
  const {
    value,
    startValue,
    maxValue,
    maxSettingsValue,
    startSettingsValue,
    settings,
    instruction,
  } = counter2Values;

  const dispatch = useDispatch();

  const setDisabled = settings && startSettingsValue >= maxSettingsValue;
  const incDisabled = value === maxValue || instruction !== "";
  const decDisabled = value === startValue || instruction !== "";
  const resetDisabled = value === startValue || instruction !== "";
  const valueWrong = startSettingsValue >= maxSettingsValue;

  const setCounterSettings = () => {
    if (settings) {
      dispatch(setSettings());
    }
    dispatch(toggleSettings());
  };

  const changeMaxSettingsValue = (value: number) => {
    dispatch(changeMaxValue({ value }));
  };

  const changeStartSettingsValue = (value: number) => {
    dispatch(changeStartValue({ value }));
  };

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  const resetCount = () => {
    dispatch(reset());
  };

  return (
    <div className={commonS.container}>
      {settings ? (
        <SettingsDisplay
          maxSettingsValue={maxSettingsValue}
          startSettingsValue={startSettingsValue}
          changeMaxSettingsValue={changeMaxSettingsValue}
          changeStartSettingsValue={changeStartSettingsValue}
          valueWrong={valueWrong}
        />
      ) : (
        <CounterDisplay
          count={value}
          instruction={instruction}
          maxCount={maxValue}
        />
      )}

      <div className={commonS.buttonsContainer}>
        {!settings && (
          <>
            <Button
              title={"+"}
              callBack={incrementCount}
              disabled={incDisabled}
            />
            <Button
              title={"−"}
              callBack={decrementCount}
              disabled={decDisabled}
            />
            <Button
              title={"reset"}
              callBack={resetCount}
              disabled={resetDisabled}
            />
          </>
        )}
        <Button
          title={"set"}
          callBack={setCounterSettings}
          disabled={setDisabled}
        />
      </div>
    </div>
  );
};
