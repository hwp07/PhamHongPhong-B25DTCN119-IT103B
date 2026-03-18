let listPeron = JSON.parse(localStorage.getItem("listPeron")) || [];
let editingId = null;

function addPerson(e) {
  e.preventDefault();

  let form = document.getElementById("contact-form");
  let name = document.getElementById("contact-name").value.trim();
  let phone = document.getElementById("contact-phone").value;
  let email = document.getElementById("contact-email").value;

  if (name === "") {
    alert("Tên không được để trống!");
    return;
  }
  if (name.length < 2) {
    alert("Tên phải có ít nhất 2 ký tự!");
    return;
  }

  let nameCheck = /^[a-zA-ZÀ-ỹ\s]+$/;
  if (!nameCheck.test(name)) {
    alert("Tên không hợp lệ!");
    return;
  }

  if (phone === "") {
    alert("SĐT không được để trống!");
    return;
  }

  let phoneCheck = /^(0|\+84)[0-9]{9}$/;
  if (!phoneCheck.test(phone)) {
    alert("SĐT không hợp lệ!");
    return;
  }

  if (email === "") {
    alert("Email không được để trống!");
    return;
  }

  let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailCheck.test(email)) {
    alert("Email không hợp lệ!");
    return;
  }

  let isExist = listPeron.some((p) => p.email === email && p.id !== editingId);
  if (isExist) {
    alert("Email đã tồn tại!");
    return;
  }

  if (editingId !== null) {
    let index = listPeron.findIndex((p) => p.id === editingId);

    listPeron[index] = {
      id: editingId,
      name,
      phone,
      email,
    };

    editingId = null;
    document.querySelector(".btn-add").innerText = "Thêm";

    alert("Cập nhật liên hệ thành công!");
  } else {
    let newPerson = {
      id: listPeron.length ? listPeron[listPeron.length - 1].id + 1 : 1,
      name,
      phone,
      email,
    };

    listPeron.push(newPerson);
  }

  localStorage.setItem("listPeron", JSON.stringify(listPeron));
  form.reset();
  renderPerson();
}

function renderPerson() {
  let list = document.getElementById("contact-tbody");
  list.innerHTML = "";

  listPeron.forEach((p) => {
    list.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.phone}</td>
        <td>${p.email}</td>
        <td>
          <button class="btn-edit" onclick="editPerson(${p.id})">Sửa</button>
          <button class="btn-delete" onclick="deletePerson(${p.id})">Xóa</button>
        </td>
      </tr>
    `;
  });
}

function editPerson(id) {
  let person = listPeron.find((p) => p.id === id);

  document.getElementById("contact-name").value = person.name;
  document.getElementById("contact-phone").value = person.phone;
  document.getElementById("contact-email").value = person.email;

  editingId = id;

  document.querySelector(".btn-add").innerText = "Cập nhật";
}

function deletePerson(id) {
  let confirmDelete = confirm("Bạn có chắc muốn xóa?");

  if (confirmDelete) {
    listPeron = listPeron.filter((p) => p.id !== id);

    localStorage.setItem("listPeron", JSON.stringify(listPeron));

    alert("Xóa thành công!");
    renderPerson();
  }
}

document.getElementById("contact-form").addEventListener("submit", addPerson);
renderPerson();
