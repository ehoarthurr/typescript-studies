// 1 - numbers
let x: number = 10;

console.log(x);

x = 16;
console.log(typeof x);

const y: number = 15.585858;

console.log(y);
console.log(y.toPrecision(3));

// 2 - string
const firstName: string = "Arthur";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Danielson";

fullName = firstName + " " + lastName;

console.log(fullName);
console.log(typeof fullName);

// 3 - boolean
let a: boolean = false;

console.log(a);
console.log(typeof a);

a = true;

console.log(a);

// 4 - inference e annotation
const ann: string = "Teste";

let inf = "Teste";

// ann = 1
// inf = 1

/*
    tsc ./index.ts
    tsc -init
    tsc -w
*/
