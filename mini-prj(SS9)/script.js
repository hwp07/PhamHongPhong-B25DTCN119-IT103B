let orders = [
  "Đơn  hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hàng D",
  "Đơn hàng E",
];
let revenues = [1500, 2800, 1200, -500, 3200];

orderReports.map((orders, index) => {
  return console.log(`${orders} mang về ${revenues[i]} USD`);
});

let check = revenues.filter((value) => value > 0);
let total = check.reduce((acc, value) => {
  acc += value;
  return acc;
}, 0);
console.log(`Tổng doanh thu: ${total}`);
