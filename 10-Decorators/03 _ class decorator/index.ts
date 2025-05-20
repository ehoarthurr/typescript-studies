function classDec(constructor: Function) {
  console.log(constructor.name);
  if (constructor.name === "User") {
    console.log("Criando usuário!");
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const matheus = new User("Matheus");

console.log(matheus);
