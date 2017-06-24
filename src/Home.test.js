import React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Home from "./Home";

it("renders correctly", () => {
  const actual = toJson(render(<Home />));
  expect(actual).toMatchSnapshot();
});
