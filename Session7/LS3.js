let players = [];

let numberOfPlayers;
do {
  numberOfPlayers = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");
} while (isNaN(numberOfPlayers) || numberOfPlayers <= 0);

function choosePosition() {
  let choice;
  while (true) {
    choice = +prompt(
      "Chọn vị trí cầu thủ:\n" +
        "1. Thủ môn\n" +
        "2. Hậu vệ\n" +
        "3. Tiền vệ\n" +
        "4. Tiền đạo",
    );

    switch (choice) {
      case 1:
        return "Thủ môn";
      case 2:
        return "Hậu vệ";
      case 3:
        return "Tiền vệ";
      case 4:
        return "Tiền đạo";
      default:
        alert("Vị trí không hợp lệ, vui lòng chọn lại!");
    }
  }
}

for (let i = 0; i < numberOfPlayers; i++) {
  let id, name, position;

  while (true) {
    id = prompt(`Nhập mã cầu thủ thứ ${i + 1}:`);
    let isDuplicate = false;

    for (let j = 0; j < players.length; j++) {
      if (players[j].split("-")[0] === id) {
        isDuplicate = true;
        break;
      }
    }

    if (!id) {
      alert("Mã cầu thủ không được để trống!");
    } else if (isDuplicate) {
      alert("Mã cầu thủ bị trùng!");
    } else {
      break;
    }
  }

  while (true) {
    name = prompt("Nhập tên cầu thủ:");
    if (!name) {
      alert("Tên cầu thủ không được để trống!");
    } else {
      break;
    }
  }

  position = choosePosition();

  players.push(`${id}-${name}-${position}`);
}

function printTeamRoster() {
  console.log(`Danh sách đội bóng (${players.length} cầu thủ):`);

  for (let i = 0; i < players.length; i++) {
    let [id, name, position] = players[i].split("-");
    console.log(`${i + 1}. Mã: ${id} | Tên: ${name} | Vị trí: ${position}`);
  }
}

function pushPlayer(name, position) {
  let id;

  while (true) {
    id = prompt("Nhập mã cầu thủ mới:");
    let isDuplicate = false;

    for (let i = 0; i < players.length; i++) {
      if (players[i].split("-")[0] === id) {
        isDuplicate = true;
        break;
      }
    }

    if (!id) {
      alert("Mã không được để trống!");
    } else if (isDuplicate) {
      alert("Mã cầu thủ bị trùng!");
    } else {
      break;
    }
  }

  players.push(`${id}-${name}-${position}`);
}

printTeamRoster();
