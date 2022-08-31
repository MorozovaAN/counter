import React, { FC } from "react";
import s from "./CounterDisplay.module.css";
import commonS from "../СommonDisplays.module.css";

type CounterDisplayType = {
  count: number;
  instruction: string;
  maxCount: number;
};

export const CounterDisplay: FC<CounterDisplayType> = ({
  count,
  instruction,
  maxCount,
}) => {
  const valueClasses = instruction
    ? `${
        instruction === "Incorrect value!" ? s.instructionError : s.instruction
      }`
    : `${count >= maxCount && count !== 0 ? s.limitValue : s.value}`;

  return (
    <div className={commonS.display}>
      <p className={valueClasses}>{instruction ? instruction : count}</p>
    </div>
  );
};
