const Ordine = require('../models/ordiniModel');

exports.aggiungiCarrello = async (req, res) => {
    try {
        const { prodotto } = req.body;

        if (!prodotto) {
            return res.status(400).json({messaggio: "Id prodotto non passato correttamente"});
        }

        const ordinazione = await Ordine.create({
            utente: req.userId,
            prodotto,
            stato: "carrello"
        });

        res.status(201).json({messaggio: "Prodotto aggiunto al carrello!", prodotto: ordinazione});
    } catch (error) {
        console.error("Errore durante l'aggiunta dell'articolo al carrello: ", error);
        res.status(500).json({error: "Internal server error"});
    }
}

exports.popolaCarrello = async (req, res) => {
    try {
        const userId = req.userId;

        const ordine = await Ordine.find({utente: userId, stato: 'carrello'}).populate("prodotto", "nome prezzo -_id");

        if (!ordine) {
            return res.json([]);
        }

        const rispostaFormattata = ordine.map(o => ({
            id: o._id,
            name: o.prodotto.nome,
            price: o.prodotto.prezzo
        }))
        res.json(rispostaFormattata);
    } catch (err) {
        console.error("Errore nel recupero del carrello:", err);
        res.status(500).json({ errore: 'Errore nel recupero del carrello' });
    }
}

exports.inviaOrdine = async (req, res) => {
    try {
        const userId = req.userId;

        const result = await Ordine.updateMany(
            {utente: userId, stato: 'carrello'},
            {$set: {stato: 'in_preparazione'}}
        );

        if (!result) {
            return res.json({messaggio: "Carrello vuoto!!!"});
        }

        res.status(200).json({
            messaggio: "Ordine inviato con successo, inviato alla preparazione!!!"
        });
    } catch (err) {
        console.error("Errore durante l'invio dell'ordine:", err);
        res.status(500).json({ errore: "Errore durante l'invio dell'ordine" });
    }
}

exports.eliminaDaCarrello = async (req, res) => {
    try {
        const ordineId = req.params.id;
        const userId = req.userId;

        const ordine = await Ordine.findOneAndDelete({
            _id: ordineId,
            utente: userId,
            stato: 'carrello'
        })
        if (!ordine) {
            return res.status(404).json({ messaggio: "Ordine non trovato o già rimosso" });
        }
        res.status(200).json({ messaggio: "Ordine rimosso dal carrello con successo" });
    } catch (err) {
        console.error("Errore durante la rimozione dal carrello:", err);
        res.status(500).json({ errore: "Internal server error" });
    }
}