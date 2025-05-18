type Character = {
  name: string;
  age: number;
  hasDriveLicense: boolean;
};

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`;
}

const myChar: Character = {
  name: "Matheus",
  age: 30,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// console.log(showCharName(myChar, "teste"));