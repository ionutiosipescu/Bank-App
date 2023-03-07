import React from "react";
import { shallow, mount, render } from "enzyme";
import TermsAndCondition from "./TermsAndCondition";

it("expect to render TermsAndCondition component", () => {
  expect(shallow(<TermsAndCondition />)).toMatchSnapshot();
});
