import React, { Fragment } from "react";
import "./App.css";
import ListIngredients from "./components/ListIngredients";

function App() {
  return (
    <Fragment>
      <div className="container mt-5 w-25">
      <ListIngredients />
      </div>
      
    </Fragment>
  );
}

export default App;
