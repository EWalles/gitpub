const express = require("express");
const drinks = require("./models/drinks");
const foods = require("./models/food");
const app = express();
const port = 3000;

// listen to port and console log to check if its running
app.listen(port, () => {
    console.log("I can hear server running")
});

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    })
})

app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {
        drink: drinks[req.params.id]
    })
})

app.get("/foods", (req, res) => {
    res.render("food_index.ejs", {
        allFoods: foods,
    })
})

app.get("/foods/:id", (req, res) =>{
    res.render("food_show.ejs", {
        food: foods[req.params.id],
    })
})