import express from 'express';
import livroRoutes from './livroRoutes.js';
import autorRoutes from './autorRoutes.js';


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), livroRoutes);
    app.use(express.json(), autorRoutes);

};

export default routes;

