import { combineReducers, CombinedState } from "redux";
import { Reducer } from "react";
import companyReducer from "./companyStore/reducer";

const reducers: Reducer<CombinedState<any>, any> = combineReducers({
  company: companyReducer,
});

export default reducers;
