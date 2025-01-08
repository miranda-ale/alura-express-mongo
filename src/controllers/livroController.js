import NaoEncontrado from "../error/NaoEncontrado.js";
import RequisicaoIncorreta from "../error/RequisicaoIncorreta.js"
import { autorModel, livroModel } from "../models/appModel.js";

class LivroController {
	static async listarLivros(req, res, next) {
		try {

			let { limite = 5, pagina = 1, ordenacao = "titulo:1" } = req.query;

			let [campo, ordem] = ordenacao.split(":");

			limite = parseInt(limite);
			pagina = parseInt(pagina);
			ordem = parseInt(ordem)

			if(limite > 0 && pagina > 0) {
				const listaLivros = await livroModel.find({})
				.sort({ [ campo ] : ordem })
				.skip((pagina - 1) * limite)
				.limit(limite)
				.populate("autor")
				.exec();
				res.status(200).send(listaLivros);

			} else {
				next(new RequisicaoIncorreta())
			}

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
					livro: resultadoLivro,
				});
			} else {
				next(new NaoEncontrado("Livro não localizado!"));
			}
		} catch (error) {
			next(error);
		}
	}

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
		}
	}

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
		}
	}

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
		}
	}

	static async listarLivrosPorFiltro(req, res, next) {
		try {
			const busca = await processaBusca(req.query)

			if(busca !== null) {
				const livrosResultado = await livroModel
				.find(busca)
				.populate("autor");
				
				res.status(200).send({
					message: `Livro(s) localizado(s)`,
					livro: livrosResultado,
				});
			} else {
				res.status(200).send([])
			}

		} catch (error) {
			next(error);
		}
	}

}

async function processaBusca(parametros) {
	const { editora,  titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

		let busca = {};

		if(editora) busca.editora = editora;
		if(titulo) busca.titulo = { $regex: titulo, $options: "i"};

		if(minPaginas || maxPaginas) busca.paginas = {};
		if(minPaginas) busca.paginas.$gte = minPaginas;
		if(maxPaginas) busca.paginas.$lte = maxPaginas;
		if(nomeAutor) {
			
			const autor = await autorModel.findOne({ nome: nomeAutor });

			if (autor !== null) {
				busca.autor = autor._id;
			} else {
				busca = null;
			}
			
		} 

		return busca;
}

export default LivroController;
