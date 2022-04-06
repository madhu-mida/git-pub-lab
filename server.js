require("dotenv").config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001


app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.listen(PORT, () => {
    console.log(`You are listening to PORT ${PORT}`)
})