import { ThunkDispatch, ThunkAction } from "redux-thunk";

import { AnyAction } from "redux";

import {
  loadDataSuccess,
  loadDataPending,
  loadDataError,
  startSearch,
} from "./action.creators";
import { API } from "../../http/apiConfig";
import { AxiosResponse } from "axios";
import RootState from "../types";
import { Company } from "../../types";

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

export const searchCompany = (
  currentText: string,
  checkedSpecialities: string[]
): ThunkAction<void, RootState, {}, AnyAction> => {
  return (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => RootState
  ) => {
    const currentCompanies = getState().company.cachedData;
    const array1 = currentCompanies.filter((company: Company) =>
      checkedSpecialities.some(
        (currentSpeciality) => company?.speciality === currentSpeciality
      )
    );
    const array2 = currentCompanies.filter((company: Company) =>
      company?.name.toLowerCase().includes(currentText.toLocaleLowerCase())
    );
    const filteredArray = array1.filter((value) =>
      array2.some((value2) => value.id === value2.id)
    );
    if (array1.length > 0 && array2.length === 0) {
      dispatch(startSearch(array1));
    } else if (array2.length > 0 && array1.length === 0) {
      dispatch(startSearch(array2));
    } else {
      dispatch(startSearch(filteredArray));
    }
  };
};
