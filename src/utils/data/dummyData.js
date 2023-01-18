// import avatar from "../../assets/images/avatar.png";
const avatar_1 = "https://source.unsplash.com/random/profile";
const avatar_2 = "https://source.unsplash.com/random/yellow";
const avatar_3 = "https://source.unsplash.com/random/green";
const avatar_4 = "https://source.unsplash.com/random/blue";
const avatar_5 = "https://source.unsplash.com/random/red";
const avatar_6 = "https://source.unsplash.com/random/flower";
const avatar_7 = "https://source.unsplash.com/random/city";

const date = new Date();

export const euroRate = 4.98;

export const transfersArr = {
  path: "newtransfer",
};
export const loansArr = {
  path: "loansnested",
};

export const accounts = [
  {
    owner: "Alex Aandonesei",
    email: "alexaandonesei@email.com",
    image: avatar_1,
    pin: 1111,
    balance: "€ 12,345.67",
    validity: "09/26",
    cardNumber: "1413 8975 8374",
    plan: 1,
    phoneNumber: "+4071236556",
    address: "Aleea Minunilor 2, Bucuresti",
    savings: [
      { label: "Healthcare", amount: 50122, id: 123 },
      { label: "Investment", amount: 5012, id: 127 },
      { label: "Healthcare", amount: 50122, id: 123 },
      { label: "Investment", amount: 4232, id: 127 },
      { label: "Healthcare", amount: 50122, id: 123 },
      { label: "Investment", amount: 345, id: 127 },
      { label: "Healthcare", amount: 23434, id: 123 },
    ],
    transfers: [
      {
        type: 1,
        label: "exchange",
        from: "EUR",
        to: "RON",
        rate: 4.98,
        amount: 1000,
        date: date.toLocaleDateString(),
        id: 123435567,
      },
      {
        type: 1,
        label: "exchange",
        from: "RON",
        to: "EUR",
        rate: 4.98,
        amount: 300,
        date: date.toLocaleDateString(),
        id: 123435567,
      },
      {
        type: 1,
        label: "exchange",
        from: "EUR",
        to: "RON",
        rate: 4.98,
        amount: 100,
        date: date.toLocaleDateString(),
        id: 123435567,
      },
      {
        type: 1,
        label: "exchange",
        from: "RON",
        to: "EUR",
        rate: 4.98,
        amount: 10,
        date: date.toLocaleDateString(),
        id: 123435567,
      },
      {
        type: 1,
        label: "exchange",
        from: "EUR",
        to: "RON",
        rate: 4.98,
        amount: 1333,
        date: date.toLocaleDateString(),
        id: 123435567,
      },
      {
        type: 1,
        label: "exchange",
        from: "EUR",
        to: "RON",
        rate: 4.98,
        amount: 100,
        date: date.toLocaleDateString(),
        id: 123435567,
      },
      {
        type: 1,
        label: "exchange",
        from: "RON",
        to: "EUR",
        rate: 4.98,
        amount: 10,
        date: date.toLocaleDateString(),
        id: 123435567,
      },
      {
        type: 1,
        label: "exchange",
        from: "EUR",
        to: "RON",
        rate: 4.98,
        amount: 1333,
        date: date.toLocaleDateString(),
        id: 123435567,
      },
    ],
  },
  {
    owner: "Radu Stan",
    email: "radu@email.com",
    image: avatar_2,
    pin: 3333,
    balance: "$ 2,334.71",
    validity: "04/26",
    cardNumber: "6534 2657 8787",
    plan: 2,
    phoneNumber: "+4071236556",
    address: "Aleea Minunilor 2, Bucuresti",
  },
  {
    owner: "Ionut Iosipescu",
    email: "ionut@email.com",
    image: avatar_3,
    pin: 2222,
    balance: "$ 345.67",
    validity: "09/25",
    cardNumber: "9327 6547 9823",
    plan: 3,
    phoneNumber: "+4071236556",
    address: "Aleea Minunilor 2, Bucuresti",
  },
  {
    owner: "Andrei Iulian",
    email: "andrei@email.com",
    image: avatar_4,
    pin: 2222,
    balance: "$ 345.67",
    validity: "09/25",
    cardNumber: "9327 6547 9823",
    plan: 3,
    phoneNumber: "+4071236556",
    address: "Aleea Minunilor 2, Bucuresti",
  },
  {
    owner: "Mihai Popovici",
    email: "mihai@email.com",
    image: avatar_5,
    pin: 2222,
    balance: "$ 345.67",
    validity: "09/25",
    cardNumber: "9327 6547 9823",
    plan: 3,
    phoneNumber: "+4071236556",
    address: "Aleea Minunilor 2, Bucuresti",
  },
  {
    owner: "Alexandra Cosmina",
    email: "alexandra@email.com",
    image: avatar_6,
    pin: 2222,
    balance: "$ 345.67",
    validity: "09/25",
    cardNumber: "9327 6547 9823",
    plan: 3,
    phoneNumber: "+4071236556",
    address: "Aleea Minunilor 2, Bucuresti",
  },
  {
    owner: "Iulia Adriana",
    email: "alexandra@email.com",
    image: avatar_7,
    pin: 2222,
    balance: "$ 345.67",
    validity: "09/25",
    cardNumber: "9327 6547 9823",
    plan: 3,
    phoneNumber: "+4071236556",
    address: "Aleea Minunilor 2, Bucuresti",
  },
  {
    owner: "Ecaterina Mercedesa",
    email: "alexandra@email.com",
    image: avatar_1,
    pin: 2222,
    balance: "$ 345.67",
    validity: "09/25",
    cardNumber: "9327 6547 9823",
    plan: 3,
    phoneNumber: "+4071236556",
    address: "Aleea Minunilor 2, Bucuresti",
  },
];

