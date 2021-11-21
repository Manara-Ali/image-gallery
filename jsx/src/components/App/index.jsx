// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import SearchBar from "../SearchBar";

// 3. CREATE FUNCTION BASED COMPONENT
class App extends React.Component {
  // Create a method to retrieve user search term
  handleOnSubmit = (term) => {
    console.log(term);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onFormSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
