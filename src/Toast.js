import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { injectIntl, intlShape } from "react-intl";

function Toast(props) {
  return (
    <div>
      <p>Hello Toast!</p>
      <p>Hello I18N: {props.intl.formatMessage({ id: "CURRENT_DAY" })}</p>
      <b>Total: {props.counter}</b>
      <button onClick={props.updateCounter}>Update!</button>
    </div>
  );
}

Toast.propTypes = {
  int: intlShape,
  updateCounter: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCounter: function updateCounter() {
      dispatch({ type: "UPDATE_COUNTER" });
    }
  };
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Toast));
