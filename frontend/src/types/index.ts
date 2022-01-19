import SPECIALTY from "./enum";

export type Company = {
  id: number;
  name: string;
  logo: string;
  speciality: SPECIALTY;
  city: string;
};
