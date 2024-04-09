export function reportYoungestAgeAndTotalSalary2(people) {
  const youngest = Math.min(...people.map((p) => p.age));
  const totalSalary = people.reduce((total, p) => total + p.salary, 0);

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}
export function reportYoungestAgeAndTotalSalary(people) {
  let youngest = Infinity;
  let totalSalary = 0;

  for (const person of people) {
    if (person.age < youngest) youngest = person.age;
  }

  for (const person of people) {
    totalSalary += person.salary;
  }

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

const people = [
  { age: 20, salary: 200 },
  { age: 10, salary: 100 },
  { age: 30, salary: 300 },
];

console.log(reportYoungestAgeAndTotalSalary2(people));
console.log(reportYoungestAgeAndTotalSalary(people));
