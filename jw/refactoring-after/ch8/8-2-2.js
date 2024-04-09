class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }
}

class AccountType {
  _name = nameString;
  _interestRate = interestRate;

  get interestRate() {
    return this._interestRate;
  }

  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
}
