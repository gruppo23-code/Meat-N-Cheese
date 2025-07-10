const jwt = require("jsonwebtoken");

// Middleware per verificare la presenza e la validità di un token JWT
// Se vuoi controllare anche il ruolo, puoi passare `ruoloRichiesto = "admin"`
const verificaToken = (ruoloRichiesto = null) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).send("Token mancante o malformato");
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).send("Token non valido o scaduto");
            }

            req.userId = decoded.id;
            req.ruolo = decoded.ruolo;

            // Se è richiesto un ruolo specifico, lo verifico
            if (ruoloRichiesto && decoded.ruolo !== ruoloRichiesto) {
                return res.status(403).send("Accesso riservato agli amministratori");
            }

            next();
        });
    };
};

module.exports = { verificaToken };