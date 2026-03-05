<<<<<<< HEAD
let products = [
  {
    id: "P01",
    name: "Laptop Macbook Pro M3",
    price: 2000,
    category: "Laptop",
    inStock: true,
  },
  {
    id: "P02",
    name: "Chuột không dây Logitech",
    price: 45,
    category: "Phụ kiện",
    inStock: true,
  },
  {
    id: "P03",
    name: "Bàn phím cơ Keychron",
    price: 95,
    category: "Phụ kiện",
    inStock: false,
  },
  {
    id: "P04",
    name: "Màn hình Dell UltraSharp",
    price: 450,
    category: "Màn hình",
    inStock: true,
  },
  {
    id: "P05",
    name: "Tai nghe Sony WH-1000XM5",
    price: 350,
    category: "Phụ kiện",
    inStock: true,
  },
];

const list = () => {
  let check = products
    .filter((value) => value.inStock === true)
    .sort((a, b) => b.price - a.price)
    .map(
      (value) =>
        `${value.id} - ${value.name} - ${value.price} - ${value.category} - ${value.inStock}`,
    )
    .join("\n");
  console.log(check);
};

const search = () => {
  let input = products
    .filter((value) => value.category === "Phụ kiện")
    .map((value) => `${value.name}`);
  console.log(input);
};

const total = () => {
  let check = products
    .filter((value) => value.inStock === true)
    .reduce((acc, value) => (acc += value.price), 0);
  console.log(`Tổng giá trị các mặt hàng còn trong kho: ${check}`);
};
list();
search();
total();
=======
let products = [
  {
    id: "P01",
    name: "Laptop Macbook Pro M3",
    price: 2000,
    category: "Laptop",
    inStock: true,
  },
  {
    id: "P02",
    name: "Chuột không dây Logitech",
    price: 45,
    category: "Phụ kiện",
    inStock: true,
  },
  {
    id: "P03",
    name: "Bàn phím cơ Keychron",
    price: 95,
    category: "Phụ kiện",
    inStock: false,
  },
  {
    id: "P04",
    name: "Màn hình Dell UltraSharp",
    price: 450,
    category: "Màn hình",
    inStock: true,
  },
  {
    id: "P05",
    name: "Tai nghe Sony WH-1000XM5",
    price: 350,
    category: "Phụ kiện",
    inStock: true,
  },
];

const list = () => {
  let check = products
    .filter((value) => value.inStock === true)
    .sort((a, b) => b.price - a.price)
    .map(
      (value) =>
        `${value.id} - ${value.name} - ${value.price} - ${value.category} - ${value.inStock}`,
    )
    .join("\n");
  console.log(check);
};

const search = () => {
  let input = products
    .filter((value) => value.category === "Phụ kiện")
    .map((value) => `${value.name}`);
  console.log(input);
};

const total = () => {
  let check = products
    .filter((value) => value.inStock === true)
    .reduce((acc, value) => (acc += value.price), 0);
  console.log(`Tổng giá trị các mặt hàng còn trong kho: ${check}`);
};
list();
search();
total();
>>>>>>> ea34099f53489974fb8c1e6af8060b8244db0e51
