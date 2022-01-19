import { Grid } from "@mui/material";
import React from "react";
import ContentPlaceHolder from "../common/ContentPlaceHolder";

const PlaceholderContent = () => (
  <Grid
    justifyContent="center"
    container
    spacing={2}
    columns={{ xs: 4, sm: 8, md: 12 }}
  >
    <Grid item className="grid-item" xs={2} sm={4} md={4}>
      <ContentPlaceHolder />
    </Grid>
    <Grid item className="grid-item" xs={2} sm={4} md={4}>
      <ContentPlaceHolder />
    </Grid>
    <Grid item className="grid-item" xs={2} sm={4} md={4}>
      <ContentPlaceHolder />
    </Grid>
    <Grid item className="grid-item" xs={2} sm={4} md={4}>
      <ContentPlaceHolder />
    </Grid>
    <Grid item className="grid-item" xs={2} sm={4} md={4}>
      <ContentPlaceHolder />
    </Grid>
    <Grid item className="grid-item" xs={2} sm={4} md={4}>
      <ContentPlaceHolder />
    </Grid>
  </Grid>
);

export default PlaceholderContent;
