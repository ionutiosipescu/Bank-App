import React from "react";
import { shallow, mount, render } from "enzyme";
import LinkButton from "./LinkButton";

it("expect to render LinkButton component", () => {
  expect(shallow(<LinkButton />)).toMatchSnapshot();
});
