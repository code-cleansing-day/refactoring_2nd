import { getReading, calcBaseRate, Reading } from "./6-9.js";

const aReading = getReading();

const baseCharge =
  calcBaseRate(aReading.month, aReading.year) * aReading.quantity;
console.log(baseCharge);

const reading2 = new Reading(reading);

console.log(reading2.calcBaseCharge());
