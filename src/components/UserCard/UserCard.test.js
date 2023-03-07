import React from "react";
import { shallow, mount, render } from "enzyme";
import UserCard from "./UserCard";

it("expect to render UserCard component", () => {
  expect(shallow(<UserCard />)).toMatchSnapshot();
});
