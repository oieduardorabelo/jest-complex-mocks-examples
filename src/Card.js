import React from "react";

function Card(props) {
  return (
    <div>
      <p>Hello Card!</p>
      <button onClick={props.onClick}>Testing</button>
    </div>
  );
}

export default Card;
