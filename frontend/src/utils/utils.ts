import SPECIALTY from "../types/enum";
export const getCompanySpeciality = (specialityIdentifier: number) => {
  switch (specialityIdentifier) {
    case SPECIALTY.EXCAVATION:
      return "Excavation";
    case SPECIALTY.PLUMBING:
      return "Plumbing";
    case SPECIALTY.ELECTRICITY:
      return "Electricity";
    default:
      return "Excavation";
  }
};
