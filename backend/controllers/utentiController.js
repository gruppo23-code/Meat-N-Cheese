const Utente = require('../models/utentiModel');
const RefreshToken = require('../models/refreshTokenModel');
const jwt = require('jsonwebtoken');

//Funzione per generare token
const generaToken = (idUtente) => {
    const accessToken = jwt.sign(
        { id: idUtente },
        process.env.JWT_SECRET,
        {expiresIn: '15m'}
    );
    const refreshToken = jwt.sign(
        { id: idUtente },
        process.env.JWT_SECRET,
        {expiresIn: '7d'}
    );
    return {accessToken, refreshToken};
}

// POST /api/utenti → crea un nuovo utente
exports.creaUtente = async (req, res) => {
    try {
        const nuovoUtente = new Utente(req.body);
        //Controlli
        if (await Utente.findOne({username: nuovoUtente.username})) {

        }
        const utenteSalvato = await nuovoUtente.save();
        res.status(201).json(utenteSalvato);
    } catch (error) {
        res.status(400).json({ errore: 'Errore nella creazione utente', dettagli: error.message });
    }
};