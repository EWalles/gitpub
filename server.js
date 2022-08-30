// Require Dependencies
const express = require("express")
const welcome = ["Welcome to Gitpub"]
const drinks = require("./models/drinks.js") 

// initialize express app
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.render("welcome")
})

app.get("/drinks/", (request, response) => {
  response.render("drinks_index.ejs", {
    allDrinks: drinks,
  })
})
  app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs")
  })

app.listen(port, () => {
  console.log("listening")
})