import express from "express";
import LivroController from "../controllers/livroController.js";

const livroRoutes = express.Router();

livroRoutes.get("/livros", LivroController.listarLivros);

export default livroRoutes;
