const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("App rodando");
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

//Rotas
app.get("/carros", (req, res) => {
  res.send("lista de carros");
});

app.get("/motos", (req, res) => {
  res.send("lista de motos");
});

app.get("/bikes", (req, res) => {
  res.send("lista de bikes");
});
