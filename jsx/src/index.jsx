// 1. IMPORT REACT
import React from "react";

// 2. IMPORT REACTDOM
import ReactDOM from "react-dom";

// 3. ADDITIONAL IMPORTS

// 4. AUTO RELOAD
if (module.hot) {
  console.log("Module is hot");
  module.hot.accept();
}

// 5. RENDER COMPONENT TO THE SCREEN
ReactDOM.render(<App />, document.querySelector("#root"));
