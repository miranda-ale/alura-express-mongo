import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

// Permite a utilização das variáveis de ambiente
dotenv.config(); 
const env = process.env;

async function conectaDB() {
  try {
    // Conecta ao Banco da Dados
    const uri = `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
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
  })

};

export default conectaDB;
