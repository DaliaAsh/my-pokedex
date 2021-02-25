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
    let pokemonsArray = JSON.parse(data);
    pokemonsArray.sort((a, b) =>
      a.name.english > b.name.english
        ? 1
        : b.name.english > a.name.english
        ? -1
        : 0
    );
    res.status(200).json({
      message: "Handling GET Request to pokemons",
      pokemons: pokemonsArray,
    });
  });
});
router.post("/pokemons", (req, res, next) => {
  console.log(req.body);
  fs.readFile("./data/pokemons.json", null, (err, data) => {
    if (err) {
      res.status(500).json({
        ErrorMessage: err,
      });
      return;
    }
    let pokemons = JSON.parse(data);
    const pokemonId = req.body.id;
    const pokemon = pokemons.find((pokemon) => {
      return pokemon.id === pokemonId;
    });
    if (pokemon !== undefined) {
      res.status(500).json({
        message: "The id already exist , try another one",
      });
      return;
    }
    const newPokemon = {
      id: pokemonId,
      name: req.body.name,
      type: req.body.type,
      base: req.body.base,
      image: req.body.image,
    };
    pokemons.push(newPokemon);
    fs.writeFile("./data/pokemons.json", JSON.stringify(pokemons), (err) => {
      if (err) {
        res.status(500).json({
          message: err.message,
        });
        return;
      }
      res.status(200).json({
        message: "Handling Post Request to pokemons",
        addedPokemon: newPokemon,
      });
    });
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
    if (pokemon.length === 0) {
      res.status(500).json({
        ErrorMessage: "Their is no matched id ",
      });
      return;
    }
    res.status(200).json({
      message: "Handling GET Request to one pokemon",
      pokemon: pokemon,
    });
  });
});
router.delete("/:id", (req, res, next) => {
  fs.readFile("./data/pokemons.json", null, (err, data) => {
    if (err) {
      res.status(500).json({
        ErrorMessage: err,
      });
      return;
    }
    let pokemons = JSON.parse(data);
    const pokemonId = req.params.id;
    const pokemonIndex = pokemons.findIndex((pokemon) => {
      return pokemon.id === +pokemonId;
    });
    console.log(pokemonIndex);
    if (pokemonIndex === -1) {
      res.status(500).json({
        message: "The id does not exist , try again",
      });
      return;
    }
    pokemons.splice(pokemonIndex, 1);
    fs.writeFile("./data/pokemons.json", JSON.stringify(pokemons), (err) => {
      if (err) {
        res.status(500).json({
          message: err.message,
        });
        return;
      }
      res.status(200).json({
        message: "Handling Delete Request to pokemons",
        pokemonDeletedId: pokemonId,
      });
    });
  });
});
router.patch("/:id", (req, res, next) => {
  const updatedProps = req.body;
  fs.readFile("./data/pokemons.json", null, (err, data) => {
    if (err) {
      res.status(500).json({
        ErrorMessage: err,
      });
      return;
    }
    let pokemons = JSON.parse(data);
    const pokemonId = req.params.id;
    const pokemonIndex = pokemons.findIndex((pokemon) => {
      return pokemon.id === +pokemonId;
    });
    if (pokemonIndex === -1) {
      res.status(500).json({
        message: "The id does not exist , try again",
      });
      return;
    }
    const props = {};
    for (let property of updatedProps) {
      props[property.propName] = property.value;
    }
    console.log(props);
    let updatedPokemon = pokemons[pokemonIndex];
    for (const property in props) {
      updatedPokemon[property] = props[property];
    }
    pokemons.splice(pokemonIndex, 1, updatedPokemon);
    fs.writeFile("./data/pokemons.json", JSON.stringify(pokemons), (err) => {
      if (err) {
        res.status(500).json({
          message: err.message,
        });
        return;
      }
      res.status(200).json({
        message: "Handling Delete Request to pokemons",
        updatedPokemon: updatedPokemon,
      });
    });
  });
});

module.exports = router;
