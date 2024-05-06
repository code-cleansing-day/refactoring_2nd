/**
 * 상속과 컴포지션 활용 고민해보기
 * - 상속을 사용하면 코드 재사용성이 높아지지만, 클래스 간의 관계가 복잡해질 수 있다.
 * - 컴포지션을 사용하면 클래스 간의 관계를 단순하게 유지할 수 있지만, 코드 재사용성이 떨어질 수 있다.
 *
 * 둘다 장단점이 있고, 어느 것이 더 좋은 방법인지는 상황에 따라 다르다.
 */

// function createBird(bird) {
//   switch (bird.type) {
//     case "유럽 제비":
//       return new EuropeanSwallow(bird, this);
//     case "아프리카 제비":
//       return new AfricanSwallow(bird, this);
//     case "노르웨이 파랑 앵무":
//       return new NorwegianBlueParrot(bird, this);
//     default:
//       return new Bird(bird, this);
//   }
// }

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._specialPlumage = this.selectSpecialPlumage(data);
  }

  get name() {
    return this._name;
  }

  get plumage() {
    return this._specialPlumage.plumage;
  }

  get airSpeedVelocity() {
    return this._specialPlumage.airSpeedVelocity;
  }

  selectSpecialPlumage(data) {
    switch (data.type) {
      case "유럽 제비":
        return new EuropeanSwallow(data, this);
      case "아프리카 제비":
        return new AfricanSwallow(data, this);
      case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrot(data, this);
      default:
        return new Bird(data, this);
    }
  }
}

class EuropeanSwallow extends Bird {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor(data) {
    super(data);

    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);

    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get plumage() {
    if (this._voltage > 100) {
      return "그을렸다";
    } else {
      return this._plumage || "예쁘다";
    }
  }

  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}
