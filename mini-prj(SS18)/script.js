let employee = JSON.parse(localStorage.getItem("employee")) || [];
const btnAdd = document.getElementById("btn-add");
const contactBody = document.getElementById("contact-tbody");

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();

  const contactName = document.getElementById("contact-name").value.trim();
  const contactPhone = document.getElementById("contact-phone").value.trim();
  const contactEmail = document.getElementById("contact-email").value.trim();

  if (contactName === "") {
    alert("Tên không được để trống!");
    return;
  }

  if (contactName.length < 2) {
    alert("Tên phải có ít nhất 2 ký tự!");
    return;
  }

  let nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
  if (!nameRegex.test(contactName)) {
    alert("Tên không được chứa số hoặc ký tự đặc biệt!");
    return;
  }

  if (contactPhone === "") {
    alert("Số điện thoại không được để trống!");
    return;
  }

  let phoneRegex = /^(0|\+84)[0-9]{9}$/;
  if (!phoneRegex.test(contactPhone)) {
    alert("Số điện thoại không hợp lệ! (0xxxxxxxxx hoặc +84xxxxxxxxx)");
    return;
  }

  if (contactEmail === "") {
    alert("Email không được để trống!");
    return;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(contactEmail)) {
    alert("Email không hợp lệ!");
    return;
  }

  let isExist = employee.some((p) => p.contactEmail === contactEmail);
  if (isExist) {
    alert("Email đã tồn tại trong danh bạ!");
    return;
  }

  let newEmployee = {
    id: employee.length !== 0 ? employee[employee.length - 1].id + 1 : 1,
    contactName,
    contactPhone,
    contactEmail,
  };

  employee.push(newEmployee);
  localStorage.setItem("employee", JSON.stringify(employee));

  renderList();

  document.getElementById("contact-name").value = "";
  document.getElementById("contact-phone").value = "";
  document.getElementById("contact-email").value = "";
});

function renderList() {
  contactBody.innerHTML = "";

  employee.forEach((el) => {
    contactBody.innerHTML += `
    <tr>
        <td>${el.id}</td>
        <td>${el.contactName}</td>
        <td>${el.contactPhone}</td>
        <td>${el.contactEmail}</td>
        <td>
            <div class="action-buttons">
            <button class="btn-edit">Sửa</button>
            <button class="btn-delete">Xóa</button>
            </div>
        </td>
    </tr>
    `;
  });
}
