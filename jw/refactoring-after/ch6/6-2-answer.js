// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

console.log("예제 1", rating({ numberOfLateDeliveries: 6 }));

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}

console.log("예제 2", reportLines({ name: "jw", location: "seoul" }));
