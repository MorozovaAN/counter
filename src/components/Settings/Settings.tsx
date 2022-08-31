import React, { FC } from "react";
import { Button } from "../common/Button/Button";
import commonS from "../СommonStyles.module.css";
import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";
import { valuesType } from "../../reducers/counterReducer";

type SettingsType = {
  values: valuesType;
  setCounterSettings: (max: number, start: number) => void;
  changeMaxSettingsValue: (value: number) => void;
  changeStartSettingsValue: (value: number) => void;
};

export const Settings: FC<SettingsType> = ({
  values,
  setCounterSettings,
  changeMaxSettingsValue,
  changeStartSettingsValue,
}) => {
  const setDisabled =
    values.maxSettingsValue < 1 ||
    values.startSettingsValue < 0 ||
    values.startSettingsValue >= values.maxSettingsValue;

  const setStartCounterValueHandler = () => {
    setCounterSettings(values.maxSettingsValue, values.startSettingsValue);
  };

  return (
    <div className={commonS.container}>
      <SettingsDisplay
        maxSettingsValue={values.maxSettingsValue}
        startSettingsValue={values.startSettingsValue}
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
