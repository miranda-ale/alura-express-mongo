import mongoose from "mongoose";
import ErroBase from "../error/ErroBase.js";

function manipuladorDeErros(error, req, res, next) {
	console.error("Erro: " + error.name + " - " + error.message);
	
	if (error instanceof mongoose.Error.CastError) {
		res.status(400).send({ message: "Dados fornecidos incorretos!" });
	} else if(error instanceof mongoose.Error.ValidationError) {
		const mensagensErro = Object.values(error.errors)
		.map(error => error.message)
		.join("; ");

		res.status(400).send({ message: `Erro de validação de dados: ${mensagensErro}` });
	} else {
		new ErroBase().enviarResposta(res);
	};
};

export default manipuladorDeErros;
