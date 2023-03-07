import React from "react";
import { shallow } from "enzyme";
import Button from "./Button.component";

describe("Button component", () => {
  const mockProps = {
    size: "md",
    typeclass: "primary",
    onClick: jest.fn(),
  };

  it("should render correctly", () => {
    const wrapper = shallow(<Button {...mockProps}>Click me</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with correct props", () => {
    const wrapper = shallow(<Button {...mockProps}>Click me</Button>);
    expect(wrapper.find("button").props().className).toContain("btn-md");
    expect(wrapper.find("button").props().className).toContain("btn-primary");
    expect(wrapper.find("button").props().onClick).toEqual(mockProps.onClick);
  });

  it("should render children", () => {
    const wrapper = shallow(<Button {...mockProps}>Click me</Button>);
    expect(wrapper.find("button").text()).toEqual("Click me");
  });
});
