import BalanceCard from "./BalanceCard";

export default {
  tittle: "Components/BalanceCard",
  component: BalanceCard,
};

const Template = (args) => <BalanceCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "purple",
  size: "sm",
  balance: "12,456.78",
  cardNum: "0123 4567 8910",
  name: "Alexandru Aandonesei",
  valid: "08/26",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "green",
  size: "sm",
  balance: "12,456.78",
  cardNum: "0123 4567 8910",
  name: "Alexandru Aandonesei",
  valid: "08/26",
};
