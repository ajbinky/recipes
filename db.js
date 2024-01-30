require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const recipes = require('./model.recipe');

mongoose.connect(process.env.DB_URI, {})
    .then(() => {
        
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
