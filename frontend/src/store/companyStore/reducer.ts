import actionTypes from "./action.enum";
import { IDataActionType, ICompanyState } from "./types";

const AppState: ICompanyState = {
  cachedData: [],
  companies: [],
  loading: false,
};

const companyReducer = (state = AppState, action: IDataActionType) => {
  switch (action.type) {
    case actionTypes.LOAD_DATA:
      return { ...state, loading: true };
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        cachedData: action.payload,
        companies: action.payload,
      };
    case actionTypes.LOAD_DATA_ERROR:
      return { ...state, loading: false };
    case actionTypes.ON_START_SEARCHING:
      return { ...state, companies: action.payload };
    default:
      return state;
  }
};
export default companyReducer;
