const express = require('express')
const app = express()
const port = 3000
const drinks = require('./models/drinks.js')



// INDEX route for drinks 
app.get('/drinks', (req, res) => {
    // res.send(drinks)
    res.render('index', {drink: drinks})
})

// SHOW route for drinks 

app.get('drinks/:id', (req, res) => {
    res.render('show', {drink: drinks[req.pasrams.id]})
})

app.listen(port, () => {
    console.log('server is running ', port)
})