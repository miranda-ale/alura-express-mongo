import mongoose from "mongoose";
import { autorSchema } from "./AutorModel.js";

// Interface de relacionamento com o Atlas
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { 
        type: String, 
        required: [true, "O título do livro é obrigatório!"] },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
}, { versionKey: false });

const livroModel = mongoose.model("livros", livroSchema);

export default livroModel;
