import {
  BsArrowBarDown,
  BsArrowLeftRight,
  BsCash,
  BsCoin,
  BsCurrencyExchange,
} from "react-icons/bs";

const iconSize = 20;

export const services = [
  { label: "Savings", path: "savings", icon: <BsCash size={iconSize} /> },
  {
    label: "Exchange",
    path: "exchange",
    icon: <BsCurrencyExchange size={iconSize} />,
  },
  {
    label: "Transfers",
    path: "transfers",
    icon: <BsArrowLeftRight size={iconSize} />,
  },
  {
    label: "Deposits",
    path: "deposit",
    icon: <BsArrowBarDown size={iconSize} />,
  },
  { label: "Loans", path: "loan", icon: <BsCoin size={iconSize} /> },
];
