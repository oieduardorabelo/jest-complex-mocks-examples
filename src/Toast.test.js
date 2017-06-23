import React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Toast from "./Toast";

it("renders correctly", () => {
  const actual = toJson(render(<Toast updateCounter={() => {}} />));
  expect(actual).toMatchSnapshot();
});

it("should call updateCounter correctly", () => {
  const updateCounterSpy = jest.fn();
  const actual = mount(<Toast updateCounter={updateCounterSpy} />);
  actual.find("button").simulate("click");
  expect(updateCounterSpy).toHaveBeenCalledTimes(1);
});
