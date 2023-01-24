import TopCard from "./TopCard";

export default {
  tittle: "Components/TopCard",
  component: TopCard,
};

const Template = (args) => <TopCard {...args} />;

export const Income = Template.bind({});
Income.args = {
  label: "Income",
  size: "sm",
  amount: "6,345.23",
  percent: "-1.2",
  primary: "primary",
};

export const Outcome = Template.bind({});
Outcome.args = {
  label: "Outcome",
  size: "sm",
  amount: "1,543.67",
  percent: "+2.8",
  primary: "secondary",
};
