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
        const {username, email, password, nome, cognome, dataNascita, sesso} = req.body;
        //Controlli
        if (await Utente.findOne({username})) {
            return res.status(403).json({message: "Username già in uso."}) //Forbidden: in questo caso poichè ci sono duplicati
        }
        if (await Utente.findOne({email})) {
            return res.status(403).json({message: "Email già in uso."}) //Forbidden: in questo caso poichè ci sono duplicati
        }
        //Fine controlli
        const nuovoUtente = new Utente({nome, cognome, email, password, dataNascita, sesso});
        await nuovoUtente.save();

        res.status(201).json({message: "Utente registrato!!!"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ errore: 'Errore nella creazione utente', dettagli: error.message });
    }
};

// POST /api/utenti → crea un nuovo utente
exports.loginUtente = async (req, res) => {
    try {
        const {email,password} = req.body;
        //controlli
        if (!email || !password) {
            return res.status(400).json({message: "Email e password sono obbligatori!!!"})
        }
        //fine controlli

        const utente = await Utente.findOne({email});
        if (!utente) {
            return res.status(401).json({message: "Utente non trovato :("})
        }

        //verifico la password
        const match = await utente.comparePassword(password);
        if (!match) {
            return res.status(401).json({message: "Credenziali errate!!!"})
        }

        //Gestione tokens
        const {accessToken, refreshToken} = generaToken(utente._id);
        await RefreshToken.create({token: refreshToken, userId: utente._id}); // salvo il refreshToken nel db
        //Fine gestione tokens

        //imposto il refreshToken in un cookie
        res.cookie('jwt', refreshToken, {
            httpOnly: true, //non può essere letto da javascript nel browser, solo il server può accedervi mediante req.cookies
            sameSite: 'Strict', //Cookie non leggibile da altre web app, possibile solo se la richiesta proviene dallo stesso dominio
            maxAge: 7*24*60*60, //Scadenza 7 giorni
        });

        res.json({
            message: "Login effettuato con successo!",
            accessToken, //Passo accessToken al frontend in modo tale che l'utente possa autenticarsi a seguito di richieste
            utente: {
                id: utente._id,
                username: utente.username,
                email: utente.email,
            }
        })
    } catch (e) {
        console.error("Errore durante il login: ",e);
        res.status(500).json({errore: 'Errore durante il login'});
        //500 internal server error (generico)
    }
}