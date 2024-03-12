export default class Book {
  #reservations;
  constructor(reservations = []) {
    this.#reservations = reservations;
  }

  addReservation(customer) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
