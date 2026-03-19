const STORAGE_KEY = "products_data";

let products = [];
let productIdCounter = 1;
let editingProductId = null;

const form = document.getElementById("productForm");
const nameInput = document.getElementById("productName");
const categoryInput = document.getElementById("productCategory");
const priceInput = document.getElementById("productPrice");
const quantityInput = document.getElementById("productQuantity");
const descInput = document.getElementById("productDescription");

const tableBody = document.getElementById("productTableBody");
const emptyState = document.getElementById("emptyState");

const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

const totalProducts = document.getElementById("totalProducts");
const totalValue = document.getElementById("totalValue");
const totalQuantity = document.getElementById("totalQuantity");

function saveData() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      products,
      idCounter: productIdCounter,
    }),
  );
}

function loadData() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return;

  try {
    const parsed = JSON.parse(data);
    products = parsed.products || [];
    productIdCounter = parsed.idCounter || 1;
  } catch (err) {
    console.error("Lỗi load data:", err);
    products = [];
    productIdCounter = 1;
  }
}

function addProduct(data) {
  const newProduct = {
    id: productIdCounter++,
    ...data,
    createdAt: new Date().toISOString(),
  };

  products.push(newProduct);
}

function updateProduct(id, data) {
  const p = products.find((item) => item.id === id);
  if (!p) return;

  Object.assign(p, data);
  p.updatedAt = new Date().toISOString();
}

function deleteProduct(id) {
  const p = products.find((item) => item.id === id);
  if (!p) return;

  if (!confirm(`Bạn có chắc muốn xóa "${p.name}"?`)) return;

  products = products.filter((item) => item.id !== id);

  if (editingProductId === id) resetForm();

  saveData();
  render();
  updateStats();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: nameInput.value.trim(),
    category: categoryInput.value,
    price: parseFloat(priceInput.value),
    quantity: parseInt(quantityInput.value),
    description: descInput.value.trim(),
  };

  if (
    !data.name ||
    !data.category ||
    isNaN(data.price) ||
    isNaN(data.quantity)
  ) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (data.price < 0) {
    alert("Giá không được âm!");
    return;
  }

  if (data.quantity < 0) {
    alert("Số lượng không được âm!");
    return;
  }

  if (editingProductId) {
    updateProduct(editingProductId, data);
  } else {
    addProduct(data);
  }

  saveData();
  render();
  updateStats();
  resetForm();
});

function editProduct(id) {
  const p = products.find((item) => item.id === id);
  if (!p) return;

  nameInput.value = p.name;
  categoryInput.value = p.category;
  priceInput.value = p.price;
  quantityInput.value = p.quantity;
  descInput.value = p.description || "";

  editingProductId = id;

  formTitle.textContent = "Chỉnh Sửa Sản Phẩm";
  submitBtn.innerHTML = "💾 Cập Nhật";
  cancelBtn.style.display = "block";

  document
    .querySelector(".form-section")
    .scrollIntoView({ behavior: "smooth" });
}

function resetForm() {
  form.reset();
  editingProductId = null;

  formTitle.textContent = "Thêm Sản Phẩm Mới";
  submitBtn.innerHTML = "➕ Thêm Sản Phẩm";
  cancelBtn.style.display = "none";
}

cancelBtn.addEventListener("click", resetForm);

clearAllBtn.addEventListener("click", function () {
  if (!confirm("Bạn có chắc muốn xóa TẤT CẢ?")) return;

  products = [];
  productIdCounter = 1;

  saveData();
  render();
  updateStats();
});

function render(list = products) {
  tableBody.innerHTML = "";

  if (list.length === 0) {
    emptyState.classList.add("show");
    return;
  }

  emptyState.classList.remove("show");

  list.forEach((p) => {
    const tr = document.createElement("tr");

    const price = formatPrice(p.price);
    const lowStock = p.quantity < 10 ? "low-stock" : "";

    tr.innerHTML = `
      <td>${p.id}</td>
      <td><strong>${p.name}</strong></td>
      <td>${p.category}</td>
      <td>${price}</td>
      <td class="${lowStock}">${p.quantity}</td>
      <td>${p.description || "Không có mô tả"}</td>
      <td>
        <button onclick="editProduct(${p.id})">Sửa</button>
        <button onclick="deleteProduct(${p.id})">Xóa</button>
      </td>
    `;

    tableBody.appendChild(tr);
  });
}

function filterData() {
  let result = [...products];

  const keyword = searchInput.value.toLowerCase().trim();
  const category = filterCategory.value;

  if (keyword) {
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(keyword) ||
        p.description.toLowerCase().includes(keyword),
    );
  }

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  render(result);
}

searchInput.addEventListener("input", filterData);
filterCategory.addEventListener("change", filterData);

function updateStats() {
  totalProducts.textContent = products.length;

  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  totalValue.textContent = formatPrice(total);

  const qty = products.reduce((sum, p) => sum + p.quantity, 0);
  totalQuantity.textContent = qty;
}

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

function init() {
  loadData();
  render();
  updateStats();
}

init();
