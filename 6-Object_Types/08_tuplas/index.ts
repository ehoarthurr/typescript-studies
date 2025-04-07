type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Arthur", 18];

console.log(anotherUser[0]);

anotherUser[0] = "João";

console.log(anotherUser[0]);

// anotherUser[1] = "teste";
