const express = require("express");
const fs = require("fs");
const router = express.Router();
router.get("/", (req, res, next) => {
  fs.readFile("./data/pokemons.json", null, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.table(data);
  });
  res.status(200).json({
    message: "Handling GET Request to pokemons",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST Request to pokemons",
  });
});
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Handling GET Request for one id",
    id: id,
  });
});
module.exports = router;
