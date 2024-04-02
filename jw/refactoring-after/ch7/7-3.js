/**
 * Order class의 역할과 책임
 * Priority class의 역할과 책임
 */
export class Order {
  constructor(priority) {
    this.priority = priority;
  }

  checkIsHighPriority() {
    return this.priority.higherThan(new Priority("normal"));
  }
}

class Priority {
  #value;
  constructor(value) {
    if (!Priority.legalValues().includes(value)) {
      throw new Error(`<${value}> is invalid for Priority`);
    }
    this.#value = value;
  }

  get index() {
    return Priority.legalValues().findIndex((v) => v === this.#value);
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }

  equals(other) {
    return this.index === other.index;
  }

  higherThan(other) {
    return this.index > other.index;
  }
}

const orders = [
  new Order(new Priority("low")),
  new Order(new Priority("rush")),
  new Order(new Priority("high")),
];

const highPriorityCount = orders.filter((o) => o.checkIsHighPriority()).length;

console.log(highPriorityCount);
