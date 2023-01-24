import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click me",
  primary: "primary",
  size: "sm",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Click me",
  primary: "secondary",
  size: "sm",
};
