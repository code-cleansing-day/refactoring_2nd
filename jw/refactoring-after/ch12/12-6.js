class Employee {
  #name;

  get type() {
    return "employee";
  }

  constructor(name) {
    this.#name = name;
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  static createEmployee(name, type) {
    switch (type) {
      case "engineer":
        return new Engineer(name);
      case "manager":
        return new Manager(name);
      case "salesperson":
        return new Salesperson(name);
      default:
        throw new Error(`사원 유형이 잘못됐습니다: ${type}`);
    }
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}

class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

// const ellie = new Engineer("엘리");
// const bob = new Manager("밥");

// console.log(ellie.toString());
// console.log(bob.toString());

// const response = await fetch('/employees');
// const employees = await response.json();

const employees = [
  { name: "엘리", type: "engineer" },
  { name: "밥", type: "manager" },
  { name: "철수", type: "salesperson" },
];

const newEmployee = employees.map((employee) => {
  return Employee.createEmployee(employee.name, employee.type);
});

console.log(newEmployee);
