import React from "react";
import CompaniesList from "./containers/companiesList/companiesList";
import SearchFilter from "./containers/searchFilter/searchFilter";

function App() {
  return (
    <div className="App">
      <SearchFilter />
      <CompaniesList />
    </div>
  );
}

export default App;
