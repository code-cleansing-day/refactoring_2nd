/**
 * **컬렉션 캡슐화**
 */
export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses];
  }

  addCourses(course) {
    this.#courses.push(course);
  }

  removeCourses(course, runIfAbsent) {
    const result = this.#courses.filter((c) => c.name !== course.name);
    if (result.length === this.#courses.length) {
      runIfAbsent();
    }

    this.#courses = result;
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");

ellie.addCourses(new Course("리팩토링1", true));
ellie.addCourses(new Course("리팩토링2", true));
ellie.addCourses(new Course("리팩토링3", true));

ellie.removeCourses(new Course("리팩토링2"), () => {
  console.log("해당 강의가 없습니다.");
});

console.log(ellie.courses.length);
