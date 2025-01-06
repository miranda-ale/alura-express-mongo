import { autorModel } from "../models/AutorModel.js";
import livroModel from "../models/livroModel.js";

class LivroController {
	static async listarLivros(req, res, next) {
		try {
			const listaLivros = await livroModel.find({});
			res.status(200).send(listaLivros);
		} catch (error) {
			next(error);
		}
	}

	static async listarLivroPorId(req, res, next) {
		try {
			const resultadoLivro = await livroModel.findById(req.params.id);
			if (resultadoLivro !== null) {
				res.status(200).send({
					message: "Livro localizado com sucesso!",
					livro: resultadoLivro,
				});
			} else {
				res.status(404).send({
					message: "Livro não localizado!",
				});
			}
		} catch (error) {
			next(error);
		}
	}

	static async criarLivro(req, res, next) {
		const novoLivro = req.body;

		try {
			const autorEncontrado = await autorModel.findById(novoLivro.autor);
			if(!autorEncontrado){
				res.status(404).send({
					message: "Autor não encontrado"
				});
			};
			
			const livroCompleto = {
				...novoLivro,
				autor: { ...autorEncontrado._doc },
			};
			const livroCriado = await livroModel.create(livroCompleto);
			res.status(201).send({
				message: "Livro criado com sucesso!",
				livro: livroCriado,
			});
		} catch (error) {
			next(error);
		}
	}

	static async atualizarLivro(req, res, next) {
		try {
			await livroModel.findByIdAndUpdate(req.params.id, req.body);
			res.status(200).send({
				message: "Livro atualizado com sucesso!",
			});
		} catch (error) {
			next(error);
		}
	}

	static async excluirLivro(req, res, next) {
		try {
			await livroModel.findByIdAndDelete(req.params.id);
			res.status(200).send({
				message: "Livro excluído com sucesso!",
			});
		} catch (error) {
			next(error);
		}
	}

	static async listarLivrosPorEditora(req, res, next) {
		const editora = req.query.editora;
		try {
			const livrosPorEditora = await livroModel.find({ editora: editora });
			res.status(200).send({
				message: `Livro(s) localizado(s)`,
				livro: [livrosPorEditora],
			});
		} catch (error) {
			next(error);
		}
	}
}

export default LivroController;
