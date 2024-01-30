const express = require("express");
const router = express.Router();
const Recipes = require("./model.recipe");

// Define your routes here
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipes.findOne({ _id: req.params.id});
    res.render("recipeDetail", {
      name: recipe.name,
      image: recipe.image,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions
    });
  } catch (error) {
    res.status(404).send("Recipe not found");
  }
});

// Create a new recipe
router.post("/add", async (req, res) => {
  try {
    const newRecipe = new Recipes(req.body);
    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe);
  } catch (error) {
    res.status(400).send("Error creating recipe");
  };
});

module.exports = router;
