import s from "./SettingsDisplay.module.css";
import React, { ChangeEvent, FC } from "react";

type SettingsDisplayType = {
  maxSettingsValue: number;
  startSettingsValue: number;
  changeMaxSettingsValue: (value: number) => void;
  changeStartSettingsValue: (value: number) => void;

  valueWrong: boolean;
};
export const SettingsDisplay: FC<SettingsDisplayType> = ({
  maxSettingsValue,
  startSettingsValue,
  changeMaxSettingsValue,
  changeStartSettingsValue,
  valueWrong,
}) => {
  const valueClasses = valueWrong ? `${s.input} ${s.incorrectValue}` : s.input;

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
          onChange={changeMaxSettingsValueHandler}
          value={maxSettingsValue}
          className={valueClasses}
          type="number"
        />
      </label>

      <label className={s.valueContainer}>
        <span className={s.valueTitle}>start value:</span>
        <input
          onChange={changeStartSettingsValueHandler}
          value={startSettingsValue}
          className={valueClasses}
          type="number"
        />
      </label>
    </div>
  );
};
