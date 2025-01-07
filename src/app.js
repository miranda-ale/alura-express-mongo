import express from "express";
import conectaDB from "./config/dbConnect.js";
import routes from "./routes/appRoutes.js";
import manipulador404 from "./middlewares/manipulador404.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

await conectaDB();
const app = express();
routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

export default app;
