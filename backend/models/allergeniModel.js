const mongoose = require("mongoose");

const allergeneSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
})
module.exports = mongoose.model("Allergene", allergeneSchema, "allergeni");