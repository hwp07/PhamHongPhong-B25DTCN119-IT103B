let products = [];

// DOM
let productForm = document.getElementById("productForm");
let formTitle = document.getElementById("formTitle");
let submitBtn = document.getElementById("submitBtn");
let cancelBtn = document.getElementById("cancelBtn");
let clearAllBtn = document.getElementById("clearAllBtn");

let productName = document.getElementById("productName");
let productCategory = document.getElementById("productCategory");
let productPrice = document.getElementById("productPrice");
let productQuantity = document.getElementById("productQuantity");
let productDescription = document.getElementById("productDescription");

let productTableBody = document.getElementById("productTableBody");
// event
productForm.addEventListener("submit", createProduct);

function createProduct(e) {
  e.preventDefault();
  let newProduct = {
    id: Date.now(),
    productName: productName.value.trim(),
    productCategory: productCategory.value,
    productPrice: +productPrice.value,
    productQuantity: +productQuantity.value,
    productDescription: productDescription.value,
  };

  products.push(newProduct);

  localStorage.setItem("products", JSON.stringify(products));
  productForm.reset();
  renderProduct();
}

// render & display

function renderProduct() {
  productTableBody.innerHTML = "";
  products.forEach((product) => {
    let createTR = document.createElement("tr");
    createTR.innerHTML += `
        <td>${product.id}</td>
        <td><strong>${product.productName}</strong></td>
        <td>${product.productCategory}</td>
        <td class="price">${product.productPrice}&nbsp;₫</td>
        <td class="quantity">${product.productQuantity}</td>
        <td class="description">${product.productDescription}</td>
        <td>
            <div class="action-buttons">
            <button class="btn-edit" onclick="editProduct(1)">
                ✏️ Sửa
            </button>
            <button class="btn-delete" onclick="deleteProduct(1)">
                🗑️ Xóa
            </button>
            </div>
        </td>
    `;

    productTableBody.appendChild(createTR);
  });
}

function getData() {
  let getProduct = localStorage.getItem("products");

  if (getProduct) {
    products = JSON.parse(getProduct);
    renderProduct();
  }
}
getData();
