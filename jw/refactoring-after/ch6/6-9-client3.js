import { getReading, calcBaseRate } from "./6-9.js";

const aReading = getReading();

function calculateBaseCharge(aReading) {
  return calcBaseRate(aReading.month, aReading.year) * aReading.quantity;
}

const basicChargeAmount = calculateBaseCharge(aReading);

console.log(basicChargeAmount, "basicChargeAmount");
