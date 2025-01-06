import mongoose from 'mongoose';
import { autorModel } from '../models/AutorModel.js';


class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autorModel.find({});
      res.status(200).send(listaAutores);
    } catch (error) {
      res.status(500).send({
        message: `${error.message} - Falha na requisição!`,
      });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const resultadoAutor = await autorModel.findById(req.params.id);

      if (resultadoAutor !== null) {
        res.status(200).send({
          message: 'Autor localizado com sucesso!',
          autor: resultadoAutor,
        });
      } else {
        res.status(404).send({
          message: 'Autor não localizado!',
        });
      }
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        res.status(400).send({
          message: 'Dados fornecidos incorretos',
        });
      } else {
        res
          .status(500)
          .send({ message: `${error.message} - Erro interno do servidor!` });
      }
    }
  }

  static async criarAutor(req, res) {
    try {
      const novoAutor = await autorModel.create(req.body);
      res.status(201).send({
        message: 'Autor criado com sucesso!',
        autor: novoAutor,
      });
    } catch (error) {
      res.status(500).send({
        message: `${error.message} - Falha ao criar Autor!`,
      });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      await autorModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send({
        message: 'Autor atualizado com sucesso!',
      });
    } catch (error) {
      res.status(500).send({
        message: `${error.message} - Falha ao atualizar o Autor!`,
      });
    }
  }

  static async excluirAutor(req, res) {
    try {
      await autorModel.findByIdAndDelete(req.params.id);
      res.status(200).send({
        message: 'Autor excluído com sucesso!',
      });
    } catch (error) {
      res.status(500).send({
        message: `${error.message} - Falha na exclusão do Autor!`,
      });
    }
  }
}

export default AutorController;
