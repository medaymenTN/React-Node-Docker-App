import { ActionType } from "typesafe-actions";
import * as actions from "./data.action.creators";

type Company = {
  id: number;
  name: string;
  logo: string;
  speciality: SPECIALTY;
  city: string;
};

type ICompanyState = {
  companies: Company[];
  loading: boolean;
};

type IDataActionType = ActionType<typeof actions>;

export { IDataActionType, ICompanyState };
