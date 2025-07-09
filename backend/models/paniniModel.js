const mongoose = require('mongoose');

const paninoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    descrizione: {
        type: String,
        trim: true,
    },
    categoria: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria",
        required: true,
    }],
    ingredienti: [{
        type: mongose.Schema.Types.ObjectId,
        ref: "Ingredienti",
        required: true,
    }],
    prezzo: {
        type: Number,
        required: true,
        min: 0,
    },
    immagine: {
        type: String,
        required: true,
    },
    disponibile: {
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model("Panino", paninoSchema, "panino");