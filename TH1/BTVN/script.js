//Mảng lưu dữ liệu
let list = JSON.parse(localStorage.getItem("list")) || [];

//DOM
let songTable = document.getElementById("songTable");
let title = document.getElementById("title");
let artist = document.getElementById("artist");

let titleErr = document.getElementById("titleErr");
let artistErr = document.getElementById("artistErr");

let formTitle = document.getElementById("formTitle");
let submitBtn = document.getElementById("submitBtn");

// Check err
function checkErr() {
  let isValid = true;
  if (title.value.trim() === "") {
    titleErr.style.display = "block";
    isValid = false;
  } else {
    titleErr.style.display = "none";
  }

  if (artist.value.trim() === "") {
    artistErr.style.display = "block";
    isValid = false;
  } else {
    artistErr.style.display = "none";
  }

  return isValid;
}
// Render
function renderList(list) {
  songTable.innerHTML = "";

  list.forEach((e) => {
    songTable.innerHTML += `
        <tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.artist}</td>
            <td>
                <button onclick="updateSong(${e.id})">Sửa</button>
                <button onclick="deleteSong(${e.id})">Xóa</button>  
            </td>
        </tr>
    `;
  });
}
renderList(list);

// Thêm & Sửa
function handleSubmit(e) {
  e.preventDefault();

  if (!checkErr()) return;

  if (edit) {
    let index = list.findIndex((e) => e.id === edit);

    list[index] = {
      ...list[index],
      name: title.value,
      artist: artist.value,
    };

    edit = null;
  } else {
    let newSong = {
      id: list.length !== 0 ? list[list.length - 1].id + 1 : 1,
      name: title.value,
      artist: artist.value,
    };

    list.push(newSong);
  }

  renderList(list);
  localStorage.setItem("list", JSON.stringify(list));

  title.value = "";
  artist.value = "";
}

// Xóa
function deleteSong(id) {
  let findSong = list.find((e) => e.id === id);
  let isConfirm = confirm(
    `Bạn có chắc chắn muốn xóa bài ${findSong.name} không?`,
  );

  if (!isConfirm) return alert(`Thao tác đã được hủy!`);
  alert(`Xóa thành công`);

  list = list.filter((e) => e.id !== id);
  renderList(list);
  localStorage.setItem("list", JSON.stringify(list));
}

// Sửa
let edit = null;
function updateSong(id) {
  let lists = list.find((e) => e.id === id);

  title.value = lists.name;
  artist.value = lists.artist;

  formTitle.textContent = "🎵 Sửa bài hát";
  submitBtn.textContent = "Cập nhật";

  edit = id;
}

// Tìm kiếm
function searchSong() {
  let keyword = document.getElementById("search").value.toLowerCase().trim();

  let filteredList = list.filter((song) =>
    song.name.toLowerCase().includes(keyword),
  );

  renderList(filteredList);
}
