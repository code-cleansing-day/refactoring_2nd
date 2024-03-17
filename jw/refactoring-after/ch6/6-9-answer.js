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

  get year() {
    return this.#year;
  }

  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.baseRate - this.taxThreshold);
  }

  get baseCharge() {
    return this.baseRate * this.#quantity;
  }
}

export const reading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});
