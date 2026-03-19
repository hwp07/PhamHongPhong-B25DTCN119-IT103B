const STORAGE_KEY = "products_data";

let products = [];
let productIdCounter = 1;
let editingProductId = null;

const $ = (id) => document.getElementById(id);

const productForm = $("productForm");
const formTitle = $("formTitle");
const submitBtn = $("submitBtn");
const cancelBtn = $("cancelBtn");
const clearAllBtn = $("clearAllBtn");

const productName = $("productName");
const productCategory = $("productCategory");
const productPrice = $("productPrice");
const productQuantity = $("productQuantity");
const productDescription = $("productDescription");

const searchInput = $("searchInput");
const filterCategory = $("filterCategory");

const productTableBody = $("productTableBody");
const emptyState = $("emptyState");

const totalProducts = $("totalProducts");
const totalValue = $("totalValue");
const totalQuantity = $("totalQuantity");

function saveData() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ products, idCounter: productIdCounter }),
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
    console.error("Lỗi load:", err);
    products = [];
    productIdCounter = 1;
  }
}

function getFormData() {
  return {
    name: productName.value.trim(),
    category: productCategory.value,
    price: parseFloat(productPrice.value),
    quantity: parseInt(productQuantity.value),
    description: productDescription.value.trim(),
  };
}

function validate(data) {
  if (
    !data.name ||
    !data.category ||
    isNaN(data.price) ||
    isNaN(data.quantity)
  ) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return false;
  }
  if (data.price < 0) {
    alert("Giá không được âm!");
    return false;
  }
  if (data.quantity < 0) {
    alert("Số lượng không được âm!");
    return false;
  }
  return true;
}

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = getFormData();
  if (!validate(data)) return;

  if (editingProductId) {
    updateProduct(editingProductId, data);
  } else {
    addProduct(data);
  }

  resetForm();
});

function addProduct(data) {
  products.push({
    id: productIdCounter++,
    ...data,
    createdAt: new Date().toISOString(),
  });

  afterChange();
}

function updateProduct(id, data) {
  const p = products.find((x) => x.id === id);
  if (!p) return;

  Object.assign(p, data);
  p.updatedAt = new Date().toISOString();

  afterChange();
}

function deleteProduct(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;

  if (!confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${p.name}"?`)) return;

  products = products.filter((x) => x.id !== id);

  if (editingProductId === id) resetForm();

  afterChange();
}

function editProduct(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;

  productName.value = p.name;
  productCategory.value = p.category;
  productPrice.value = p.price;
  productQuantity.value = p.quantity;
  productDescription.value = p.description || "";

  editingProductId = id;

  formTitle.textContent = "Chỉnh Sửa Sản Phẩm";
  submitBtn.innerHTML = "💾 Cập Nhật";
  cancelBtn.style.display = "block";

  document
    .querySelector(".form-section")
    .scrollIntoView({ behavior: "smooth" });
  productName.focus();
}

function afterChange() {
  saveData();
  renderProducts();
  updateStats();
}

function resetForm() {
  productForm.reset();
  editingProductId = null;

  formTitle.textContent = "Thêm Sản Phẩm Mới";
  submitBtn.innerHTML = "➕ Thêm Sản Phẩm";
  cancelBtn.style.display = "none";
}

cancelBtn.addEventListener("click", resetForm);

clearAllBtn.addEventListener("click", () => {
  if (
    !confirm(
      "Bạn có chắc chắn muốn xóa TẤT CẢ sản phẩm? Hành động này không thể hoàn tác!",
    )
  )
    return;

  products = [];
  productIdCounter = 1;

  afterChange();
  alert("Đã xóa tất cả sản phẩm!");
});

function renderProducts(list = products) {
  productTableBody.innerHTML = "";

  if (list.length === 0) {
    emptyState.classList.add("show");
    return;
  }

  emptyState.classList.remove("show");

  list.forEach((p) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${p.id}</td>
      <td><strong>${p.name}</strong></td>
      <td>${p.category}</td>
      <td>${formatPrice(p.price)}</td>
      <td class="${p.quantity < 10 ? "low-stock" : ""}">${p.quantity}</td>
      <td>${p.description || "Không có mô tả"}</td>
      <td>
        <button onclick="editProduct(${p.id})">✏️</button>
        <button onclick="deleteProduct(${p.id})">🗑️</button>
      </td>
    `;

    productTableBody.appendChild(tr);
  });
}

function handleSearch() {
  const keyword = searchInput.value.toLowerCase().trim();
  const category = filterCategory.value;

  let result = products;

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

  renderProducts(result);
}

searchInput.addEventListener("input", handleSearch);
filterCategory.addEventListener("change", handleSearch);

function updateStats() {
  totalProducts.textContent = products.length;

  const total = products.reduce((s, p) => s + p.price * p.quantity, 0);
  totalValue.textContent = formatPrice(total);

  totalQuantity.textContent = products.reduce((s, p) => s + p.quantity, 0);
}

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

function init() {
  loadData();
  renderProducts();
  updateStats();
}

init();
