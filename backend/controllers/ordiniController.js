const Ordine = require('../models/ordiniModel');

exports.aggiungiCarrello = async (req, res) => {
    try {
        const { prodotto } = req.body;

        if (!prodotto) {
            return res.status(400).json({messaggio: "Id prodotto non passato correttamente"});
        }

        const ordinazione = await Ordine.create({
            utente: req.user.id,
            prodotto,
            stato: "carrello"
        });

        res.status(201).json({messaggio: "Prodotto aggiunto al carrello!", prodotto: ordinazione});
    } catch (error) {
        console.error("Errore durante l'aggiunta dell'articolo al carrello: ", error);
        res.status(500).json({error: "Internal server error"});
    }
}