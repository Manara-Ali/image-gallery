// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE A FUNCTION BASED COMPONENT
const ImageList = (props) => {
  const listOfImages = props.images.map((element) => {
    return (
      <img
        key={element.id}
        src={element.urls.regular}
        alt={element.description}
      />
    );
  });
  return <div>{listOfImages}</div>;
};

// 4. EXPORT THAT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default ImageList;
