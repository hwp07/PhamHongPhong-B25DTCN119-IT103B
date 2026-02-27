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

let check = products.find((value) => value.id === "P03");
if (check) {
  console.log(
    `Mã: ${check.id} - Tên: ${check.name} - Giá: ${check.price} - Loại: ${check.category} - Trạng thái: ${check.inStock}`,
  );
} else {
  console.log(`Không tìm thấy sản phẩm!`);
}

let check1 = products.some((value) => value.price < 0);
if (check1) {
  console.log(`Có sản phẩm giá cả không hợp lệ`);
} else {
  console.log(`Dữ liệu bảng giá hợp lệ`);
}

function catalogDisplay(products) {
  if (products.inStock) {
    return `Còn hàng`;
  } else {
    return `Hết hàng`;
  }

  products.map((value) => {
    return `${value.name} - Giá: ${value.price}$ | Trạng thái: ${value.inStock}`;
  });
}
catalogDisplay(products);
