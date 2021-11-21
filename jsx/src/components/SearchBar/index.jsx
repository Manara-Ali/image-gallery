// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE A CLASS BASED COMPONENT
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
    };
  }

  // Create a method to accept user input
  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Search a Picture
            </label>
            <input
              onChange={this.handleInputChange}
              value={this.state.userInput}
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default SearchBar;
