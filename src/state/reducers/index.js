import { combineReducers } from "redux";
import accountreducer from "./AccountReducer";

const reducers = combineReducers({
  account: accountreducer,
});

export default reducers;
