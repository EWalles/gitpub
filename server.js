
const express = require("express")
const app = express()
const port = 3000
const welcome = ["Welcome to Gitpub"]

//NOTE: it must start with ./ if it's just a file, not an NPM package

const drinks = require("./models/drinks.js") 

app.get("/welcome", (req, res) => {
    res.render("drinks_show.ejs")
  })
app.listen(port, () => {
  console.log("listening")
})