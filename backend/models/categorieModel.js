const mongoose = require("mongoose");

const categoriaSchema = new mongose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    descrizione: {
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model("Categoria", categoriaSchema, "categorie");