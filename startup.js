const express = require("express")

const app = express()

app.listen(3001,()=>console.log("Online Server at port 3001"))

module.exports = app

const itemsController = require("./mvc/controllers/itemsController")

