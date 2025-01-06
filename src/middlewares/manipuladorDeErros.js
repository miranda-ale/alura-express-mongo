import mongoose from "mongoose";

function manipuladorDeErros(error, req, res, next) {
	if (error instanceof mongoose.Error.CastError) {
		res.status(400).send({ message: "Dados fornecidos incorretos" });
	} else {
		res
			.status(500)
			.send({ message: `${error.message} - Erro interno do servidor!` });
	}
};

export default manipuladorDeErros;
