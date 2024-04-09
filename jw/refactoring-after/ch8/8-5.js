const states = ["MA", "CA", "NY"];

const checkIsStateMA = (states) => {
  for (const state of states) {
    if (state === "MA") {
      return true;
    }
  }
  return false;
};

console.log(checkIsStateMA(states));
console.log(states.includes("MA"));
// => true
