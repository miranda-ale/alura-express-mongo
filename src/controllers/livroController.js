import livroModel from "../models/livroModel.js";
import NaoEncontrado from "../error/NaoEncontrado.js";

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
					message: "Livro encontrado com sucesso!",
					livro: resultadoLivro
				});
			} else {
				next(new NaoEncontrado("Livro não localizado!"));
			}
		} catch (error) {
			next(error);
		};
	};

	static async criarLivro(req, res, next) {
		try {
			const novoLivro = new livroModel(req.body);
			const livroCriado = await novoLivro.save();
			res.status(201).send({
				message: "Livro criado com sucesso!",
				livro: livroCriado,
			});
		} catch (error) {
			next(error);
		};
	};

	static async atualizarLivro(req, res, next) {
		try {
			const resultadoLivro = await livroModel.findByIdAndUpdate(
				req.params.id,
				req.body,
			);
			if (resultadoLivro !== null) {
				res.status(200).send({
					message: "Livro atualizado com sucesso!",
				});
			} else {
				next(new NaoEncontrado("Livro não localizado!"));
			}
		} catch (error) {
			next(error);
		};
	};

	static async excluirLivro(req, res, next) {
		try {
			const resultadoLivro = await livroModel.findByIdAndDelete(req.params.id);
			if (resultadoLivro !== null) {
				res.status(200).send({
					message: "Livro excluído com sucesso!",
				});
			} else {
				next(new NaoEncontrado("Livro não localizado!"));
			}
		} catch (error) {
			next(error);
		};
	};

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
		};
	};
};

export default LivroController;
