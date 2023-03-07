import React from "react";
import { shallow } from "enzyme";
import LabelList from "./LabelList";

describe("LabelList component", () => {
  it("should render correctly with status prop", () => {
    const wrapper = shallow(
      <LabelList status="Completed">Test label</LabelList>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly without status prop", () => {
    const wrapper = shallow(<LabelList>Test label</LabelList>);
    expect(wrapper).toMatchSnapshot();
  });
});
