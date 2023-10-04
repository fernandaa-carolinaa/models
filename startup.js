const express = require("express")
const consign = require("consign")

const app = express()

consign().include("mvc/controllers").into(app)

app.listen(3001,()=>console.log("Online Server at port 3001"))

module.exports = app



