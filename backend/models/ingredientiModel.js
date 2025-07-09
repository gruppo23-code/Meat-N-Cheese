const mongoose = require("mongoose");

const ingredienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    allergeni: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Allergene",
    }]
})