const mongoose = require('mongoose');

const ordineSchema = new mongoose.Schema({
    utente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Utente",
        required: true,
    },
    prodotto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prodotto",
        required: true,
    },
    stato: {
        type: String,
        enum: ['carrello', 'in_preparazione', 'pronto'],
        default: 'carrello',
    }
});

module.exports = mongoose.model("Ordine", ordineSchema, "ordini");