import React, { ChangeEvent, FC } from "react";
import { Button } from "../common/Button/Button";
import commonS from "../СommonStyles.module.css";
import s from "./Settings.module.css";

type SettingsType = {
  maxSettingsValue: number;
  startSettingsValue: number;
  setCounterSettings: (max: number, start: number) => void;
  changeMaxSettingsValue: (value: number) => void;
  changeStartSettingsValue: (value: number) => void;
};

export const Settings: FC<SettingsType> = (props) => {
  const {
    maxSettingsValue,
    startSettingsValue,
    setCounterSettings,
    changeMaxSettingsValue,
    changeStartSettingsValue,
  } = props;

  const setDisabled =
    maxSettingsValue < 1 ||
    startSettingsValue < 0 ||
    startSettingsValue >= maxSettingsValue ||
    (startSettingsValue === Number(localStorage.getItem("startValue")) &&
      maxSettingsValue === Number(localStorage.getItem("maxValue")));

  const maxValueClasses =
    maxSettingsValue < 1 ? `${s.input} ${s.incorrectValue}` : s.input;
  const startValueClasses =
    startSettingsValue < 0 ||
    (startSettingsValue >= maxSettingsValue && maxSettingsValue > 0)
      ? `${s.input} ${s.incorrectValue}`
      : s.input;

  const changeMaxSettingsValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeMaxSettingsValue(Number(e.currentTarget.value));
  };

  const changeStartSettingsValueHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    changeStartSettingsValue(Number(e.currentTarget.value));
  };

  const setStartCounterValueHandler = () => {
    setCounterSettings(maxSettingsValue, startSettingsValue);
  };

  return (
    <div className={commonS.container}>
      <div className={s.display}>
        <label className={s.valueContainer}>
          <span className={s.valueTitle}>max value:</span>
          <input
            type="number"
            className={maxValueClasses}
            value={maxSettingsValue}
            onChange={changeMaxSettingsValueHandler}
          />
        </label>

        <label className={s.valueContainer}>
          <span className={s.valueTitle}>start value:</span>
          <input
            type="number"
            className={startValueClasses}
            value={startSettingsValue}
            onChange={changeStartSettingsValueHandler}
          />
        </label>
      </div>

      <div className={commonS.buttonsContainer}>
        <Button
          title={"set"}
          callBack={setStartCounterValueHandler}
          disabled={setDisabled}
        />
      </div>
    </div>
  );
};
