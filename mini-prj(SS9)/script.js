let orders = [
  "Đơn hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hàng D",
  "Đơn hàng E",
];
let revenues = [1500, 2800, 1200, -500, 3200];

let orderReports = orders.map((order, index) => {
  return `${order} mang về ${revenues[index]} USD`;
});
orderReports.forEach((report) => console.log(report));

let check = revenues
  .filter((value) => value > 0)
  .reduce((acc, value) => acc + value, 0);
console.log(`Tổng doanh thu: ${check}`);
