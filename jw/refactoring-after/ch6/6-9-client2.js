import { getReading, calcBaseRate } from "./6-9.js";

const aReading = getReading();
const base = calcBaseRate(aReading.month, aReading.year) * aReading.quantity;

function taxThreshold(year) {
  return 0.1;
}

function getMaxTaxCharge(maxTax) {
  return Math.max(0, maxTax);
}

export const taxableCharge = getMaxTaxCharge(
  base - taxThreshold(aReading.year)
);

console.log(taxableCharge, "taxableCharge");
