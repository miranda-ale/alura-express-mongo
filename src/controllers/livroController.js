import { autorModel } from "../models/AutorModel.js";
import livroModel from "../models/livroModel.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livroModel.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha na requisição!`,
      });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const buscaLivro = await livroModel.findById(req.params.id);
      res.status(200).json({
        message: "Livro localizado com sucesso!",
        livro: buscaLivro,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao buscar livro!`,
      });
    }
  }

  static async criarLivro(req, res) {
    const novoLivro = req.body;

    try {
      const autorEncontrado = await autorModel.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livroModel.create(livroCompleto);
      res.status(201).json({
        message: "Livro criado com sucesso!",
        livro: livroCriado,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao criar livro!`,
      });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      await livroModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        message: "Livro atualizado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao atualizar o livro!`,
      });
    }
  }

  static async excluirLivro(req, res) {
    try {
      await livroModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Livro excluído com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha na exclusão do livro!`,
      });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livroModel.find({ editora: editora });
      res
      .status(200)
      .json({
        message: `Livro(s) localizado(s)`,
        livro: [livrosPorEditora]
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha na exclusão do livro!`,
      });
    };
  };
};

export default LivroController;
