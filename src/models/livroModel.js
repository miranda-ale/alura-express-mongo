import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

// Interface de relacionamento com o Atlas
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { 
        type: String, 
        required: [true, "O título do livro é obrigatório!"] },
    preco: { type: Number },
    paginas: { 
        type: Number,
        validate: {
            validator: (value) => {
            return value >= 10 && value <= 5000;},
            message: "Número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
        }
     },
     autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "autores",
        required: [true, "O(a) autor(a) é obrigatório"],
        autopopulate: { select: "nome" }
      },
      editora: {
        type: String,
        required: [true, "A editora é obrigatória"],
        enum: {
            values: ["Clássicos", "Modernos", "Romance", "Ficção"],
            message: "A editora {VALUE} não é um valor permitido!"
        }
      }
}, { versionKey: false });

livroSchema.plugin(autopopulate);
const livroModel = mongoose.model("livros", livroSchema);

export default livroModel;
