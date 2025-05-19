abstract class AbstractClass {
  abstract showName(): void;
}

// const newObj = new AbstractClass();

class AbstractExemple extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome é: ${this.name}`);
  }
}

const newAbstractObject = new AbstractExemple("José");

newAbstractObject.showName();
