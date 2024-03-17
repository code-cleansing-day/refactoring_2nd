const reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
};

export function getReading() {
  return reading;
}

export function calcBaseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

export class Reading {
  #customer;
  #quantity;
  #month;
  #year;

  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  #calcBaseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  calcBaseCharge() {
    return this.#calcBaseRate() * this.#quantity;
  }
}
