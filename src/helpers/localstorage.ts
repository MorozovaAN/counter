import { RootStateType } from "../store/store";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    return undefined;
  }
};
export const saveState = (state: RootStateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
