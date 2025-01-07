import NaoEncontrado from '../error/NaoEncontrado.js';
import { autorModel } from '../models/AutorModel.js';

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autorModel.find({});
      res.status(200).send(listaAutores);
    } catch (error) {
      next(error);
    };
  };

  static async listarAutorPorId(req, res, next) {
    try {
      const resultadoAutor = await autorModel.findById(req.params.id);

      if (resultadoAutor !== null) {
        res.status(200).send({
          message: 'Autor localizado com sucesso!',
          autor: resultadoAutor,
        });
      } else {
        next(new NaoEncontrado("Autor não localizado!"));
      }
    } catch (error) {
      next(error);
    };
  };

  static async criarAutor(req, res, next) {
    try {
      const novoAutor = await autorModel.create(req.body);
      res.status(201).send({
        message: 'Autor criado com sucesso!',
        autor: novoAutor,
      });
    } catch (error) {
      next(error);
    };
  };

  static async atualizarAutor(req, res, next) {
    try {
      const resultadoAtualizarAutor = await autorModel.findByIdAndUpdate(req.params.id, req.body);
      
      if(resultadoAtualizarAutor !== null) {
        res.status(200).send({
          message: 'Autor atualizado com sucesso!',
        });
      } else {
        next(new NaoEncontrado("Autor não localizado!"));
      };

    } catch (error) {
      next(error);
    };
  };

  static async excluirAutor(req, res, next) {
    try {
      const resultadoExcluirAutor = await autorModel.findByIdAndDelete(req.params.id);

      if(resultadoExcluirAutor !== null){
        res.status(200).send({
          message: 'Autor excluído com sucesso!',
        });
      } else {
        next(new NaoEncontrado("Autor não localizado!"));
      }

    } catch (error) {
      next(error);
    };
  };
};

export default AutorController;
