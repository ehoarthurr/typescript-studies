// 1 - iniciando projeto
// console.log("Express + TS");

// 2 - init express
import express, { Request, Response, NextFunction } from "express";

const app = express();

// 3 - rota com POST
app.use(express.json());

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

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

// 7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    const product = {
      id: 1,
      name: "Boné",
      price: 10,
    };

    res.json(product);
    return;
  }

  res.send("Produto não encontrado!");
});

// 8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;
  const reviewId = req.params.reviewId;

  res.send(`Acessando a review ${reviewId} do produto ${id}`);
});

// 9 - router handler
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com id: ${req.params.id}`);

  res.send("O usuário foi encontrado!");
}

app.get("/api/user/:id", getUser);

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir!");
    next();
  } else {
    console.log("Acesso restrito");
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  res.json({
    msg: "Bem-vindo à área administrativa!",
  });
});

// 12 - req e res com generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    // console.log(`Name: ${req.params.teste}`);
    console.log(`Name: ${req.params.name}`);

    res.send({
      status: true,
    });
  }
);

// 13 - tratando erros
app.get("/api/error", (req: Request, res: Response) => {
  try {
    throw new Error("Algo de errado!");
  } catch (e: any) {
    res.status(500).json({ msg: e.message });
  }
});

app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
});
