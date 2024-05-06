class Booking {
  #show;
  #date;

  #premiumDelegate;
  #privateBasePrice;

  constructor(show, date) {
    this.#show = show;
    this.#date = date;
  }

  get hasTalkback() {
    return this.#premiumDelegate
      ? this.#premiumDelegate.hasTalkback
      : this.#show.hasOwnProperty("talkback") && !this.isPeakDay;
  }

  get basePrice() {
    return this.#premiumDelegate
      ? this.#premiumDelegate.extendedBasePrice(result)
      : this.#privateBasePrice;
  }

  get hasDinner() {
    return this.#premiumDelegate ? this.#premiumDelegate.hasDinner : undefined;
  }

  #bePremium(extras) {
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }

  static createBooking(show, date) {
    return new Booking(show, date);
  }

  static createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date, extras);
    result.#bePremium(extras);
  }
}

class PremiumBookingDelegate {
  #host;
  #extras;
  constructor(host, extras) {
    this.#host = host;
    this.#extras = extras;
  }

  get hasTalkback() {
    return this.#host._show.hasOwnProperty("talkback");
  }
}

class PremiumBooking {
  #booking;

  constructor(booking, extras) {
    this.#booking = booking;
    this._extras = extras;
  }

  get hasTalkback() {
    return this.#booking._show.hasOwnProperty("talkback");
  }

  get basePrice() {
    return Math.round(this.#booking.basePrice + this._extras.PremiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
  }
}

const booking = new Booking(show, date);
const premiumBooking = new PremiumBooking(extras);
