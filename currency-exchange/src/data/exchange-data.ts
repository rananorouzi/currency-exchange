type rateType = {
  [key: string]: {
    [key: string]: number;
  };
};

const rateSymbols = [
  { text: "Rial", value: "rial" },
  { text: "Dollar", value: "dollar" },
  { text: "Euro", value: "dollar" }
];
const exchangeRate: rateType = {
  rial: {
    dollar: 0.006,
    euro: 0.005,
  },
  dollar: {
    rial: 10.566015,
    euro: 0.9,
  },
  euro: {
    rial: 11.566015,
    dollar: 1.560132,
  },
};

export { rateSymbols, exchangeRate };
