import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { InputForm, Group } from "./Input.style";

describe("Input component", () => {
  it("should render with correct props", () => {
    const props = {
      label: "Name",
      type: "text",
      value: "John",
      onChange: jest.fn(),
      required: true,
      min: 0,
      max: 100,
    };

    const wrapper = shallow(<Input {...props} />);

    expect(wrapper.find(Group)).toHaveLength(1);
    expect(wrapper.find(InputForm)).toHaveLength(1);
    expect(wrapper.find("label").text()).toEqual("Name");
    expect(wrapper.find(InputForm).props().type).toEqual("text");
    expect(wrapper.find(InputForm).props().value).toEqual("John");
    expect(wrapper.find(InputForm).props().onChange).toEqual(props.onChange);
    expect(wrapper.find(InputForm).props().required).toEqual(true);
    expect(wrapper.find(InputForm).props().min).toEqual(0);
    expect(wrapper.find(InputForm).props().max).toEqual(100);
    expect(wrapper).toMatchSnapshot();
  });
});
