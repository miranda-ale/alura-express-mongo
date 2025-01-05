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
    };
  };

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
    };
  };

  static async criarLivro(req, res) {
    try {
      const novoLivro = await livroModel.create(req.body);
      res.status(201).json({
        message: "Livro criado com sucesso!",
        livro: novoLivro,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao criar livro!`,
      });
    };
  };

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
    };
  };

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
    };
  };
}

export default LivroController;
