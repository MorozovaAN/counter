import React, { FC } from "react";
import s from "./Button.module.css";

type ButtonType = {
  title: string;
  callBack: () => void;
  disabled: boolean;
};
export const Button: FC<ButtonType> = ({ title, callBack, disabled }) => {
  const onClickHandler = () => {
    callBack();
  };
  return (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={disabled}
      className={s.button}
    >
      {title}
    </button>
  );
};
