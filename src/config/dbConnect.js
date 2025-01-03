import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const env = process.env;

async function conectaDB() {
  try {
    const uri = `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(uri);
   
    console.log('Conectado ao banco de dados');
    return mongoose.connection;

  } catch (error) {
    console.log("Erro na conexão ao banco de dados: " + error.message);
  };

  mongoose.connection.on('erro', (erro) => {
    console.error("Erro de conexão ao banco de dados: " + erro);
  })

};

export default conectaDB;
