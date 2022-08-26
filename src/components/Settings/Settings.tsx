import React, { FC } from "react";
import { Button } from "../common/Button/Button";
import commonS from "../СommonStyles.module.css";
import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";

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
    startSettingsValue >= maxSettingsValue;

  const setStartCounterValueHandler = () => {
    setCounterSettings(maxSettingsValue, startSettingsValue);
  };

  return (
    <div className={commonS.container}>
      <SettingsDisplay
        maxSettingsValue={maxSettingsValue}
        startSettingsValue={startSettingsValue}
        changeMaxSettingsValue={changeMaxSettingsValue}
        changeStartSettingsValue={changeStartSettingsValue}
      />
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
