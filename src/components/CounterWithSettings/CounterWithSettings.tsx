import React, { useReducer } from "react";
import commonS from "../СommonStyles.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";
import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";
import { Button } from "../common/Button/Button";
import {
  changeMaxSettingsValueAC,
  changeStartSettingsValueAC,
  counterV2Reducer,
  resetCounterAC,
  setCounterAC,
  setCounterSettingsAC,
} from "../../reducers/CounterWithSettingsReducer";

export const CounterWithSettings = () => {
  const [values, dispatchValues] = useReducer(counterV2Reducer, {
    count: 0,
    startCount: 0,
    maxCount: 0,
    maxSettingsValue: 1,
    startSettingsValue: 0,
    instruction: "Click 'set' to set the values",
  });

  const navigate = useNavigate();

  const setCounterSettings = () => {
    if (window.location.pathname === "/") {
      navigate("/set");
    } else {
      dispatchValues(setCounterSettingsAC());
      navigate("/");
    }
  };

  const changeMaxSettingsValue = (value: number) => {
    dispatchValues(changeMaxSettingsValueAC(value));
  };
  const changeStartSettingsValue = (value: number) => {
    dispatchValues(changeStartSettingsValueAC(value));
  };

  let setDisabled;
  if (window.location.pathname === "/") {
    setDisabled = false;
  } else {
    setDisabled =
      values.maxSettingsValue < 1 ||
      values.startSettingsValue < 0 ||
      values.startSettingsValue >= values.maxSettingsValue;
  }

  const incDisabled =
    values.count === values.maxCount || values.instruction !== "";
  const resetDisabled =
    values.count === values.startCount || values.instruction !== "";

  const increment = () => {
    dispatchValues(setCounterAC());
  };
  const reset = () => {
    dispatchValues(resetCounterAC());
  };

  return (
    <div className={commonS.container}>
      <Routes>
        <Route
          path={"/"}
          element={
            <CounterDisplay
              count={values.count}
              instruction={values.instruction}
              maxCount={values.maxCount}
            />
          }
        />
        <Route
          path={"/set"}
          element={
            <SettingsDisplay
              maxSettingsValue={values.maxSettingsValue}
              startSettingsValue={values.startSettingsValue}
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
