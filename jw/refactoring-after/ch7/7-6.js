// export class TrackingInformation {
//   #shippingCompany;
//   #trackingNumber;
//   constructor(trackingNumber, shippingCompany) {
//     this.#trackingNumber = trackingNumber;
//     this.#shippingCompany = shippingCompany;
//   }

//   get shippingCompany() {
//     return this.#shippingCompany;
//   }

//   set shippingCompany(arg) {
//     this.#shippingCompany = arg;
//   }

//   get trackingNumber() {
//     return this.#trackingNumber;
//   }

//   set trackingNumber(arg) {
//     this.#trackingNumber = arg;
//   }

//   get display() {
//     return `${this.shippingCompany}: ${this.trackingNumber}`;
//   }

//   updateShippingCompany(arg) {
//     this.#shippingCompany = arg;
//   }

//   updateTrackingNumber(arg) {
//     this.#trackingNumber = arg;
//   }
// }

export class Shipment {
  #trackingNumber;
  #shippingCompany;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get trackingInfo() {
    return `${this.#shippingCompany}: ${this.#trackingNumber}`;
  }

  get trackingInformation() {
    return {
      trackingNumber: this.#trackingNumber,
      shippingCompany: this.#shippingCompany,
    };
  }

  updateShippingCompany(company) {
    this.#shippingCompany = company;
  }
}

const shipment = new Shipment(999, "Maersk");
console.log(shipment.trackingInfo);

shipment.updateShippingCompany("COSCO");
console.log(shipment.trackingInfo);
