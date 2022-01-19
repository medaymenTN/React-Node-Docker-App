import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyCardItem from "../../components/common/CompanyCardItem/CompanyCardItem";
import ContentPlaceHolder from "../../components/common/ContentPlaceHolder";
import PlaceholderContent from "../../components/placeholderContent/placeholderContent";
import { loadCompanies } from "../../store/companyStore/action.async";
import { ICompanyState } from "../../store/companyStore/types";
import { AppDispatch } from "../../store/store";
import RootState from "../../store/types";
import { Company } from "../../types";
import "./styles.css";

const CompaniesList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const companyStoreState = useSelector<RootState, ICompanyState>(
    (state) => state.company
  );

  const { companies, loading } = companyStoreState;

  useEffect(() => {
    dispatch(loadCompanies());
  }, []);

  return (
    <div className="CompaniesListContainer">
      {loading ? (
        <PlaceholderContent />
      ) : (
        <Grid
          justifyContent="center"
          container
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {companies?.map((company: Company, index: number) => (
            <Grid item className="grid-item" xs={2} sm={4} md={4}>
              <CompanyCardItem company={company} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CompaniesList;
