class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");

console.log(fusca);

console.log(fusca.wheels);

fusca.name = "Fusca Turbo";

// fusca.wheels = 5;
