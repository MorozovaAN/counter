import s from "./SettingsDisplay.module.css";
import React, { ChangeEvent, FC } from "react";

type SettingsDisplayType = {
  maxSettingsValue: number;
  startSettingsValue: number;
  changeMaxSettingsValue: (value: number) => void;
  changeStartSettingsValue: (value: number) => void;
};
export const SettingsDisplay: FC<SettingsDisplayType> = ({
  maxSettingsValue,
  startSettingsValue,
  changeMaxSettingsValue,
  changeStartSettingsValue,
}) => {
  const maxValueClasses =
    maxSettingsValue < 1 || maxSettingsValue <= startSettingsValue
      ? `${s.input} ${s.incorrectValue}`
      : s.input;

  const startValueClasses =
    startSettingsValue < 0 || startSettingsValue >= maxSettingsValue
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

  return (
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
  );
};