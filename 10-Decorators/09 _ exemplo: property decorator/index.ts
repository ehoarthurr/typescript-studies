function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos.`);
        return;
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let pedro = new Admin("pedroadmin12345");
let lee = new Admin("lee");

console.log(lee);
