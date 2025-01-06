import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
    constructor(error) {
        const mensagensErro = Object.values(error.errors)
		.map(error => error.message)
		.join("; ");
        
        super(`Erro de validação de dados: ${mensagensErro}` , 400);
    };
};

export default ErroValidacao;
