import s from "./App.module.css";
import { CounterV2 } from "./components/CounterV2/CounterV2";
import { CounterV1 } from "./components/CounterV1/CounterV1";

export const App = () => {
  return (
    <div className={s.container}>
      <div>
        <h2 className={s.title}>
          Counter version 1, for positive integers only
        </h2>
        <CounterV1 />
      </div>
      <div>
        <h2 className={s.title}>
          Counter version 2, for positive and negative integers
        </h2>
        <CounterV2 />
      </div>
    </div>
  );
};
