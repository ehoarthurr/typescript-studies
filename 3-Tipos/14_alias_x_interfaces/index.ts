interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: "Arthur", age: 30 };

console.log(somePerson);

type personType = {
  name: string;
};

// type personType = {
//   age: number;
// };
