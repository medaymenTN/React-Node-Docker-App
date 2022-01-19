import { Box, Input } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";

interface SearchFilterProps {
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = (props: SearchFilterProps) => {
  const { onTextChange } = props;
  return (
    <Box className="SearchContainer">
      <SearchIcon />
      <Input
        onChange={onTextChange}
        className="SearchInput"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

export default SearchField;
