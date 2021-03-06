const app = require("express").Router();
const lojas = require("./lojas");
const produtos = require("./produtos");

/**
 * Rota para a página principal
 */
app.get("/", (req, res) => {
    res.redirect("/lojas");
});

app.use(lojas);
app.use(produtos);

module.exports = app;
