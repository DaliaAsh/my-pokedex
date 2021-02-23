const express = require("express");
const fs = require("fs");
const router = express.Router();
router.get("/", (req, res, next) => {
  fs.readFile("./data/pokemons.json", null, (err, data) => {
    if (err) {
      res.status(500).json({
        ErrorMessage: err,
      });
      return;
    }
    res.status(200).json({
      message: "Handling GET Request to pokemons",
      pokemons: JSON.parse(data),
    });
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST Request to pokemons",
  });
});
router.get("/:id", (req, res, next) => {
  fs.readFile("./data/pokemons.json", null, (err, data) => {
    if (err) {
      res.status(500).json({
        ErrorMessage: err,
      });
      return;
    }
    const pokemonsArray = JSON.parse(data);
    const id = req.params.id;
    const pokemon = pokemonsArray.filter((pokemon) => {
      return +id === pokemon.id;
    });
    res.status(200).json({
      message: "Handling GET Request to one pokemon",
      pokemon: pokemon,
    });
  });
});
module.exports = router;
