// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { counterV1Reducer } from "./slices/counterV1Reducer";
// import { counterV2Reducer } from "./slices/counterV2Reducer";
// import thunk from "redux-thunk";
// import { loadState, saveState } from "../helpers/localstorage";
//
// export const rootReducer = combineReducers({
//   counterV1: counterV1Reducer,
//   counterV2: counterV2Reducer,
// });
//
// export const store = createStore(
//   rootReducer,
//   loadState(),
//   applyMiddleware(thunk)
// );
//
// store.subscribe(() => {
//   saveState(store.getState());
// });

import { configureStore } from "@reduxjs/toolkit";
import counterV1Reducer from "./slices/counterV1Slice";
import counterV2Reducer from "./slices/counterV2Reducer";

export const store = configureStore({
  reducer: {
    counterV1: counterV1Reducer,
    counterV2: counterV2Reducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
