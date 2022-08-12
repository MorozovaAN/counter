import React, { useState, ChangeEvent, FC, useEffect } from "react";
import { Button } from "../common/Button/Button";
import commonS from "../СommonStyles.module.css";
import s from "./Settings.module.css";

type SettingsType = {
  setCounterSettings: (max: number, start: number) => void;
};

export const Settings: FC<SettingsType> = ({ setCounterSettings }) => {
  const initStartValue = localStorage.getItem("startValue")
    ? Number(localStorage.getItem("startValue"))
    : 0;
  const initMaxValue = localStorage.getItem("maxValue")
    ? Number(localStorage.getItem("maxValue"))
    : 0;

  const [maxValue, setMaxValue] = useState(initMaxValue);
  const [startValue, setStartValue] = useState(initStartValue);

  const incDisabled = maxValue < 1 || startValue < 0 || startValue >= maxValue;

  const maxValueClasses =
    maxValue < 0 ? `${s.input} ${s.incorrectValue}` : s.input;
  const startValueClasses =
    startValue < 0 || (startValue >= maxValue && maxValue > 0)
      ? `${s.input} ${s.incorrectValue}`
      : s.input;

  useEffect(() => {
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
  }, [maxValue]);
  useEffect(() => {
    localStorage.setItem("startValue", JSON.stringify(startValue));
  }, [startValue]);

  const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value));
  };
  const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(Number(e.currentTarget.value));
  };

  const setStartCounterValueHandler = () => {
    setCounterSettings(maxValue, startValue);
  };

  return (
    <div className={commonS.container}>
      <div className={s.display}>
        <label className={s.valueContainer}>
          <span className={s.valueTitle}>max value:</span>
          <input
            type="number"
            className={maxValueClasses}
            value={maxValue}
            onChange={setMaxValueHandler}
          />
        </label>

        <label className={s.valueContainer}>
          <span className={s.valueTitle}>start value:</span>
          <input
            type="number"
            className={startValueClasses}
            value={startValue}
            onChange={setStartValueHandler}
          />
        </label>
      </div>

      <div className={commonS.buttonsContainer}>
        <Button
          title={"set"}
          callBack={setStartCounterValueHandler}
          disabled={incDisabled}
        />
      </div>
    </div>
  );
};
