// 만약 name이 Employee와 Department에서 다르게 쓰인다면?
// 현재는 Party에서 name이 구현되어있기 때문에 조건이 있다면 Party가 조건에 따라 name을 구현하도록 변경해야한다.
// 이는 간단한 로직인 경우에는 문제가 되지 않지만, 그렇지 않은 경우에는 Party의 역할이 커지고 유연성이 떨어진다.
// interface를 사용하면 상속을 사용하지 않고 name을 구현할 수 있다.
class Party {
  #name;

  get name() {
    return this.#name;
  }

  constructor(name) {
    this.#name = name;
  }
}

class Employee extends Party {
  #id;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }

  getInfo() {
    return `id: ${this.#id}, name: ${this.name}, cost: ${this.#monthlyCost}`;
  }
}

class Department extends Party {
  #staff;
  constructor(name, staff) {
    super(name);
    this.#staff = staff;
  }

  getInfo() {
    return `name: ${this.name}, staff:: ${this.#staff.getInfo()}`;
  }
}

const ellie = new Employee("엘리", 123, 13);
const department = new Department("개발부서", ellie);
console.log(ellie.getInfo());
console.log(department.getInfo());
