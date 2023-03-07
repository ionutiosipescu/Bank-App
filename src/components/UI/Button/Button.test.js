import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders with label prop", () => {
    const label = "Click me";
    const wrapper = shallow(<Button label={label} />);
    expect(wrapper.find(`[id="button-global"]`).text()).toEqual(label);
  });

  it("calls handleClick prop on click", () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Button handleClick={handleClick} />);
    wrapper.find(`[id="button-global"]`).simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const wrapper = shallow(
      <Button label="Click me" size="sm" primary="primary" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
