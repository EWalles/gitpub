
const express = require('express');
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")

const app = express();




//welcome page/landing page
app.get("/", (req, res) => {
    res.send("Welcome to the GitPub App!")
})

//drink names page route
app.get("/drinks", (req, res) => {
    //applies the value of drinks to the allDrinks object that we can utilize in index.ejs
    res.render("drinks_index.ejs", {
      allDrinks: drinks,
    })
})

//index drink ID
app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {
        drinkInfo: drinks[req.params.id]
    })
})

//food names page route
app.get("/foods", (req, res) => {
    //applies the value of foods to the allFoods object that we can utilize in index.ejs
    res.render("food_index.ejs", {
      allFoods: food,
    })
})

//index food ID
app.get("/foods/:id", (req, res) => {
    res.render("food_show.ejs", {
        foodInfo: food[req.params.id]
    })
})



app.listen(3000, () => {
    console.log("Server Live")
})