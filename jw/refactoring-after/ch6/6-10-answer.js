import _ from "lodash";

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original) {
  // const result = { ...original }; // Object.assign({}, original); 얕은 복사 이슈 발생
  const result = _.cloneDeep(original);

  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = calculateTaxableCharge(result);

  return result;
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}

function calculateTaxableCharge(reading) {
  return Math.max(0, reading.baseCharge - taxThreshold(reading.year));
}

function taxThreshold(year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
