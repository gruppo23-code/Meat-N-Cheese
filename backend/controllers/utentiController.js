const Utente = require('../models/utentiModel');

// GET /api/utenti → restituisce tutti gli utenti
exports.getUtenti = async (req, res) => {
    try {
        const utenti = await Utente.find();
        res.status(200).json(utenti);
    } catch (error) {
        res.status(500).json({ errore: 'Errore nel recupero utenti' });
    }
};

// GET /api/utenti/:id → restituisce un utente specifico
exports.getUtenteById = async (req, res) => {
    try {
        const utente = await Utente.findById(req.params.id);
        if (!utente) {
            return res.status(404).json({ messaggio: 'Utente non trovato' });
        }
        res.status(200).json(utente);
    } catch (error) {
        res.status(500).json({ errore: 'Errore nel recupero dell\'utente' });
    }
};

// POST /api/utenti → crea un nuovo utente
exports.creaUtente = async (req, res) => {
    try {
        const nuovoUtente = new Utente(req.body);
        const utenteSalvato = await nuovoUtente.save();
        res.status(201).json(utenteSalvato);
    } catch (error) {
        res.status(400).json({ errore: 'Errore nella creazione utente', dettagli: error.message });
    }
};