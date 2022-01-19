import { Card, Checkbox, FormControlLabel, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchField from "../../components/serachField/searchField";
import {
  loadCompanies,
  searchCompany,
} from "../../store/companyStore/action.async";
import { AppDispatch } from "../../store/store";
import SPECIALTY from "../../types/enum";
import "./styles.css";
import { removeElementFromCheckedSpecialities } from "./utils";

const SearchFilter = () => {
  const [excavationCheckBoxChecked, setExcavationCheckBoxChecked] =
    useState<boolean>(false);
  const [plumbingCheckBoxChecked, setPlumbingCheckBoxChecked] =
    useState<boolean>(false);
  const [electricityCheckBoxChecked, setElectricityCheckBoxChecked] =
    useState<boolean>(false);
  const [checkedSpecialities, setCheckedSpecialities] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleExcavationCheckBoxCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (!checked) {
      const updatedList = removeElementFromCheckedSpecialities(
        checkedSpecialities,
        SPECIALTY.EXCAVATION
      );
      setCheckedSpecialities(updatedList);
    } else {
      setCheckedSpecialities([...checkedSpecialities, SPECIALTY.EXCAVATION]);
    }

    setExcavationCheckBoxChecked(checked);
  };
  const handlePlumbingCheckBoxCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (!checked) {
      const updatedList = removeElementFromCheckedSpecialities(
        checkedSpecialities,
        SPECIALTY.PLUMBING
      );
      setCheckedSpecialities(updatedList);
    } else {
      setCheckedSpecialities([...checkedSpecialities, SPECIALTY.PLUMBING]);
    }
    setPlumbingCheckBoxChecked(checked);
  };
  const handleElectricityCheckBoxCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (!checked) {
      const updatedList = removeElementFromCheckedSpecialities(
        checkedSpecialities,
        SPECIALTY.ELECTRICITY
      );
      setCheckedSpecialities(updatedList);
    } else {
      setCheckedSpecialities([...checkedSpecialities, SPECIALTY.ELECTRICITY]);
    }
    setElectricityCheckBoxChecked(checked);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (checkedSpecialities.length === 0 && searchText.length === 0) {
      dispatch(loadCompanies());
    } else {
      dispatch(searchCompany(searchText, checkedSpecialities));
    }
  }, [checkedSpecialities, searchText]);

  return (
    <Card className="SearchMainContainer">
      <SearchField onTextChange={handleOnChange} />
      <div className="ChecboxContainer">
        <Grid
          justifyContent="center"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={excavationCheckBoxChecked}
                  name="excavation"
                  onChange={handleExcavationCheckBoxCheck}
                  value="Excavation"
                />
              }
              label="Excavation"
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={plumbingCheckBoxChecked}
                  name="plumbing"
                  value="plumbing"
                  onChange={handlePlumbingCheckBoxCheck}
                />
              }
              label="Plumbing"
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={electricityCheckBoxChecked}
                  name="electricity"
                  value="electricity"
                  onChange={handleElectricityCheckBoxCheck}
                />
              }
              label="Electricity"
            />
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

export default SearchFilter;
