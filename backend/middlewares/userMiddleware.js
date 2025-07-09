const jwt = require("jsonwebtoken");


//middleware per verificare la presenza e la validità di un token JWT
const verificaToken = (req, res, next) => {

    //recuperare l'header di autorizzazione dalla richiesta
    const authHeader = req.headers.authorization;

    //controllo se token è presente ed inizia con bearer
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).send("Token mancante o malformato");
    }

    //estrazione token vero e proprio togliendo la parola Bearer che fa parte dell'header
    const token = authHeader.split(" ")[1];


    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send("Token non valido o scaduto");
        }

        // Il token è valido, aggiungi l'ID dell'utente e il ruolo (se presente nel token) alla richiesta
        //prendo id da const accessToken in utentiController.js
        req.userId = decoded.id;

        //passo il controllo al prossimo middleware o controller
        next() ;


    })
} ;

module.exports = {verificaToken};



