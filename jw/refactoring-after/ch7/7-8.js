/**
 * 외부에 위임되는 정보 숨기기
 * - Composition
 *    - 중개자
 *    - 위임
 */
class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  get manager() {
    return this.#manager;
  }
}

const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
