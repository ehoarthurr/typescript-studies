class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

const arthurDanielson = new Person("Arthur", "Danielson");

console.log(arthurDanielson.fullName);
