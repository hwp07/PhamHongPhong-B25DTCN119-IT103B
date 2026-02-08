let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];

function printTeamRoster(players) {
  console.log("Danh sách cầu thủ:");

  for (let i = 0; i < players.length; i++) {
    let [id, name, position] = players[i].split("-");
    console.log(`${i + 1}. ${id} | ${name} | ${position}`);
  }
}

function countPlayerByPosition(players) {
  let result = {};

  for (let i = 0; i < players.length; i++) {
    let position = players[i].split("-")[2];

    if (result[position]) {
      result[position]++;
    } else {
      result[position] = 1;
    }
  }

  return result;
}

function hasGoalkeeper(players) {
  for (let i = 0; i < players.length; i++) {
    let position = players[i].split("-")[2];
    if (position === "Thủ môn") {
      return true;
    }
  }
  return false;
}

printTeamRoster(players);

console.log("\nSố lượng cầu thủ theo vị trí:");
console.log(countPlayerByPosition(players));

console.log("\nĐội có thủ môn không?");
console.log(hasGoalkeeper(players));
