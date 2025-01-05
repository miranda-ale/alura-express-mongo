import express from "express";
import conectaDB from "./config/dbConnect.js";
import routes from "./routes/appRoutes.js";

await conectaDB();
const app = express();
routes(app);

// Exclui um livro
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro excluído com sucesso.");
});

export default app;
