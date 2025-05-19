class User {
  name!: string;
  age!: number;
}

const matheus = new User();

console.log(matheus);

matheus.name = "Matheus";
// matheus.job = "Programmer";

console.log(matheus);
