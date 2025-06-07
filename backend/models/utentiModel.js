const mongoose = require('mongoose');

const utenteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cognome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    ruolo: {
        type: String,
        default: 'cliente'
    },
    attivo: {
        type: Boolean,
        default: true
    },
    dataNascita: {
        type: Date,
        required: false
    },
    sesso: {
        type: String,
        enum: ['M', 'F', 'Altro'],
        required: false
    },
    dataRegistrazione: {
        type: Date,
        default: Date.now
    }
});

// modello: 'utente', collezione forzata: 'utenti'
module.exports = mongoose.model('utente', utenteSchema, 'utenti');