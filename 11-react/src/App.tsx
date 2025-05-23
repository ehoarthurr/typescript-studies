import { createContext } from "react";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Desctructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 10 - utilizando contexto
import Context from "./components/Context";
import Destructuring from "./components/Destructuring";

// 8 - type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variáveis
  const name: string = "Arthur";
  const age: number = 18;
  const isWorking: boolean = false;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "Opa";

  // const testandoFixed: fixed = "asd"
  let testandoFixed: fixed = "Isso";

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.TS}
        />
        <Desctructuring
          title="Segundo post"
          content="Mais outro conteúdo"
          commentsQty={5}
          tags={["python"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na segunda variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
