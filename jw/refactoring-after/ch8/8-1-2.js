export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) {
      result += this.type.overdraftCharge(this._daysOverdrawn);
    }
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === "Premium";
  }

  overdraftCharge(daysOverdrawn) {
    if (!this.isPremium) return daysOverdrawn * 1.75;

    const baseCharge = 10;
    return daysOverdrawn <= 7
      ? baseCharge
      : baseCharge + (daysOverdrawn - 7) * 0.85;
  }
}

console.log(new Account(new AccountType("Premium"), 10).bankCharge);
