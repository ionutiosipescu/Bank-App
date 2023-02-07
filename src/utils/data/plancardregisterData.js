export const options = [
  {
    key: "standard",
    value: "standard",
    price: "0",
    planName: "STANDARD",
    currency: "ron",
    details: [
      { nr: "", name: "Basic banking services" },
      { nr: "", name: "No annual fee" },
      { nr: "", name: "No minimum balance" },
      { nr: "$1,000", name: "Debit card limit" },
    ],
  },
  {
    key: "premium",
    value: "premium",
    price: "89",
    planName: "PREMIUM",
    currency: "ron",
    details: [
      { nr: "", name: "Wider banking services" },
      { nr: "", name: "No foreign transaction fee" },
      { nr: "24/7", name: "Concierge service" },
      { nr: "$10,000", name: "Credit card limit" },
    ],
  },
  {
    key: "vip",
    value: "vip",
    price: "199",
    planName: "VIP",
    currency: "ron",
    details: [
      { nr: "", name: "Exclusive benefits" },
      { nr: "", name: "Priority customer service" },
      { nr: "", name: "VIP lounges, events access." },
      { nr: "$50,000", name: "Credit card limit" },
    ],
  },
];
