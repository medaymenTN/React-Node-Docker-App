import { ActionType } from "typesafe-actions";
import { Company } from "../../types";
import * as actions from "./data.action.creators";

type ICompanyState = {
  companies: Company[];
  cachedData: Company[];
  loading: boolean;
};

type IDataActionType = ActionType<typeof actions>;

export { IDataActionType, ICompanyState };
