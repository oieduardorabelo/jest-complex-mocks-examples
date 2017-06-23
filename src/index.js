import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";

function App() {
  return (
    <div>
      <h1> Hello World! </h1>
      <Card />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
