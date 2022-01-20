import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyCardItem from "../../components/common/CompanyCardItem/CompanyCardItem";
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
        <PlaceholderContent data-testid="placeholderContent" />
      ) : (
        <Grid
          justifyContent="center"
          container
          spacing={2}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {companies?.map((company: Company, index: number) => (
            <Grid
              key={`${index}-company-item`}
              item
              className="grid-item"
              xs={1}
              sm={4}
              md={4}
            >
              <CompanyCardItem company={company} />
            </Grid>
          ))}
          {companies.length === 0 && (
            <Typography data-testid="no-result-message">
              There are no results that match your search
            </Typography>
          )}
        </Grid>
      )}
    </div>
  );
};

export default CompaniesList;
