import commonS from "../СommonStyles.module.css";
import { CounterDisplay } from "../common/Displays/CounterDisplay/CounterDisplay";
import { Button } from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { SettingsDisplay } from "../common/Displays/SettingsDisplay/SettingsDisplay";
import { RootStateType } from "../../store/store";
import {
  changeMaxValue,
  changeStartValue,
  CounterV1Type,
  decrement,
  increment,
  reset,
  setSettings,
} from "../../store/slices/counterV1Slice";

export const CounterV1 = () => {
  const counter1Values = useSelector<RootStateType, CounterV1Type>(
    (state) => state.counterV1
  );
  const {
    value,
    startValue,
    maxValue,
    maxSettingsValue,
    startSettingsValue,
    instruction,
  } = counter1Values;
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };
  const decrementCount = () => {
    dispatch(decrement());
  };
  const resetCount = () => {
    dispatch(reset());
  };

  const setCounterSettings = () => {
    dispatch(setSettings());
  };

  const changeMaxSettingsValue = (value: number) => {
    dispatch(changeMaxValue({ value }));
  };

  const changeStartSettingsValue = (value: number) => {
    dispatch(changeStartValue({ value }));
  };

  const incDisabled = value === maxValue || instruction !== "";
  const decDisabled = value === startValue || instruction !== "";
  const resetDisabled = value === startValue || instruction !== "";

  const setDisabled =
    maxSettingsValue < 1 ||
    startSettingsValue < 0 ||
    startSettingsValue >= maxSettingsValue;

  return (
    <>
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
      <div className={commonS.container}>
        <CounterDisplay
          count={value}
          instruction={instruction}
          maxCount={maxValue}
        />
        <div className={commonS.buttonsContainer}>
          <Button
            title={"+"}
            callBack={incrementCount}
            disabled={incDisabled}
          />
          <Button
            title={"−"}
            callBack={decrementCount}
            disabled={decDisabled}
          />
          <Button
            title={"reset"}
            callBack={resetCount}
            disabled={resetDisabled}
          />
        </div>
      </div>
    </>
  );
};
