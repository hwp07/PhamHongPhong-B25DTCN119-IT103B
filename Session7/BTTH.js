let player = [];
let goals = [];
`    1`;

function addPlayer(name, goal) {
  player.push(name);
  goals.push(goal);
  alert(`Đã thêm ${name} thành công.`);
}

function showSquad() {
  if (player.length === 0) {
    alert("Danh sách đội bóng đang trống!");
    return;
  }

  let result = "Danh sách đội bóng:\n";
  for (let i = 0; i < player.length; i++) {}
  console.log(result);
}

const getTotalGoals = function () {
  let total = 0;
  for (let goal of goals) {
    total += goal;
  }
  return total.length === 0 ? "Chưa có cầu thủ nào!" : total;
};

function findMostGoals(goalsArray) {
  if (goalsArray.length === 0) {
    return 0;
  }

  let max = goalsArray[0];
  for (let goal of goalsArray) {
    if (goal > max) {
      max = goal;
    }
  }
  return max;
}

function main() {
  let choice;

  do {
    choice = +prompt(
      "--- QUẢN LÝ ĐỘI BÓNG ---\n" +
        "1. Nhập cầu thủ mới\n" +
        "2. Xem danh sách đội hình\n" +
        "3. Xem thành tích toàn đội\n" +
        "4. Tìm Vua phá lưới\n" +
        "0. Thoát\n\n" +
        "Người dùng chọn:",
    );

    switch (choice) {
      case 1: {
        let name = prompt("Nhập tên cầu thủ:");
        let goal = +prompt("Nhập số bàn thắng:");

        if (name && !isNaN(goal) && goal >= 0) {
          addPlayer(name, goal);
        } else {
          alert("Dữ liệu không hợp lệ!");
        }
        break;
      }

      case 2:
        showSquad();
        break;

      case 3: {
        let total = getTotalGoals();
        console.log(`Tổng số bàn thắng của cả đội là: ${total} bàn.`);
        break;
      }

      case 4: {
        let maxGoal = findMostGoals(goals);

        if (player.length === 0) {
          alert("Chưa có cầu thủ nào!");
          break;
        }

        let index = goals.indexOf(maxGoal);
        console.log(
          `Vua phá lưới hiện tại: ${player[index]} với ${maxGoal} bàn.`,
        );
        break;
      }

      case 0:
        alert("Đã thoát chương trình!");
        break;

      default:
        alert("Vui lòng chọn đúng menu!");
    }
  } while (choice !== 0);
}

main();
