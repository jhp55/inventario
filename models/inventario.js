const mongoose = require("mongoose")
const Schema = mongoose.Schema

const HerramientaSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        maxLenght:100
    },
    unidades:{
        type:Number,
        default:0
    }
});

module.exports = mongoose.model("Herramienta",HerramientaSchema)