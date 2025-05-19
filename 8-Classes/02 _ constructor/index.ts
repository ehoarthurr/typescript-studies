class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new NewUser("João", 22);

console.log(joao);

// const pedro = new NewUser(12, 12);
