let n = 20;

if (n % 2 == 0) {
  console.log(`${n} là số chẵn`);
} else {
  console.log(`${n} là số lẻ`);
}

if (n > 0) {
  for (let i = 0; i < n; i++) {
    console.log(`${i + 1}`);
  }
} else {
  console.log(`Giá trị n không phù hợp để tạo dãy số!`);
}
