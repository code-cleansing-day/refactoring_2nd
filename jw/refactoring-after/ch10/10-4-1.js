// export function plumages(birds) {
//   return new Map(birds.map((b) => [b.name, plumage(b)]));
// }
// export function speeds(birds) {
//   return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
// }
// export function plumage(bird) {
//   switch (bird.type) {
//     case "EuropeanSwallow":
//       return "average";
//     case "AfricanSwallow":
//       return bird.numberOfCoconuts > 2 ? "tired" : "average";
//     case "NorwegianBlueParrot":
//       return bird.voltage > 100 ? "scorched" : "beautiful";
//     default:
//       return "unknown";
//   }
// }
// export function airSpeedVelocity(bird) {
//   switch (bird.type) {
//     case "EuropeanSwallow":
//       return 35;
//     case "AfricanSwallow":
//       return 40 - 2 * bird.numberOfCoconuts;
//     case "NorwegianBlueParrot":
//       return bird.isNailed ? 0 : 10 + bird.voltage / 10;
//     default:
//       return null;
//   }
// }

// interface Bird {
//   getSpeedVelocity(): number;
//   getPlumage(): string;
// }
class Bird {
  constructor(data) {
    this.name = data?.name;
    this.numberOfCoconuts = data?.numberOfCoconuts;
    this.voltage = data?.voltage;
  }
}

class EuropeanSwallow extends Bird {
  getSpeedVelocity() {
    return 35;
  }
  getPlumage() {
    return "average";
  }
}

class AfricanSwallow extends Bird {
  getSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
  getPlumage() {
    return this.numberOfCoconuts > 2 ? "tired" : "average";
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this.isNailed = data?.isNailed;
  }

  getSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
  getPlumage() {
    return this.voltage > 100 ? "scorched" : "beautiful";
  }
}

class ExceptionBird extends Bird {
  getSpeedVelocity() {
    return null;
  }
  getPlumage() {
    return "unknown";
  }
}

export function plumages(birds) {
  return new Map(birds.map((b) => [b.name, b.getPlumage()]));
}
export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.getSpeedVelocity()]));
}

const birds = [
  new EuropeanSwallow({
    name: "EuropeanSwallow",
    numberOfCoconuts: 1,
    voltage: 100,
  }),
  new AfricanSwallow({
    name: "AfricanSwallow",
    numberOfCoconuts: 3,
    voltage: 100,
  }),
  new NorwegianBlueParrot({
    name: "NorwegianBlueParrot",
    numberOfCoconuts: 1,
    voltage: 100,
    isNailed: false,
  }),
  new ExceptionBird({
    name: "bird",
    type: "ExceptionBird",
  }),
];

const result = plumages(birds);
console.log(result);
