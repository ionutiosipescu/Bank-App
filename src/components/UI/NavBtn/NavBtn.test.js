import React from "react";
import { shallow, mount, render } from "enzyme";
import NavBtn from "./NavBtn";

it("expect to render NavBtn component", () => {
  expect(shallow(<NavBtn />)).toMatchSnapshot();
});
