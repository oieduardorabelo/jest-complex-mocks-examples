import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { IntlProvider } from "react-intl";

import Card from "./Card";
import Toast from "./Toast";

const initialStore = {
  counter: 0
};

function rootReducer(state = initialStore, action = {}) {
  switch (action.type) {
    case "UPDATE_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

const translations = {
  CURRENT_DAY: "Today"
};

function App() {
  return (
    <IntlProvider locale="en" messages={translations}>
      <Provider store={store}>
        <div>
          <h1> Hello World! </h1>
          <Card />
          <Toast />
        </div>
      </Provider>
    </IntlProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
