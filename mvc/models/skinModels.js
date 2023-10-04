// const skin={
//     name:"",
//     description:"",
//     rare:"",
//     seeInfo:function(){
//         return`nome: ${this.name} Descrição: ${this.description} rare: ${this.rare}`
//     },
//     toJSON:function(){
//         return{
//             "name":this.name,
//             "description":this.description,
//             "rare":this.rare
//         }
//     }
// }
// module.exports=skin

// class Skin {

//     categoriaSkin
//     nomeSkin
//     descSkin
//     generoSkin
//     valorSkin
//     raridadeSkin
//     foto1Skin
//     foto2Skin

//     constructor(){
//     }

// }

// const skins = new Skin()

// module.exports = Skin;

const Db = require("../../repository/database")

class Skin {

    nome
    descricao
    raridade

    constructor(nome, descricao, raridade){
        this.nome = nome
        this.descricao = descricao
        this.raridade = raridade
    }

    getAllSkins(){
        const db = new Db()

        db.getConnection().query("SELECT * FROM SKINS", (err, results, fields) =>{
            console.log(results)

        })
    }


}
module.exports = Skin
