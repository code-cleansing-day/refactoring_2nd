import { Performance } from "../Performance";

export type PlayT = {
  name: string;
  type: string;
};

export interface PlayI {
  calculateAmount(performance: Performance): number;
}

export class TragedyPlay implements PlayI, PlayT {
  static readonly BASE_AMOUNT = 40_000;

  name: string;
  type: string;

  constructor(data: PlayT) {
    this.name = data.name;
    this.type = data.type;
  }

  calculateAmount(performance: Performance) {
    const extraAmount = this.checkIsAudienceMoreThan(performance)
      ? 1000 * (performance.audience - 30)
      : 0;

    return TragedyPlay.BASE_AMOUNT + extraAmount;
  }

  private checkIsAudienceMoreThan(performance: Performance) {
    return performance.audience > 30;
  }
}

export class ComedyPlay implements PlayI {
  static readonly BASE_AMOUNT = 30_000;

  name: string;
  type: string;

  constructor(data: PlayT) {
    this.name = data.name;
    this.type = data.type;
  }

  calculateAmount(performance: Performance) {
    const extraAmountByAudience = this.checkIsAudienceMoreThan(performance)
      ? 10000 + 500 * (performance.audience - 20)
      : 0;

    return (
      ComedyPlay.BASE_AMOUNT +
      extraAmountByAudience +
      300 * performance.audience
    );
  }

  private checkIsAudienceMoreThan(performance: Performance) {
    return performance.audience > 20;
  }
}

export class ExceptionalPlay implements PlayI {
  name: string;
  type: string;

  constructor(data: PlayT) {
    this.name = data.name;
    this.type = data.type;
  }

  calculateAmount(performance: Performance): number {
    throw new Error(`알 수 없는 장르: ${this.type}`);
  }
}
