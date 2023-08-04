const exchangeRateMap = {
  CNY: 100,
  JPY: 100 / 18.25,
  HKD: 100 / 1.23,
  EUR: 100 / 0.14,
  GBP: 100 / 0.12,
  cents: 1 / 1.23,
  sen: 1 / 18.25,
  eurocents: 1 / 0.14,
  pence: 1 / 0.12,
  fen: 1,
};

const reg1 = /([0-9,\.]+[a-zA-Z]+)/g;
const reg2 = /^([0-9,\.]+)([a-zA-Z]+)$/;

const f = inputs => {
  const fens = inputs.flatMap(input => {
    const parts = input.match(reg1);
    return parts.map(part => {
      const [, amountStr, unit] = part.match(reg2);
      const amount = parseFloat(amountStr);
      return amount * exchangeRateMap[unit];
    });
  });
  return Math.floor(fens.reduce((acc, current) => acc + current, 0));
};

console.log(f(["1CNY", "20CNY53fen", "53HKD87cents"]));
