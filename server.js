//require dependencies
const express = require('express');
const ejs = require('ejs')
const app = express();

const port = 3000
const drinks = require('./models/drinks.js')


app.get('/', (req, res) => {
    reqLog(req)
    res.send('Welcome to the Gitpub App!')
})

// INDEX route for drinks 
app.get('/drinks', (req, res) => {
    // res.send(drinks)
    res.render('index', {drink: drinks})
})

// SHOW route for drinks 

app.get('drinks/:id', (req, res) => {
    res.render('show', {drink: drinks[req.params.id]})
})

app.listen(port, () => {
    console.log('server is running ', port)
})