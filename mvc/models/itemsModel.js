const Item = {
    name: "",
    description: "",
    acessorio:"",
    preco:"",
    seeInfo: function(){
        return `${this.name} and ${this.description} and ${this.acessorio} and ${this.preco}`
    },
    toJSON: function(){
        return{
        "name": this.name,
        "description": this.description,
        "acessorio": this.acessorio,
        "preco":this.preco
        }
    }
}
module.exports = Item