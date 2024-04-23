/**
 * 최대한 boolean타입의 변수를 제거하는 쪽으로 코드 짜기
 */
for (const person of people) {
  if (person === "Don") {
    sendAlert();
    break;
  }
}

for (const p of people) {
  if (!found) {
    if (p === "Don") {
      sendAlert();
      break;
    }
  }
}
