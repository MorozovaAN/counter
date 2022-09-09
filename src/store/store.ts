import { combineReducers, createStore } from "redux";
import { counterV1Reducer } from "./reducers/counterV1Reducer";
import { counterV2Reducer } from "./reducers/counterV2Reducer";

export const rootReducer = combineReducers({
  counterV1: counterV1Reducer,
  counterV2: counterV2Reducer,
});

export const store = createStore(rootReducer);
