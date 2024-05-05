class Person {
  #name;
  #genderCode;
  constructor(name, gender) {
    this.#name = name;
    this.#genderCode = gender;
  }

  get name() {
    return this.#name;
  }

  get genderCode() {
    return this.#genderCode;
  }

  get isMale() {
    return "M" === this.#genderCode;
  }
}

// class Male extends Person {
//   get genderCode() {
//     return "M";
//   }
// }

// class Female extends Person {
//   get genderCode() {
//     return "F";
//   }
// }

function loadFromInput(data) {
  return data.map(({ name, gender }) => new Person(name, gender));
}

const people = loadFromInput([
  { name: "엘리", gender: "F" },
  { name: "철수", gender: "M" },
  { name: "밥", gender: "M" },
]);
const numberOfMales = people.filter((p) => p.isMale).length;
console.log(numberOfMales);
