import { autorModel } from "../models/AutorModel.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autorModel.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha na requisição!`,
      });
    };
  };

  static async listarAutorPorId(req, res) {
    try {
      const buscaAutor = await autorModel.findById(req.params.id);
      res.status(200).json({
        message: "Autor localizado com sucesso!",
        autor: buscaAutor,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao buscar Autor!`,
      });
    };
  };

  static async criarAutor(req, res) {
    try {
      const novoAutor = await autorModel.create(req.body);
      res.status(201).json({
        message: "Autor criado com sucesso!",
        autor: novoAutor,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao criar Autor!`,
      });
    };
  };

  static async atualizarAutor(req, res) {
    try {
      await autorModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        message: "Autor atualizado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao atualizar o Autor!`,
      });
    };
  };

  static async excluirAutor(req, res) {
    try {
      await autorModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Autor excluído com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha na exclusão do Autor!`,
      });
    };
  };
}

export default AutorController;
