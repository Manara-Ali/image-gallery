// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE A CLASS BASED COMPONENT
class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.element.urls.regular}
          alt={this.props.element.description}
        />
      </div>
    );
  }
}

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default ImageCard;
