const getDeliveryPrice = (order) => {
  return Math.min(order.quantity * order.itemPrice * 0.1, 100);
};

const getQuantityDiscount = (order) => {
  return Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
};

const getBasePrice = (order) => {
  return order.quantity * order.itemPrice;
};

// FIXME: 함수 이름이 마음에 들지 않음. 함수의 목적을 더 잘 드러내는 이름으로 변경
// price -> calculateTotalPrice
export function calculateTotalPrice(order) {
  const 기본가격 = getBasePrice(order);
  const 수량할인 = getQuantityDiscount(order);
  const 배송비 = getDeliveryPrice(order);

  return 기본가격 - 수량할인 + 배송비; // 주석 없이도 이해하기 쉬워짐
}

// 객체는 이미 자신의 역할을 수행할 수 있는 데이터를 알고 있다. 모듈로 분리하면 더 좋을듯.
// 함수로 하든 class로 하든 캡슐화 가능
// 함수가 어디서 굴러다니지 않는다.
// 함수 내부로직을 숨기고, 함수를 호출하는 코드에게 필요한 정보만 제공할 수 있다.
const calculateTotalPriceModule = (order) => {
  const getDeliveryPrice = () => {
    return Math.min(order.quantity * order.itemPrice * 0.1, 100);
  };

  const getQuantityDiscount = () => {
    return Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  };

  const getBasePrice = () => {
    return order.quantity * order.itemPrice;
  };

  const calculateTotalPrice = () => {
    const 기본가격 = getBasePrice();
    const 수량할인 = getQuantityDiscount();
    const 배송비 = getDeliveryPrice();

    return 기본가격 - 수량할인 + 배송비;
  };

  return {
    calculateTotalPrice,
  };
};

class Order {
  #quantity;
  #price;

  constructor(quantity, price) {
    this.#quantity = quantity;
    this.#price = price;
  }

  #getDeliveryPrice() {
    return Math.min(this.#quantity * this.#price * 0.1, 100);
  }

  #getQuantityDiscount() {
    return Math.max(0, this.#quantity - 500) * this.#price * 0.05;
  }

  #getBasePrice() {
    return this.#quantity * this.#price;
  }

  calculateTotalPrice() {
    const 기본가격 = this.#getBasePrice();
    const 수량할인 = this.#getQuantityDiscount();
    const 배송비 = this.#getDeliveryPrice();

    return 기본가격 - 수량할인 + 배송비;
  }
}

console.log(
  calculateTotalPriceModule({
    quantity: 600,
    itemPrice: 1000,
  }).calculateTotalPrice()
);

console.log(new Order(600, 1000).calculateTotalPrice());
