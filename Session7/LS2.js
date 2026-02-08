let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
  "Nguyễn Văn A",
  "Trần Thị B",
  "Lê Văn C",
  "Phạm Văn D",
  "Hoàng Thị E",
];

let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
  console.log("Danh sách cầu thủ hiện tại:");

  for (let i = 0; i < playerIds.length; i++) {
    console.log(
      `${i + 1}. ${playerIds[i]} - ${playerNames[i]} - Số áo: ${playerJerseyNumbers[i]}`,
    );
  }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
  let index = playerIds.indexOf(playerId);

  if (index === -1) {
    return false;
  }

  playerNames[index] = newName;
  playerJerseyNumbers[index] = newJerseyNumber;
  return true;
}

printTeamRoster();

let inputId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

if (!playerIds.includes(inputId)) {
  alert("Không tìm thấy cầu thủ với mã này!");
} else {
  let newName = prompt("Nhập tên mới cho cầu thủ:");

  let newJerseyNumber;
  do {
    newJerseyNumber = +prompt("Nhập số áo mới (1–99):");
  } while (
    isNaN(newJerseyNumber) ||
    newJerseyNumber < 1 ||
    newJerseyNumber > 99
  );

  let isUpdated = updatePlayerNameAndJersey(inputId, newName, newJerseyNumber);

  if (isUpdated) {
    alert("Cập nhật thành công!");
    printTeamRoster();
  }
}
