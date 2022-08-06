import React, { useState, ChangeEvent, FC } from "react";
import { Button } from "../common/Button/Button";
import commonS from "../СommonStyles.module.css";
import s from "./Settings.module.css";
type SettingsType = {
  setCounterValue: (value: number) => void;
  setStartCounterValue: (value: number) => void;
  setMaxCounterValue: (value: number) => void;
  startCount: number;
  maxCount: number;
};
export const Settings: FC<SettingsType> = ({
  setCounterValue,
  setStartCounterValue,
  setMaxCounterValue,
  startCount,
  maxCount,
}) => {
  const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxCounterValue(Number(e.currentTarget.value));
  };
  const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartCounterValue(Number(e.currentTarget.value));
  };

  const incDisabled = false;
  const setStartCounterValueHandler = () => {
    setStartCounterValue(startCount);
    setCounterValue(startCount);
  };

  return (
    <div className={commonS.container}>
      <div className={s.display}>
        <label className={s.valueContainer}>
          <span className={s.valueTitle}>max value:</span>
          <input
            type="number"
            className={s.input}
            value={maxCount}
            onChange={setMaxValueHandler}
          />
        </label>
        <label className={s.valueContainer}>
          <span className={s.valueTitle}>start value:</span>
          <input
            type="number"
            className={s.input}
            value={startCount}
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
