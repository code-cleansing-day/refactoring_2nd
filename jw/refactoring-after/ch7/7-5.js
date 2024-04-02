class PhoneNumber {
  #areaCode;
  #number;
  constructor(areaCode, number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  set areaCode(arg) {
    this.#areaCode = arg;
  }

  get number() {
    return this.#number;
  }

  set number(arg) {
    this.#number = arg;
  }

  toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

class Person {
  #name;
  #phoneNumber;
  constructor(name, phoneNumber) {
    this.#name = name;
    this.#phoneNumber = phoneNumber;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get officeAreaCode() {
    return this.#phoneNumber.areaCode;
  }

  get officeNumber() {
    return this.#phoneNumber.number;
  }

  get telephoneNumber() {
    return this.#phoneNumber.toString();
  }
}

const telephoneNumber = new PhoneNumber("010", "12345678");
const person = new Person("엘리", telephoneNumber);

console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
