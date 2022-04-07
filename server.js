require("dotenv").config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001

const drinks = require("./models/drinks.js")
const foods = require("./models/food.js")


app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", { allDrinks: drinks })
})

app.get("/drinks/:id", (req, res) => {
    // res.send(drinks[req.params.id])
    res.render("drinks_show.ejs", { drink: drinks[req.params.id] })
})

app.get("/foods", (req, res) => {
    res.render("food_index.ejs", { allFoods: foods })
})

app.get("/foods/:id", (req, res) => {
    res.render("food_show.ejs", { food: foods[req.params.id] })
})

app.listen(PORT, () => {
    console.log(`You are listening to PORT ${PORT}`)
})