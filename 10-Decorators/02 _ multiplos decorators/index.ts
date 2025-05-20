function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou a.");
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou b.");
  };
}

function c() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou c.");
  };
}

class MultipleDecorators {
  @c()
  @a()
  @b()
  testing() {
    console.log("terminando execução");
  }
}

const multiple = new MultipleDecorators();

multiple.testing();
