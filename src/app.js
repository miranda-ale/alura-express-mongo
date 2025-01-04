import express from "express";
import conectaDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

await conectaDB();
const app = express();
routes(app);

// Busca livro por ID
app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

// Cria novo livro
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro criado com sucesso.");
});

// Atualiza livro
app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

// Exclui um livro
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro excluído com sucesso.");
});

export default app;
