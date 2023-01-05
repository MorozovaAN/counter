import React from "react";
import commonS from "../СommonStyles.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
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
  reset,
  setSettings,
} from "../../store/slices/counterV2Slice";
import { decrement } from "../../store/slices/counterV1Slice";

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
    instruction,
  } = counter2Values;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setCounterSettings = () => {
    if (window.location.pathname === "/") {
      navigate("/set");
    } else {
      dispatch(setSettings());
      navigate("/");
    }
  };

  const changeMaxSettingsValue = (value: number) => {
    dispatch(changeMaxValue({ value }));
  };
  const changeStartSettingsValue = (value: number) => {
    dispatch(changeStartValue({ value }));
  };

  let setDisabled;
  if (window.location.pathname === "/") {
    setDisabled = false;
  } else {
    setDisabled =
      maxSettingsValue < 1 ||
      startSettingsValue < 0 ||
      startSettingsValue >= maxSettingsValue;
  }

  const incDisabled = value === maxValue || instruction !== "";
  const decDisabled = value === startValue || instruction !== "";
  const resetDisabled = value === startValue || instruction !== "";

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
      <Routes>
        <Route
          path={"/"}
          element={
            <CounterDisplay
              count={value}
              instruction={instruction}
              maxCount={maxValue}
            />
          }
        />
        <Route
          path={"/set"}
          element={
            <SettingsDisplay
              maxSettingsValue={maxSettingsValue}
              startSettingsValue={startSettingsValue}
              changeMaxSettingsValue={changeMaxSettingsValue}
              changeStartSettingsValue={changeStartSettingsValue}
            />
          }
        />
      </Routes>
      <div className={commonS.buttonsContainer}>
        {window.location.pathname === "/" && (
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
