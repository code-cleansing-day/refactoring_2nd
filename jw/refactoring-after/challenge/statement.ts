import { Invoice } from "./Invoice";
import { ComedyPlay, ExceptionalPlay, PlayT, TragedyPlay } from "./Play";

/**
 * **내가 생각하는 개선 포인트**
 * - [x] totalAmount 흐름 파악이 어려움 + 불변성 보장 안됨
 * - statement(계산서) 함수가 너무 많은 일을 하고 있음
 * - [x] for문을 map으로 변경
 *  - for문 안에서 하는 일: thisAmount, volumeCredits 계산
 *  - [x] 각각 일을 나눠서 할 수 있지 않을까?
 *    -> thisAmount 계산: play.calculateAmount(performance)
 *    -> volumeCredits 계산: play.calculateVolumeCredits(performance)
 * - [x] play 다형성 개선
 *    -> playFactory 함수를 만들어서 play 생성
 * - [x] perf 약어가 이해하기 어려움
 *   -> performance로 변경
 * - [x] format 함수를 따로 빼서 사용
 *   -> private로 캡슐화
 */
export class StatementManager {
  private invoice: Invoice;
  private plays: Record<string, PlayT>;

  constructor(invoice: Invoice, plays: Record<string, PlayT>) {
    this.invoice = invoice;
    this.plays = plays;
  }

  private getTotalAmount() {
    const amountList = this.invoice.performances.map((performance) => {
      const play = this.playFactory(this.plays[performance.playID]);
      return play.calculateAmount(performance);
    });
    const totalAmount = amountList.reduce(
      (prevTotalAmount, thisAmount) => prevTotalAmount + thisAmount,
      0
    );

    return totalAmount;
  }

  private getVolumeCredits() {
    const volumeCreditList = this.invoice.performances.map((performance) => {
      const play = this.playFactory(this.plays[performance.playID]);

      return (
        Math.max(performance.audience - 30, 0) +
        (play.type === "comedy" ? Math.floor(performance.audience / 5) : 0)
      );
    });

    return volumeCreditList.reduce(
      (prevVolumeCredits, volumeCredits) => prevVolumeCredits + volumeCredits,
      0
    );
  }

  // 청구 내역을 출력한다.
  getStatement() {
    let result = `청구 내역 (고객명: ${this.invoice.customer})\n`;

    for (const performance of this.invoice.performances) {
      const play = this.playFactory(this.plays[performance.playID]);
      const thisAmount = play.calculateAmount(performance);

      // 청구 내역을 출력한다.
      result += `  ${play.name}: ${this.format(thisAmount / 100)} (${
        performance.audience
      }석)\n`;
    }

    result += `총액: ${this.format(this.getTotalAmount() / 100)}\n`;
    result += `적립 포인트: ${this.getVolumeCredits()}점\n`;
    return result;
  }

  private playFactory(play: PlayT) {
    switch (play.type) {
      case "tragedy":
        return new TragedyPlay(play);
      case "comedy":
        return new ComedyPlay(play);
      default:
        throw new ExceptionalPlay(play);
    }
  }

  private get format() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format;
  }
}
