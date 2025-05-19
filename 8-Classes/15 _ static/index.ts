//

class StaticMembers {
  static prop = "Teste static";

  static staticMethod() {
    console.log("Esse é um método estático");
  }
}

console.log(StaticMembers.prop);

StaticMembers.staticMethod();
