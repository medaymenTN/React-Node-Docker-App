import { action } from "typesafe-actions";
import { Company } from "../../types";
import actionTypes from "./action.enum";

export const loadDataPending = () => action(actionTypes.LOAD_DATA);

export const loadDataSuccess = (payload: any) =>
  action(actionTypes.LOAD_DATA_SUCCESS, payload);

export const loadDataError = () => action(actionTypes.LOAD_DATA_ERROR);

export const startSearch = (payload: Company[]) =>
  action(actionTypes.ON_START_SEARCHING, payload);
