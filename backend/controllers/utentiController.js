const Utente = require('../models/utentiModel');
const RefreshToken = require('../models/refreshTokenModel');
const jwt = require('jsonwebtoken');


//Funzione per generare token
const generaToken = (idUtente, ruolo) => {
    const accessToken = jwt.sign(
        { id: idUtente , ruolo: ruolo },
        process.env.JWT_SECRET,
        {expiresIn: '15m'}
    );
    const refreshToken = jwt.sign(
        { id: idUtente , ruolo: ruolo },
        process.env.JWT_REFRESH_SECRET, // Usa la nuova chiave specifica per i refresh token, metodo più sicuro
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
            return res.status(403).json({dettagli: "Username già in uso."}) //Forbidden: in questo caso poichè ci sono duplicati
        }
        if (await Utente.findOne({email})) {
            return res.status(403).json({dettagli: "Email già in uso."}) //Forbidden: in questo caso poichè ci sono duplicati
        }
        //Fine controlli
        const nuovoUtente = new Utente({nome, cognome, email, password, username, dataNascita, sesso}); // Rimuovo hashing esplicito, aggiungendo username
        await nuovoUtente.save();

        res.status(201).json({message: "Utente registrato!!!"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ errore: 'Errore nella creazione utente', dettagli: error.message });
    }
};

// POST /api/utenti → effettua il login dell'utente
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
            maxAge: 7 * 24 * 60 * 60 * 1000, // Scadenza 7 giorni (in millisecondi)
            secure: false
        });

        res.json({
            message: "Login effettuato con successo!",
            accessToken, //Passo accessToken al frontend in modo tale che l'utente possa autenticarsi a seguito di richieste
            utente: {
                id: utente._id,
                username: utente.username,
                email: utente.email,
                ruolo: utente.ruolo,
            }
        })
    } catch (e) {
        console.error("Errore durante il login: ",e);
        res.status(500).json({errore: 'Errore durante il login'});
        //500 internal server error (generico)
    }
}

exports.logoutUtente = async (req, res) => {
    try {
        const refreshToken = req.cookies.jwt;

        if (!refreshToken) {
            return res.status(204).json({ message: "Nessun token da eliminare." });
        }if (!refreshToken) return res.status(204);

        await RefreshToken.findOneAndDelete({token: refreshToken});     //Rimuovo il toke dal db

        res.clearCookie('jwt', {
            httpOnly: true,
            sameSite: 'Strict',
        });

        res.status(200).json({message: "Logout effettuato con successo!"});
    } catch (err) {
        console.error(err);
        res.status(500).json({errore: 'Errore durante il logout'});
    }
}

exports.refreshToken = async (req, res) => {        //Aggiorno l'access token quando scade
    const refreshToken = req.cookies.jwt;

    if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token mancante" });
    }

    const tokenInDb = await RefreshToken.findOne({ token: refreshToken });
    if (!tokenInDb) {
        return res.status(403).json({ message: "Refresh token non valido" });
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Token scaduto o non valido" });
        }

        const nuovoAccessToken = jwt.sign(
            { id: decoded.id, ruolo: decoded.ruolo },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );

        return res.json({ accessToken: nuovoAccessToken });
    });
};
