let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];

function getAllPositions() {
  let positions = [];

  for (let player of players) {
    let parts = player.split("-");
    let position = parts[2];

    if (!positions.includes(position)) {
      positions.push(position);
    }
  }

  return positions;
}

function findPlayersWithLongestName() {
  let longestName = "";

  for (let player of players) {
    let parts = player.split("-");
    let name = parts[1];

    if (name.length > longestName.length) {
      longestName = name;
    }
  }

  return longestName;
}

function countPlayersStartingWithLetter(letter) {
  let count = 0;
  letter = letter.toLowerCase();

  for (let player of players) {
    let parts = player.split("-");
    let name = parts[1].toLowerCase();

    if (name.startsWith(letter)) {
      count++;
    }
  }

  return count;
}

console.log("Danh sách vị trí trong đội:");
console.log(getAllPositions());

console.log("\nCầu thủ có tên dài nhất:");
console.log(findPlayersWithLongestName());

console.log("\nSố cầu thủ có tên bắt đầu bằng chữ 'N':");
console.log(countPlayersStartingWithLetter("N"));

console.log("\nSố cầu thủ có tên bắt đầu bằng chữ 'T':");
console.log(countPlayersStartingWithLetter("T"));
