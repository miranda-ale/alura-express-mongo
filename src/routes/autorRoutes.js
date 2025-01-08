import express from "express";
import AutorController from "../controllers/autorController.js";
import paginar from "../middlewares/paginar.js";

const autorRoutes = express.Router();

autorRoutes.get("/autores", AutorController.listarAutores, paginar);
autorRoutes.get("/autores/:id", AutorController.listarAutorPorId);
autorRoutes.post("/autores", AutorController.criarAutor);
autorRoutes.put("/autores/:id", AutorController.atualizarAutor);
autorRoutes.delete("/autores/:id", AutorController.excluirAutor);

export default autorRoutes;
