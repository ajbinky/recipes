const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const app = express();
const port = 3000;

// Connect to the database
const db = require('./db');

// Use the body parser
app.use(bodyParser.json());

// Import the routes
const homeRouter = require('./route.home');
const recipeRouter = require('./route.recipe');

// Use the routes
app.use('/', homeRouter);
app.use('/recipes', recipeRouter);

// Set the view engine
app.set('view engine', 'hbs');

// Register the partials
hbs.registerPartials(__dirname + '/views/partials');

// Register helper functions
hbs.registerHelper('url', function(uuid) {
    return '/recipes/' + uuid;
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
