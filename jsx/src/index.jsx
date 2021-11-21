// 1. IMPORT REACT
import React from "react";

// 2. IMPORT REACTDOM
import ReactDOM from "react-dom";

// 3. ADDITIONAL IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";

// 4. AUTO RELOAD
if (module.hot) {
  module.hot.accept();
}

// 5. RENDER COMPONENT TO THE SCREEN
ReactDOM.render(<App />, document.querySelector("#root"));
