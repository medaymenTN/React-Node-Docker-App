import { ThunkDispatch, ThunkAction } from "redux-thunk";

import { AnyAction } from "redux";

import {
  loadDataSuccess,
  loadDataPending,
  loadDataError,
} from "./action.creators";
import { API } from "../../http/apiConfig";
import { AxiosResponse } from "axios";

export const loadCompanies = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(loadDataPending());
    try {
      const response: AxiosResponse = await API.get("companies");
      if (response) {
        dispatch(loadDataSuccess(response.data));
      }
    } catch (error) {
      dispatch(loadDataError());
    }
  };
};
