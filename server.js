//require dependencies
const express = require('express');
const app = express();
const drinks = require('./models/drinks.js');
const port = 3000;
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
 
    res.render('drinks_show.ejs')
});

// INDEX route for drinks 
app.get('/drinks', (req, res) => {
    // res.send(drinks)
    res.render('index', {drink: drinks})
});

// SHOW route for drinks 

app.get('drinks/:id', (req, res) => {
    res.render('show', {drink: drinks[req.params.id]})
});

app.listen(port, () => {
    console.log('server is running ', port)
});