let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
  { id: 3, name: "Le Van C", goals: 0, position: "DF" },
  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
  { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];

function showList(squad) {
  squad.forEach((player) => {
    console.log(
      `Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn.`,
    );
  });
}

function addPlayer(squad) {
  let newName = prompt(`Nhập tên cầu thủ:`);
  let newGoals = +prompt(`Nhập số bàn thắng:`);
  let newPosition = prompt(`Nhập vị trí(MF/DF/FW/GK):`);
  let newPlayer = {
    id: squad.length > 0 ? squad[squad.length - 1].id + 1 : 1,
    name: newName,
    goals: newGoals,
    position: newPosition,
  };
  squad.push(newPlayer);
}

function findPlayer(squad) {
  let input = +prompt("Nhập ID cầu thủ cần tìm:");
  let found = squad.find((player) => player.id === input);
  if (found) {
    alert(`Tìm thấy cầu thủ có ID: ${input}`);
    console.log(
      `Mã ${found.id} - ${found.name} (${found.position}): ${found.goals} bàn.`,
    );
  } else {
    alert(`Không tìm thấy cầu thủ`);
  }
}

function updatePlayer(squad) {
  let input = +prompt("Nhập ID cầu thủ vừa ghi bàn:");
  let find = squad.find((player) => player.id === input);
  if (find) {
    find.goals += 1;
    alert(`Đã cập nhật bàn thắng cho cầu thủ ${find.name} thành ${find.goals}`);
  }
}

function deletePlayer(squad) {
  let input = +prompt("Nhập ID cầu thủ muốn chuyển nhượng:");
  let find = squad.findIndex((player) => player.id === input);

  if (find !== -1) {
    squad.splice(find, 1);
    alert("Đã chuyển nhượng cầu thủ");
  } else {
    alert("Không tìm thấy cầu thủ");
  }
}

let choice;
do {
  choice = +prompt(
    `--- FOOTBALL MANAGER PRO ---

1. Xem đội hình
2. Thêm cầu thủ
3. Tìm kiếm (theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ (Chuyển nhượng)
0. Thoát`,
  );

  switch (choice) {
    case 1:
      showList(squad);
      break;

    case 2:
      addPlayer(squad);
      alert(`Thêm thành công!`);
      break;

    case 3:
      findPlayer(squad);
      break;

    case 4:
      updatePlayer(squad);
      break;

    case 5:
      deletePlayer(squad);
      break;

    case 0:
      alert("Hẹn gặp lại");
      break;
  }
} while (choice !== 0);