export const plans = [
  {
    plan: 1,
    name: "Standard",
    cardLimit: "100,000",
    loanLimit: "50,000",
  },
  {
    plan: 2,
    name: "Gold",
    cardLimit: 1500000,
  },
  {
    plan: 3,
    name: "Platinum",
    cardLimit: "unlimited",
  },
];

export const chartData = [
  { id: 1, month: 1, income: 312, outcome: 132 },
  { id: 2, month: 2, income: 432, outcome: 212 },
  { id: 3, month: 3, income: 423, outcome: 123 },
  { id: 4, month: 4, income: 543, outcome: 131 },
  { id: 5, month: 5, income: 232, outcome: 231 },
  { id: 6, month: 6, income: 243, outcome: 312 },
  { id: 7, month: 7, income: 423, outcome: 321 },
  { id: 8, month: 8, income: 534, outcome: 198 },
  { id: 9, month: 9, income: 243, outcome: 132 },
  { id: 10, month: 10, income: 332, outcome: 15 },
  { id: 11, month: 11, income: 423, outcome: 165 },
  { id: 12, month: 12, income: 321, outcome: 276 },
];

export const dailyBalanceData = [
  { id: 1, day: "Mon", thisWeek: 9312, lastWeek: 17132 },
  { id: 2, day: "Tue", thisWeek: 8912, lastWeek: 11132 },
  { id: 3, day: "Wed", thisWeek: 5312, lastWeek: 15132 },
  { id: 4, day: "Thu", thisWeek: 12912, lastWeek: 10132 },
  { id: 5, day: "Fri", thisWeek: 7812, lastWeek: 2932 },
  { id: 6, day: "Sat", thisWeek: 18395, lastWeek: 9732 },
  { id: 7, day: "Sun", thisWeek: 12346, lastWeek: 13432 },
];

const outcomeDataRaw = [
  { id: 1, item: "Needs", amount: 5312, color: "#6160dc" },
  { id: 2, item: "Groceries", amount: 1912, color: "#54c5eb" },
  { id: 3, item: "Subcribtions", amount: 610, color: "#ffb74a" },
  { id: 4, item: "Tax", amount: 2912, color: "#00a389" },
  { id: 5, item: "Utils", amount: 812, color: "#ff4a55" },
];

function calculatePercentages(objects) {
  // Calculate the sum of all the amount properties
  const sum = objects.reduce((acc, obj) => acc + obj.amount, 0);

  // Map the objects array to an array of objects with the percentage property
  const withPercentages = objects.map((obj) => {
    const percentage = Math.ceil((obj.amount / sum) * 100);
    return { ...obj, percentage };
  });

  return withPercentages;
}

export const outcomeData = calculatePercentages(outcomeDataRaw);
