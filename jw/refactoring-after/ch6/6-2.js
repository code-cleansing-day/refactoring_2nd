// 예제 1
export function rating(driver) {
  return moreThanFiveLateDeliveries(driver.numberOfLateDeliveries) ? 2 : 1;
}

// numberOfLateDeliveries 값만 알면 되는 로직.
// 따라서, driver 객체를 전달받지 않고, numberOfLateDeliveries 값만 전달받아도 충분하다.
function moreThanFiveLateDeliveries(numberOfLateDeliveries) {
  return numberOfLateDeliveries > 5;
}

// 예제 2
function reportLines(customer) {
  const lines = [];

  return gatherCustomerData(lines, customer);
}

// 지금은 코드가 잘 읽히고 예측이 용이하지만,
// 복잡해졌을 때 이 함수가 어떤 동작을 하는지 파악하기 어려워질 수 있다.
// => 결과 배열을 반환하는 순수 함수로 변경
// 그리고 out이라는 이름은 너무 추상적이다. lines로 변경
function gatherCustomerData(lines, customer) {
  const resultLines = [...lines];

  resultLines.push(["name", customer.name]);
  resultLines.push(["location", customer.location]);

  return resultLines;
}

console.log(reportLines({ name: "jw", location: "seoul" }));
