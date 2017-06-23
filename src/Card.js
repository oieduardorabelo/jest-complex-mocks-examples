import React from "react";
import { FormattedMessage } from "react-intl";

function Card(props) {
  return (
    <div>
      <p>Hello Card!</p>
      <p>I18N: <FormattedMessage id="CURRENT_DAY" /></p>
      <button onClick={props.onClick}>Testing</button>
    </div>
  );
}

export default Card;
