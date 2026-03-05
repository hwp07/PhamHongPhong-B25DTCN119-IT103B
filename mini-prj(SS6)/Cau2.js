let prices = [100, 200, 300, 400];

for (let price of prices) {
  console.log(price);
}

for (let index in prices) {
  console.log(index);
}

let sumIndex = 0;
for (let i = 0; i < prices.length; i++) {
  if (i % 2 === 0) {
    sumIndex += prices[i];
  }
}

console.log(sumIndex);
