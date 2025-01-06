import express from "express";
import conectaDB from "./config/dbConnect.js";
import routes from "./routes/appRoutes.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

await conectaDB();
const app = express();
routes(app);
app.use(manipuladorDeErros);

export default app;
