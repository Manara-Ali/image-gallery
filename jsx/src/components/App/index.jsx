// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import SearchBar from "../SearchBar";

// 3. CREATE FUNCTION BASED COMPONENT
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar />
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
