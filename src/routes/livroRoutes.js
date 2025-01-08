import express from "express";
import LivroController from "../controllers/livroController.js";
import paginar from "../middlewares/paginar.js";

const livroRoutes = express.Router();

livroRoutes.get("/livros", LivroController.listarLivros, paginar);
livroRoutes.get("/livros/busca", LivroController.listarLivrosPorFiltro, paginar); // precedência de rota do Express
livroRoutes.get("/livros/:id", LivroController.listarLivroPorId);
livroRoutes.post("/livros", LivroController.criarLivro);
livroRoutes.put("/livros/:id", LivroController.atualizarLivro);
livroRoutes.delete("/livros/:id", LivroController.excluirLivro);

export default livroRoutes;
