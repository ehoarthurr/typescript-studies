function myDecorator() {
  console.log("iniciando decorator!");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log("terminando a execução do método");
  }
}

const myObj = new myClass();

myObj.testing();
