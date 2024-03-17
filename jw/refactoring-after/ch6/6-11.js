function calcBasePrice(basePrice, quantity) {
  return basePrice * quantity;
}

function calcDiscountPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function getShippingCase(basePrice, shippingMethod) {
  return basePrice > shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase;
}

export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calcBasePrice(product.basePrice, quantity);
  const discount = calcDiscountPrice(product, quantity);
  const shippingPerCase = getShippingCase(basePrice, shippingMethod);
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price, "as function");

class Product {
  #basePrice;
  #discountRate;
  #discountThreshold;

  constructor({ basePrice, discountRate, discountThreshold }) {
    this.#basePrice = basePrice;
    this.#discountRate = discountRate;
    this.#discountThreshold = discountThreshold;
  }

  calcBasePrice(quantity) {
    return this.#basePrice * quantity;
  }

  calcDiscountPrice(quantity) {
    return (
      Math.max(quantity - this.#discountThreshold, 0) *
      this.#basePrice *
      this.#discountRate
    );
  }
}

class ShippingMethod {
  #discountThreshold;
  #feePerCase;
  #discountedFee;

  constructor({ discountThreshold, feePerCase, discountedFee }) {
    this.#discountThreshold = discountThreshold;
    this.#feePerCase = feePerCase;
    this.#discountedFee = discountedFee;
  }

  getShippingCase(basePrice) {
    return basePrice > this.#discountThreshold
      ? this.#discountedFee
      : this.#feePerCase;
  }
}

class Order {
  #product;
  #quantity;
  #shippingMethod;

  constructor(product, quantity, shippingMethod) {
    this.#quantity = quantity;
    this.#product = new Product(product);
    this.#shippingMethod = new ShippingMethod(shippingMethod);
  }

  getPrice() {
    const basePrice = this.#product.calcBasePrice(this.#quantity);
    const discount = this.#product.calcDiscountPrice(this.#quantity);
    const shippingPerCase = this.#shippingMethod.getShippingCase(basePrice);
    const shippingCost = this.#quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
  }
}

const order1 = new Order(product, 5, shippingMethod);

console.log(order1.getPrice(), "as class");
