const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const pokemonsRoutes = require("./api/routes/pokemons");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/pokemons", pokemonsRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
  });
  const error = new Error();
  next(error);
});
app.use((req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
module.exports = app;
