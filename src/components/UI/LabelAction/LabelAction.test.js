import React from "react";
import { shallow, mount, render } from "enzyme";
import LabelAction from "./LabelAction";

describe("LabelAction component", () => {
  it("should render correctly with status prop", () => {
    const wrapper = shallow(
      <LabelAction action="Deposit">Test label</LabelAction>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly without status prop", () => {
    const wrapper = shallow(<LabelAction>Test label</LabelAction>);
    expect(wrapper).toMatchSnapshot();
  });
});
