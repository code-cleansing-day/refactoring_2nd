export function price(order) {
  const 기본가격 = order.quantity * order.itemPrice;
  const 할인가격 = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const 배송비 = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return 기본가격 - 할인가격 + 배송비;
}

console.log("order", price({ quantity: 600, itemPrice: 1000 }));
