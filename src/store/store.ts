import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterV1Reducer } from "./reducers/counterV1Reducer";
import { counterV2Reducer } from "./reducers/counterV2Reducer";
import thunk from "redux-thunk";
import { loadState, saveState } from "../helpers/localstorage";

export const rootReducer = combineReducers({
  counterV1: counterV1Reducer,
  counterV2: counterV2Reducer,
});

export const store = createStore(
  rootReducer,
  loadState(),
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
});
