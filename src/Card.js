import React from "react";
import { FormattedMessage } from "react-intl";

function Card(props) {
  return (
    <div>
      <p>Hello Card!</p>
      <p>Card I18N: <FormattedMessage id="CURRENT_DAY" /></p>
      <button onClick={props.onClick}>Card Redux Action</button>
    </div>
  );
}

export default Card;
