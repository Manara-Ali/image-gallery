// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import unsplashAPI from "../api/unsplash";
import SearchBar from "../SearchBar";
import ImageList from "../ImageList";

// 3. CREATE FUNCTION BASED COMPONENT
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  // Create a method to retrieve user search term
  handleOnSubmit = async (term) => {
    const response = await unsplashAPI.get("/search/photos", {
      params: {
        query: `${term}`,
      },
    });

    // Set the response into state
    this.setState({
      images: response.data.results,
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onFormSubmit={this.handleOnSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
