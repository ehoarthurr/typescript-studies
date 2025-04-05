function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("X é um número");
  }
}

doSomething([1, 2, 3]);
doSomething(5);
