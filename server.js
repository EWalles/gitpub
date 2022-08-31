//require dependencies
const express = require('express');
const app = express();
var drinks = require('./models/drinks.js');
const port = 3000;

//
app.get('/', (req, res) => {
    res.render('drinks_show.ejs')
});

// INDEX route for drinks 
app.get('/drinks/', (req, res) => {
    // res.send(drinks)
    res.render('index', {allDrinks: drinks})
    
});

// SHOW route for drinks 

app.get('drinks/:drinks.js', (req, res) => {
    res.render('show', {drinks: drinks[req.params.drinks]})
});

app.listen(port, () => {
    console.log('server is running ', port)
});