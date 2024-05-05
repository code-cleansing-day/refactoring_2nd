class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback() {
    return this._show.hasOwnProperty("talkback") && !this.isPeakDay;
  }

  get basePrice() {
    let result = this._show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return result;
  }

  get isPeakDay() {}
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
