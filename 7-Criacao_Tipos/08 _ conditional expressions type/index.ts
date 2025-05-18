interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 123;
// const someVar2: myType = "123";

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;
