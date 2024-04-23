/**
 * 아주 재미있는 예시
 * - 다형성
 * - 상속
 * - TS의 interface와 class를 사용하면 더 좋을 것 같다.
 */

class Hotel {
  constructor() {
    this.rooms = [];
  }

  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber);
  }

  emptyRoom(roomNumber) {
    this.rooms[roomNumber] = new EmptyRoom(roomNumber);
  }

  cleanRooms() {
    this.rooms.forEach((room) => room.clean());
  }
}

class Room {
  constructor(roomNumber) {
    this._number = roomNumber;
  }

  get number() {
    return this._number;
  }

  clean() {
    console.log(`Room ${this.number} is cleaned.`);
  }
}

class EmptyRoom extends Room {
  clean() {
    console.log(`Room ${this.number} is empty.`);
  }
}

const hotel = new Hotel();
hotel.addRoom(0);
hotel.addRoom(1);
console.log(hotel.rooms);
hotel.cleanRooms();
hotel.emptyRoom(1);
console.log(hotel.rooms);
hotel.cleanRooms();

export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "unknown"
      ? new UnknownCustomer()
      : new Customer(this._customer);
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return "occupant";
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  return aCustomer.name;
}
