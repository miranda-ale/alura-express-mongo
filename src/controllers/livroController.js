import livroModel from "../models/livroModel.js";

class LivroController {

    static async listarLivros (req, res) {
        const listaLivros = await livroModel.find({});
        res.status(200).json(listaLivros);
    };



};


export default LivroController;
