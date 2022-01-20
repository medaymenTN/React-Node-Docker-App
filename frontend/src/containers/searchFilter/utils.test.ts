import SPECIALTY from "../../types/enum";
import { removeElementFromCheckedSpecialities } from "./utils";

describe("removeElementFromCheckedSpecialities", () => {
  it("should remove item from given list", () => {
    const companies = ["Electricity", "Plumbing", "Excavation"];
    const result = removeElementFromCheckedSpecialities(
      companies,
      SPECIALTY.ELECTRICITY
    );
    expect(result).toEqual(["Plumbing", "Excavation"]);
  });
});
