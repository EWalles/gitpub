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

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs")
  })

app.listen(port, () => {
  console.log("listening")
})