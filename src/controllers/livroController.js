import livroModel from "../models/livroModel.js";

class LivroController {

    static async listarLivros (req, res) {
        const listaLivros = await livroModel.find({});
        res.status(200).json(listaLivros);
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livroModel.create(req.body);
            res.status(201).json({ 
                message: "Livro criado com sucesso.",
                livro: novoLivro
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao cadastrar livro`,
            });
        };
    };

};


export default LivroController;
