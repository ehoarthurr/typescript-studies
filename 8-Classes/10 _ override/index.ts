class Base {
  someMethod() {
    console.log("alguma coisa");
  }
}

class Nova extends Base {
  someMethod() {
    console.log("testando outra coisa");
  }
}

const myObject = new Nova();

myObject.someMethod();
