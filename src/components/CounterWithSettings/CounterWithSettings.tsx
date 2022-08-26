import React, { FC, useEffect, useState } from "react";
import commonS from "../СommonStyles.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";
import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";
import { Button } from "../common/Button/Button";

type CounterWithSettingsType = {};
type instructionV2Type = "Click 'set' to set the values" | "";

export const CounterWithSettings: FC<CounterWithSettingsType> = () => {
  const initStateCountV2 = localStorage.getItem("countV2")
    ? Number(localStorage.getItem("countV2"))
    : 0;
  let initStartValueV2 = 0;
  let initMaxValueV2 = 1;
  let initStartCountV2 = 0;
  let initMaxCountV2 = 0;
  const initInstructionV2 = localStorage.getItem("countV2")
    ? ""
    : "Click 'set' to set the values";

  if (localStorage.getItem("startValueV2")) {
    initStartValueV2 = Number(localStorage.getItem("startValueV2"));
    initMaxValueV2 = Number(localStorage.getItem("maxValueV2"));
    initStartCountV2 = Number(localStorage.getItem("startValueV2"));
    initMaxCountV2 = Number(localStorage.getItem("maxValueV2"));
  }
  const [countV2, setCountV2] = useState(initStateCountV2);
  const [instructionV2, setInstructionV2] =
    useState<instructionV2Type>(initInstructionV2);

  const [startCountV2, setStartCountV2] = useState(initStartCountV2);
  const [maxCountV2, setMaxCountV2] = useState(initMaxCountV2);

  const [maxSettingsValueV2, setMaxSettingsValueV2] = useState(initMaxValueV2);
  const [startSettingsValueV2, setStartSettingsValueV2] =
    useState(initStartValueV2);

  useEffect(() => {
    localStorage.setItem("countV2", JSON.stringify(countV2));
  }, [countV2]);
  useEffect(() => {
    localStorage.setItem("maxValueV2", JSON.stringify(maxCountV2));
  }, [maxCountV2]);
  useEffect(() => {
    localStorage.setItem("startValueV2", JSON.stringify(startCountV2));
  }, [startCountV2]);

  const navigate = useNavigate();

  const setCounterSettings = () => {
    if (window.location.pathname === "/") {
      navigate("/set");
    } else {
      setInstructionV2("");
      setMaxCountV2(maxSettingsValueV2);
      setStartCountV2(startSettingsValueV2);
      setCountV2(startSettingsValueV2);
      navigate("/");
    }
  };

  const changeMaxSettingsValue = (value: number) => {
    setMaxSettingsValueV2(value);
  };
  const changeStartSettingsValue = (value: number) => {
    setStartSettingsValueV2(value);
  };

  let setDisabled;
  if (window.location.pathname === "/") {
    setDisabled = false;
  } else {
    setDisabled =
      maxSettingsValueV2 < 1 ||
      startSettingsValueV2 < 0 ||
      startSettingsValueV2 >= maxSettingsValueV2;
  }
  const incDisabled = countV2 === maxCountV2 || instructionV2 !== "";
  const resetDisabled = countV2 === startCountV2 || instructionV2 !== "";

  const increment = () => {
    setCountV2(countV2 + 1);
  };
  const reset = () => {
    setCountV2(startCountV2);
  };

  return (
    <div className={commonS.container}>
      <Routes>
        <Route
          path={"/"}
          element={
            <CounterDisplay
              count={countV2}
              countName={"countV2"}
              instruction={instructionV2}
              maxCount={maxCountV2}
            />
          }
        />
        <Route
          path={"/set"}
          element={
            <SettingsDisplay
              maxSettingsValue={maxSettingsValueV2}
              startSettingsValue={startSettingsValueV2}
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
