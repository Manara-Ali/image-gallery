// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import ImageCard from "../ImageCard";

// 3. CREATE A FUNCTION BASED COMPONENT
const ImageList = (props) => {
  const listOfImages = props.images.map((element) => {
    return (
      <div key={element.id}>
        <ImageCard element={element} />
      </div>
    );
  });
  return <div>{listOfImages}</div>;
};

// 4. EXPORT THAT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default ImageList;
