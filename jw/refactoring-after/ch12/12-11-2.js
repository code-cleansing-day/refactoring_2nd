class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

class Scroll extends CatalogItem {
  constructor(id, dataLastCleaned, catalogItem) {
    this._id = id;
    this._lastCleaned = dataLastCleaned;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._catalogItem.title;
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

const scroll = new Scroll(
  0,
  LocalDate.now(),
  new CatalogItem(0, "title", ["revered"])
);
