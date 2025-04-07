interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpower: string[];
}

const arthur: Human = {
  name: "Arthur",
  age: 18,
};

console.log(arthur);

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpower: ["Kamehameha", "Genki Dama"],
};

console.log(goku);
