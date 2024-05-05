import { strict as assert } from "node:assert";

/**
 * assert 추가
 * - assert 함수를 사용하여 입력값이 유효한지 검사
 * - 처음보는 케이스여서 신기
 * - 안정성 검토후 사용해도 좋을듯
 * - 생으로 사용하기 보다는, 에러가 났을 때 bug report 하고, 에러나지 않는 케이스로 변경해주고 사용하는게 좋을듯
 */
class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(-1); // 100
