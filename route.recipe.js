const express = require("express");
const router = express.Router();
const Recipes = require("./model.recipe");

// Define your routes here
router.get("/:id", async (req, res) => {
  const recipes = await Recipes.find({ _id: req.params.id});
  res.render("recipeDetail", {
    title: "Home",
    recipes: recipes,
  });
});

// Create a new recipe
router.post("/add", async (req, res) => {
    const newRecipe = new Recipes(req.body);
    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe);
});

module.exports = router;
