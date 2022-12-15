import { BsHouseDoor } from "react-icons/bs";
import NavBtn from "./NavBtn";

export default {
  title: "Components/NavBtn",
  component: NavBtn,
};

const Template = (args) => <NavBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Home",
  children: <BsHouseDoor size={22} />,
};
