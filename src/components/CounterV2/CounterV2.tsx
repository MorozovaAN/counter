import React from "react";
import commonS from "../СommonStyles.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";
import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";
import { Button } from "../common/Button/Button";
import {
  changeMaxSettingsValueCounter2AC,
  changeStartSettingsValueCounter2AC,
  resetCounter2AC,
  increaseCounter2AC,
  setCounterSettingsCounter2AC,
} from "../../store/reducers/counterV2Reducer";
import { useDispatch, useSelector } from "react-redux";

export const CounterV2 = () => {
  let counter2Values = useSelector<any, any>((state) => state.counterV2);
  const {
    count,
    startCount,
    maxCount,
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
      dispatch(setCounterSettingsCounter2AC());
      navigate("/");
    }
  };

  const changeMaxSettingsValue = (value: number) => {
    dispatch(changeMaxSettingsValueCounter2AC(value));
  };
  const changeStartSettingsValue = (value: number) => {
    dispatch(changeStartSettingsValueCounter2AC(value));
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

  const incDisabled = count === maxCount || instruction !== "";
  const resetDisabled = count === startCount || instruction !== "";

  const increment = () => {
    dispatch(increaseCounter2AC());
  };
  const reset = () => {
    dispatch(resetCounter2AC());
  };

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
            <Button title={"inc"} callBack={increment} disabled={incDisabled} />
            <Button title={"reset"} callBack={reset} disabled={resetDisabled} />
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
