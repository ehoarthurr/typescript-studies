let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];

// myArray[3] = "Mamão";

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);

// myArray[0] = "teste";
