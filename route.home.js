const express = require('express');
const router = express.Router();
const recipeSchema = require('./model.recipe');

// Define the home route
router.get('/', async (req, res) => {
    // Retrieve recipes from the database
    const recipes = await recipeSchema.find();
    console.log(recipes);

    // Render the recipes in the response
    res.render('index', {
        title: 'Home',
        recipes: recipes
    });
});

module.exports = router;
