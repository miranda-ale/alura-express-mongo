import express from "express";
import conectaDB from "./config/dbConnect.js";

await conectaDB();
const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    },
    {
        id: 2,
        titulo: "O Senhor dos Anéis: As Duas Torres",
    },
    {
        id: 3,
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
    },
    {
        id: 4,
        titulo: "O Hobbit",
    },
    {
        id: 5,
        titulo: "Silmarillion",
    },
    {
        id: 6,
        titulo: "Contos Inacabados",
    },
    {
        id: 7,
        titulo: "Os Filhos de Húrin",
    },
    {
        id: 8,
        titulo: "Beren e Lúthien",
    },
    {
        id: 9,
        titulo: "A Queda de Gondolin",
    },
    {
        id: 10,
        titulo: "A História de Kullervo",
    },
    {
        id: 11,
        titulo: "A Lenda de Sigurd e Gudrún",
    },
    {
        id: 12,
        titulo: "A Balada de Aotrou e Itroun",
    },
    {
        id: 13,
        titulo: "A Última Canção de Bilbo",
    },
];

// Localiza um livro pela ID
function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

// Lista geral de livros
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

// Busca livro por ID
app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

// Cria novo livro
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro criado com sucesso.");
});

// Atualiza livro
app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

// Exclui um livro
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro excluído com sucesso.");
});

export default app;
