class Employee {
  #name;

  get name() {
    return this.#name;
  }
}

class Salesperson extends Employee {}

class Engineer extends Employee {}
