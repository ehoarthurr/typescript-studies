// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Desctructuring from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

function App() {
  // 1 - variáveis
  const name: string = "Arthur";
  const age: number = 18;
  const isWorking: boolean = false;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Desctructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={["ts", "js"]}
      />
      <Desctructuring
        title="Segundo post"
        content="Mais outro conteúdo"
        commentsQty={5}
        tags={["python"]}
      />
      <State />
    </div>
  );
}

export default App;
