import React from "react";
import { mount } from "enzyme";
import Button from "./Button";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
  let wrapper;

  const mockClick = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <Button
        label="Test Button"
        handleClick={mockClick}
        size="md"
        primary="primary"
        data-test-id="test-button"
      />
    );
  });

  it("renders label text correctly", () => {
    expect(wrapper.find('[data-test-id="test-button"]').text()).toEqual(
      "Test Button"
    );
  });

  it("calls handleClick on button click", () => {
    wrapper.find('[data-test-id="test-button"]').simulate("click");
    expect(mockClick).toHaveBeenCalled();
  });

  it("applies size prop correctly", () => {
    expect(wrapper.find('[data-test-id="test-button"]').prop("size")).toEqual(
      "md"
    );
  });

  it("applies primary prop correctly", () => {
    expect(
      wrapper.find('[data-test-id="test-button"]').prop("primary")
    ).toEqual("primary");
  });

  it("passes through other props", () => {
    expect(
      wrapper.find('[data-test-id="test-button"]').prop("data-test-id")
    ).toEqual("test-button");
  });
});
