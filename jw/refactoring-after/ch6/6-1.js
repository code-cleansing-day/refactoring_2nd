const calculateOutstanding = (orders) => {
  return orders.reduce((prev, curr) => prev + curr.amount, 0);
};

const recordDueDate = (today) => {
  const dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
  return dueDate;
};

const printDetails = (customer, outstanding, dueDate) => {
  console.log(`name: ${customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${dueDate.toLocaleDateString()}`);
};

export function printOwing(invoice) {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // FIXME: 여기는 너무 선언적이다.
  // calculate outstanding
  // for (const o of invoice.orders) {
  //   outstanding += o.amount;
  // }
  const outstanding = calculateOutstanding(invoice.orders);

  // record due date
  const today = new Date();
  // FIXME: 보장되어있지 않은 객체 property 추가 -> 차라리 새로운 객체를 생성하는게 나을듯?
  const invoiceWithDueDate = { ...invoice, dueDate: recordDueDate(today) };

  // print details
  printDetails(invoice.customer, outstanding, invoiceWithDueDate.dueDate);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);

// invoice 내 정보로 모든 동작을 처리할 수 있기때문에 모듈로 분리하는 게 더 나을 수도.
class Invoice {
  #orders;
  #customer;
  constructor(orders, customer) {
    this.#orders = orders;
    this.#customer = customer;
  }

  #calculateOutstanding() {
    return this.#orders.reduce((prev, curr) => prev + curr.amount, 0);
  }

  #recordDueDate(today) {
    return new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
  }

  #printDetails(outstanding, dueDate) {
    console.log(`name: ${this.#customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${dueDate.toLocaleDateString()}`);
  }

  printOwing() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");

    const outstanding = this.#calculateOutstanding();
    const today = new Date();
    const dueDate = this.#recordDueDate(today);

    this.#printDetails(outstanding, dueDate);
  }
}

const invoiceInstance = new Invoice(invoice.orders, invoice.customer);

// 외부에 공개되어야하는 메서드는 printOwing 뿐이므로, 캡슐화
invoiceInstance.printOwing();
