import React from "react";
import { withRouter } from "react-router-dom";

function About(props) {
  return (
    <div><p>About component withRouter HOC! {JSON.stringify(props)}</p></div>
  );
}

export default withRouter(About);
