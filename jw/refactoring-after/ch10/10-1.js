const checkIsSummer = (date, plan) => {
  const beforeSummer = date.isBefore(plan.summerStart);
  const afterSummer = date.isAfter(plan.summerEnd);
  return beforeSummer || afterSummer;
};

function calculateSummerCharge(quantity, plan) {
  return quantity * plan.summerRate;
}

function calculateRegularCharge(quantity, plan) {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}

function calculateCharge(date, quantity, plan) {
  return checkIsSummer(date, plan)
    ? calculateSummerCharge(quantity, plan)
    : calculateRegularCharge(quantity, plan);
}

class ChargeSystem {
  #date;
  #quantity;
  #plan;
  constructor(date, quantity, plan) {
    this.#date = date;
    this.#quantity = quantity;
    this.#plan = plan;
  }

  charge() {
    return calculateCharge(this.#date, this.#quantity, this.#plan);
  }

  calculateSummerCharge() {
    return this.#quantity * this.#plan.summerRate;
  }

  calculateRegularCharge() {
    return (
      this.#quantity * this.#plan.regularRate + this.#plan.regularServiceCharge
    );
  }

  checkIsSummer() {
    const beforeSummer = this.#date.isBefore(this.#plan.summerStart);
    const afterSummer = this.#date.isAfter(this.#plan.summerEnd);
    return beforeSummer || afterSummer;
  }
}

const chargeSystem = new ChargeSystem(date, quantity, plan);
