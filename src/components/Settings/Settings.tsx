import React, { FC } from "react";
import { Button } from "../common/Button/Button";
import commonS from "../СommonStyles.module.css";
import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";
import { valuesType } from "../../reducers/counterReducer";

type SettingsType = {
  values: valuesType;
  setCounterSettings: () => void;
  changeMaxSettingsValue: (value: number) => void;
  changeStartSettingsValue: (value: number) => void;
};

export const Settings: FC<SettingsType> = ({
  values,
  setCounterSettings,
  changeMaxSettingsValue,
  changeStartSettingsValue,
}) => {
  const { maxSettingsValue, startSettingsValue } = values;

  const setDisabled =
    maxSettingsValue < 1 ||
    startSettingsValue < 0 ||
    startSettingsValue >= maxSettingsValue;

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
          callBack={setCounterSettings}
          disabled={setDisabled}
        />
      </div>
    </div>
  );
};
