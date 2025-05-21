// 1 - iniciando projeto
// console.log("Express + TS");

// 2 - init express
import express, { Request, Response } from "express";

const app = express();

// 3 - rota com POST
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// 3 - rota com POST
app.post("/api/produtos", (req, res) => {
  console.log(req.body);

  res.send("Produto adicionado!");
});

// 4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  // object literals
  const responses = {
    POST: "Inseriu algum registro",
    GET: "Leu algum registro",
  };

  res.send(
    responses[req.method as keyof typeof responses] ||
      "Não podemos realizar essa operação!"
  );
});

// 5 - interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  res.send("Utilizando as interfaces");
});

// 6 - enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
  res.json({
    name: "Shirt",
    price: 30,
    color: "Blue",
    sizes: ["P", "M", "G"],
  });
});

app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
});
