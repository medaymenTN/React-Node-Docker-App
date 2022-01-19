import SPECIALTY from "../../types/enum";

export const removeElementFromCheckedSpecialities = (
  companies: string[],
  speciality: SPECIALTY
): string[] => {
  return companies.filter((element) => element !== speciality);
};
