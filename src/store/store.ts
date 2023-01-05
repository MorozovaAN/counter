import { configureStore } from "@reduxjs/toolkit";
import counterV1Reducer from "./slices/counterV1Slice";
import counterV2Reducer from "./slices/counterV2Slice";
import { loadState, saveState } from "../helpers/localstorage";

export const store = configureStore({
  reducer: {
    counterV1: counterV1Reducer,
    counterV2: counterV2Reducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
