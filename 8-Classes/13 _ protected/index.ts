class E {
  protected x = 10;

  protected protectedMethod() {
    console.log("Esse método é protegido");
  }
}

class F extends E {
  showX() {
    console.log("X: ", this.x);
  }

  showProtectedMethod() {
    this.protectedMethod();
  }
}

const fInstance = new F();

// console.log(fInstance.x)

fInstance.showX();

// fInstance.protectedMethod();

fInstance.showProtectedMethod();
