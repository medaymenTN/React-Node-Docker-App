import {
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
} from "@mui/material";
import React from "react";
import SearchField from "../../components/serachField/searchField";
import "./styles.css";

const SearchFilter = () => {
  return (
    <Card className="SearchMainContainer">
      <SearchField />
      <div className="ChecboxContainer">
        <Grid
          justifyContent="center"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <FormControlLabel
              control={<Checkbox checked name="gilad" />}
              label="Excavation"
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <FormControlLabel
              control={<Checkbox checked name="gilad" />}
              label="Plumbing"
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <FormControlLabel
              control={<Checkbox checked name="gilad" />}
              label="Electricity"
            />
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

export default SearchFilter;
