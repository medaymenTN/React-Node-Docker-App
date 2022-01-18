import { Box, Input } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";

const SearchField = () => {
  return (
    <Box className="SearchContainer">
      <SearchIcon />
      <Input
        className="SearchInput"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

export default SearchField;
