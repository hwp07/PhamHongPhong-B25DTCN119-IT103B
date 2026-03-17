// mảng ban đầu
let product = [];

// truy xuất dữ liệu
let productName = document.getElementById("productName");
let productCategory = document.getElementById("productCategory");
let productPrice = document.getElementById("productPrice");
let productQuantity = document.getElementById("productQuantity");
let productDescription = document.getElementById("productDescription");
let submitBtn = document.getElementById("submitBtn");
let clearAllBtn = document.getElementById("clearAllBtn");

function addProduct() {
  let name = productName.value.trim();
  let category = productCategory.value;
  let price = productPrice.value;
  let quantity = productQuantity.value;
  let description = productDescription.value;

  let newProduct = {
    id: product[product.length - 1].id + 1,
    name,
    category,
    price,
    quantity,
    description,
  };

  product.push(newProduct);
  localStorage.setItem("products", JSON.stringify(product));
}
