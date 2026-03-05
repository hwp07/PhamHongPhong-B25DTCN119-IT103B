let products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

// truy xuất dữ liệu
const list = document.getElementById("product-list");
const form = document.getElementById("product-form");
const name = document.getElementById("product-name");
const price = document.getElementById("product-price");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search");
const sortAsc = document.querySelector(".sort-asc");
const sortDesc = document.querySelector(".sort-desc");

// bài 1: hiển thị danh sách sản phẩm
const showList = (arr = products) => {
  list.innerHTML = "";

  arr.forEach((product) => {
    list.innerHTML += `
      <li class="product-item">
          <h3>${product.name}</h3>
          <p>Price: ${product.price.toLocaleString("vi-VN")} VND</p>
          <button class="delete-btn" id="${product.id}">Xóa</button>
          <button class="edit-price-btn" id="${product.id}">Sửa giá</button>
      </li>
    `;
  });
};
showList();

// bài 2: thêm sản phẩm
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newName = name.value;
  const newPrice = Number(price.value);

  let newProduct = {
    id: Date.now(),
    name: newName,
    price: newPrice,
  };

  products.push(newProduct);

  showList();

  name.value = "";
  price.value = "";
});

// bài 3: xóa sản phẩm
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.id);
    const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (!confirmDelete) return;
    products = products.filter((product) => product.id !== id);
    showList();
  }
});

// bài 4: cập nhật giá sản phẩm
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-price-btn")) {
    const id = Number(e.target.id);

    const newPrice = Number(prompt("Nhập giá mới (VND):"));

    if (isNaN(newPrice) || newPrice < 0) return alert("Mức giá không hợp lệ!");

    const product = products.find((p) => p.id === id);
    if (product) {
      product.price = newPrice;
      showList();
    }
  }
});

// bài 5: tìm kiếm sản phẩm theo tên
searchBtn.addEventListener("click", function () {
  let search = searchInput.value.trim().toLowerCase();

  let filter = products.filter((product) => {
    product.name.trim().toLocaleLowerCase().includes(search);
  });

  if (filter.length === 0) {
    list.innerHTML = "<p>Không tìm thấy sản phẩm</p>";
    return;
  }

  showList(filter);
});

// bài 6: sắp xếp theo giá
function handleSort(type) {
  let sorted = products.sort((a, b) => {
    return type === "asc" ? a.price - b.price : b.price - a.price;
  });

  showList(sorted);
}

sortAsc.addEventListener("click", () => handleSort("sortAsc"));
sortDesc.addEventListener("click", () => handleSort("sortDesc"));
