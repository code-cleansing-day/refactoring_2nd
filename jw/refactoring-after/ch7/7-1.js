// const organization = {
//   name: "Acme Gooseberries",
//   country: "GB",
// };

// const newOrg = {
//   ...organization,
//   name: "Dream Coding",
// };

class Organization {
  #data;
  #name;
  #country;
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  get rawData() {
    return { name: this.#name, country: this.#country };
  }
}

// console.log(organization);
// console.log(newOrg);

const Acme = new Organization({ name: "Acme Gooseberries", country: "GB" });
const DreamCoding = new Organization({ name: "Dream Coding", country: "KR" });

console.log(Acme.name);
console.log(DreamCoding.name);
console.log(DreamCoding.rawData);

// organization.name = "Dream Coding";
// console.log(organization.name);
// console.log(organization.country);
