import mongoose from "mongoose";

async function conectaDB() {
  try {
    // Conecta ao Banco da Dados
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(uri);
    
    // Informa a conexão inicial
    console.log('Conectado ao banco de dados');
    return mongoose.connection;

  } catch (error) {
    // Informa erro na conexão inicial
    console.log("Erro na conexão ao banco de dados: " + error.message);
  };

  // Monitora a conexão após a conexão inicial
  mongoose.connection.on('erro', (erro) => {
    console.error("Erro de conexão ao banco de dados: " + erro);
  });

};

export default conectaDB;
