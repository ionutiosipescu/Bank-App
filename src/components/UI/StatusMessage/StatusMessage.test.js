import React from "react";
import { shallow } from "enzyme";
import StatusMessage from "./StatusMessage";
import { MessageContainer } from "./StatusMessage.style";

describe("StatusMessage component", () => {
  it("should render with correct props", () => {
    const props = {
      type: "success",
      text: "Test message",
      size: "full",
      handleShow: jest.fn(),
      show: true,
    };

    const wrapper = shallow(<StatusMessage {...props} />);

    expect(wrapper.find(MessageContainer).props().type).toEqual(props.type);
    expect(wrapper.find(MessageContainer).props().size).toEqual(props.size);
    expect(wrapper.find("h3").text()).toEqual("Test message");
    expect(wrapper).toMatchSnapshot();
  });
});
