export class Customer {
  #contract;
  #name;

  get discountRate() {
    return this.#contract.discountRate;
  }

  constructor(name, contract) {
    this.#name = name;
    this.#contract = contract;
  }

  becomePreferred() {
    this.#contract.discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#contract.discountRate));
  }
}

class CustomerContract {
  #startDate;
  #discountRate;

  get discountRate() {
    return this.#discountRate;
  }

  set discountRate(arg) {
    this.#discountRate = arg;
  }

  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }
}

const Deny = new Customer("Deny", new CustomerContract(new Date(), 0.1));

console.log(Deny.discountRate);
Deny.becomePreferred();
console.log(Deny.discountRate);
Deny.becomePreferred();
console.log(Deny.discountRate);
