import express from "express";
import conectaDB from "./config/dbConnect.js";
import routes from "./routes/appRoutes.js";

await conectaDB();
const app = express();
routes(app);

export default app;
