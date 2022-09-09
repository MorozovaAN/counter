import s from "./App.module.css";
import { CounterV2 } from "./components/CounterV2/CounterV2";
import { CounterV1 } from "./components/CounterV1/CounterV1";

export const App = () => {
  return (
    <div className={s.container}>
      <CounterV1 />
      <CounterV2 />
    </div>
  );
};
