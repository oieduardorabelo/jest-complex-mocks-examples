import React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";

import About from "./About";

it("renders correctly", () => {
  const actual = toJson(render(<About.WrappedComponent />));
  expect(actual).toMatchSnapshot();
});
