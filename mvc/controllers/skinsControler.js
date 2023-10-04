const Skin = require("../models/skinModels.js")

module.exports = (app) => {

app.get("/getSkin", (req, res)=>{
    const skin =  new Skin("Chapéu Eldorado","Sei lá",10)

    skin.getAllSkins()
    res.send("Nome: "+skin.nome)
})
}