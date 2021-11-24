// IMPORT CSS FILE
import "./ImageList.css";

// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import ImageCard from "../ImageCard";

// 3. CREATE A FUNCTION BASED COMPONENT
const ImageList = (props) => {
  const listOfImages = props.images.map((element) => {
    return <ImageCard key={element.id} element={element} />;
  });
  return <div className="image-list">{listOfImages}</div>;
};

// 4. EXPORT THAT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default ImageList;
