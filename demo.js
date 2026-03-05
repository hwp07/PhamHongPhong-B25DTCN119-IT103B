function renderCard() {
  const cartList = document.getElementsByClassName("cart-list"[0]);
  cartList.forEach(() => {
    cartList.innerHTML += `<li>
              <span class="cart-item-name">${item.name}</span>
              <div>
                <span class="cart-item-price">${item.price.toLocaleString("vi-vn")}</span>
                <button class="btn-remove">X</button>
              </div>
            </li>`;
  });
}
const form = document.getElementById("product-form");

const productList = document.getElementById("product-list");

form.addEventListener("submit", function (e) {
  // 1. Ngăn reload trang
  e.preventDefault();

  // 2. Lấy giá trị input
  const nameInput = document.getElementById("product-name");

  const priceInput = document.getElementById("product-price");

  const name = nameInput.value;

  const price = priceInput.value;

  // 3. Tạo object sản phẩm mới
  const newProduct = {
    name: name,

    price: price,
  };

  // 4. Tạo thẻ li
  const li = document.createElement("li");

  li.className = "product-item";

  li.innerText = `${newProduct.name} - ${Number(newProduct.price).toLocaleString("vi-VN")} đ`;

  // 5. Thêm vào danh sách
  productList.appendChild(li);

  // 6. Xóa input sau khi thêm
  nameInput.value = "";

  priceInput.value = "";
});

const products = [
  { id: 1, name: "Bánh Chung", price: 15000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cánh Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Báo Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let list = document.getElementById("product-list");
products.forEach((product) => {
  let li = document.createElement("li");
  li.innerText = `${product.name} - ${product.price.toLocaleString()} VND`;
  list.appendChild(li);
});
