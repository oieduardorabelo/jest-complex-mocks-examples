import React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Card from "./Card";

it("renders correctly", () => {
  const actual = toJson(render(<Card />));
  expect(actual).toMatchSnapshot();
});

it("should call spy on click", () => {
  const onClickSpy = jest.fn();
  const actual = mount(<Card onClick={onClickSpy} />);
  actual.find("button").simulate("click");
  expect(onClickSpy).toHaveBeenCalledTimes(1);
});
