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
    const filtedElementsBySpeciality = currentCompanies.filter(
      (company: Company) =>
        checkedSpecialities.some(
          (currentSpeciality) => company?.speciality === currentSpeciality
        )
    );
    const filtredElementsByTypedText = currentCompanies.filter(
      (company: Company) =>
        company?.name.toLowerCase().includes(currentText.toLocaleLowerCase())
    );
    const filteredArray = filtedElementsBySpeciality.filter((checkedValue) =>
      filtredElementsByTypedText.some(
        (typedValue) => checkedValue.id === typedValue.id
      )
    );
    if (
      filtedElementsBySpeciality.length > 0 &&
      filtredElementsByTypedText.length === 0
    ) {
      dispatch(startSearch(filtedElementsBySpeciality));
    } else if (
      filtredElementsByTypedText.length > 0 &&
      filtedElementsBySpeciality.length === 0
    ) {
      dispatch(startSearch(filtredElementsByTypedText));
    } else {
      dispatch(startSearch(filteredArray));
    }
  };
};
