const express = require("express");
const app = express();
const pokemonsRoutes = require("./api/routes/pokemons");
app.use("/pokemons", pokemonsRoutes);
module.exports = app;
