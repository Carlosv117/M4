import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const port = 3000;

const users = [];

app.post("/user", (req, res) => {
  console.log(req.body);
  const { email, name } = req.body;

  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return res.status(400).json({
      error: "This email is already being used",
    });
  }

  users.push({
    email,
    name,
    id: uuidv4(),
  });

  return res.status(201).send();
});

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/", (req, res) => {
  res.send("Hello Word!!!");
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

// //Rotas
// app.get("/carros", (req, res) => {
//   res.send("lista de carros");
// });

// app.get("/motos", (req, res) => {
//   res.send("lista de motos");
// });

// app.get("/bikes", (req, res) => {
//   res.send("lista de bikes");
// });
