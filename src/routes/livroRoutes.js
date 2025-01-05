import express from "express";
import LivroController from "../controllers/livroController.js";

const livroRoutes = express.Router();

livroRoutes.get("/livros", LivroController.listarLivros);
livroRoutes.get("/livros/:id", LivroController.listarLivroPorId);
livroRoutes.post("/livros", LivroController.criarLivro);
livroRoutes.put("/livros/:id", LivroController.atualizarLivro);
livroRoutes.delete("/livros/:id", LivroController.excluirLivro);

export default livroRoutes;
