import express from "express";

const app = express();
app.use(express.json())

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
{
    id: 3,
    titulo: "Silmarillion",
},
{
    id: 4,
    titulo: "Contos Inacabados",
}
];

// Localiza um livro pela ID
function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
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
app.get("/livros/:id" , (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

// Cria novo livro
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro criado com sucesso.');
});

// Atualiza livro
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send('Livro atualizado com sucesso');
})

// Exclui um livro
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro excluído com sucesso.');
});

export default app;
