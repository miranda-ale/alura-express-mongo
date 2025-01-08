# Alura Express Mongo

## Descrição

Esta é uma aplicação de exemplo desenvolvida durante o curso da Alura, utilizando Node.js, Express e MongoDB. A aplicação permite gerenciar livros e autores, incluindo funcionalidades de criação, listagem e busca.

## Funcionalidades

- **Gerenciamento de Livros**:
  - Criar um novo livro
  - Listar todos os livros
  - Buscar um livro por ID

- **Gerenciamento de Autores**:
  - Criar um novo autor
  - Listar todos os autores
  - Buscar um autor por ID

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/alura-express-mongo.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd alura-express-mongo
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

4. Configure as variáveis de ambiente:
   ```sh
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/nome-do-banco
   ```

5. Inicie a aplicação:
   ```sh
   npm start
   ```

## Endpoints

### Livros
- GET /livros: Lista todos os livros
- GET /livros/:id: Busca um livro por ID
- POST /livros: Cria um novo livro

### Autores
- GET /autores: Lista todos os autores
- GET /autores/:id: Busca um autor por ID
- POST /autores: Cria um novo autor

## Paginador, Filtros e Ordenação

A aplicação suporta paginação, filtros e ordenação através de query parameters. Isso permite que você controle a quantidade de resultados retornados, aplique filtros específicos nas listagens e ordene os resultados.

### Exemplos de Uso:

- **Paginação**:
  - `GET /livros?pagina=1&limite=10`: Retorna a primeira página com até 10 livros.
  - `GET /autores?pagina=2&limite=5`: Retorna a segunda página com até 5 autores.

- **Filtros**:
  - `GET /livros?titulo=Node.js`: Filtra os livros pelo título "Node.js".
  - `GET /autores?nacionalidade=Brasileira`: Filtra os autores pela nacionalidade "Brasileira".

- **Ordenação**:
  - `GET /livros?ordenacao=preco:-1`: Ordena os livros pelo preço em ordem decrescente.
  - `GET /autores?ordenacao=nome:1`: Ordena os autores pelo nome em ordem alfabética.

## Estrutura do Projeto

```sh
alura-express-mongo/
├── src/
│   ├── controllers/
│   │   ├── autorController.js
│   │   ├── livroController.js
│   ├── models/
│   │   ├── autorModel.js
│   │   ├── livroModel.js
│   ├── routes/
│   │   ├── autorRoutes.js
│   │   ├── livroRoutes.js
│   │   ├── index.js
│   ├── middlewares/
│   │   ├── manipuladorDeErros.js
│   ├── app.js
├── .env
├── package.json
├── server.js
```