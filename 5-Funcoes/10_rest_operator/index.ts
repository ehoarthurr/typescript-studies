function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
// console.log(sumAll("teste"));
