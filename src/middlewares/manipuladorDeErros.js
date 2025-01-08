import mongoose from "mongoose";
import ErroBase from "../error/ErroBase.js";
import RequisicaoIncorreta from "../error/RequisicaoIncorreta.js";
import ErroValidacao from "../error/ErroValidacao.js";
import NaoEncontrado from "../error/NaoEncontrado.js";

function manipuladorDeErros(error, req, res, next) {
	console.error("Erro: " + error.name + " - " + error.message);
	
	if (error instanceof mongoose.Error.CastError) {
		new RequisicaoIncorreta().enviarResposta(res);
	} else if(error instanceof mongoose.Error.ValidationError) {
		new ErroValidacao(error).enviarResposta(res);
	} else if(error instanceof NaoEncontrado) {
		error.enviarResposta(res);
	} else {
		new ErroBase().enviarResposta(res);
	}
};

export default manipuladorDeErros;
