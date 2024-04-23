/**
 * 다형성을 활용에 감동받아서 TS로도 작성해봄
 */

interface Bird {
  getSpeed(): number | null;
  getPlumage(): string;
}

class EuropeanSwallow implements Bird {
  getSpeed(): number {
    return 35;
  }
  getPlumage() {
    return "average";
  }
}

class AfricanSwallow implements Bird {
  private _numberOfCoconuts: number;

  constructor(data) {
    this._numberOfCoconuts = data?.numberOfCoconuts;
  }

  getSpeed(): number {
    return 40 - 2 * this._numberOfCoconuts;
  }

  getPlumage() {
    return this._numberOfCoconuts > 2 ? "tired" : "average";
  }
}

class NorwegianBlueParrot implements Bird {
  private _voltage: number;
  private _isNailed: boolean;

  constructor(data) {
    this._voltage = data?.voltage;
    this._isNailed = data?.isNailed;
  }

  getSpeed(): number {
    throw new Error("Method not implemented.");
  }

  getSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
  getPlumage() {
    return this._voltage > 100 ? "scorched" : "beautiful";
  }
}

class ExceptionBird implements Bird {
  getSpeed(): null {
    return null;
  }

  getPlumage() {
    return "unknown";
  }
}
