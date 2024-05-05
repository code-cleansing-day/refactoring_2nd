class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}

const engineer = new Engineer();
