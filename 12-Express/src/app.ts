// 1 - Iniciando projeto
// console.log("Express + TS");

// 2 - Init express
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
});
