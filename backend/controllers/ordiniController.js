const Ordine = require('../models/ordiniModel');
const { v4: uuidv4 } = require('uuid');
const {use} = require("express/lib/application");

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
        const groupId = uuidv4();       //Genero id univoci per gruppi di ordini, in modo tale da avere raggruppato tutto l'ordine presente nel carrello una volta inviata la comanda

        const result = await Ordine.updateMany(
            {utente: userId, stato: 'carrello'},
            {
                $set: {
                    stato: 'in_preparazione',
                    groupId: groupId
                }
            }
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

exports.visualizzaOrdini = async (req, res) => {        //Visualizzazione per l'admin
    try {
        const userId = req.query.userId;
        console.log(userId);
        console.log("Query ricevuta:", req.query);

        let ordini
        if (userId) {
            ordini = await Ordine.find({
                utente: userId,
                stato: {$in: ['in_preparazione','pronto']}
            })
                .sort({stato: 1})       //1 ordinamento crescente, -1 ordinamento decrescente
                .populate('utente', 'email -_id')
                .populate({
                    path: 'prodotto',
                    select: 'nome descrizione prezzo immagine ingredienti categoria -_id',
                    populate: [
                        {
                            path: 'ingredienti',
                            select: 'allergeni',
                            populate: {
                                path: 'allergeni',
                                select: 'nome -_id'
                            }
                        },
                        {
                            path: 'categoria',
                            select: 'nome -_id'
                        }
                    ]
                });
        } else {    //Caso senza user id, per visualizzazione admin di tutti gli ordini segnati come "in preparazione"
            ordini = await Ordine.find({ stato: 'in_preparazione' })
                .populate('utente', 'email -_id')
                .populate({
                    path: 'prodotto',
                    select: 'nome descrizione prezzo immagine ingredienti categoria -_id',
                    populate: [
                            {
                            path: 'ingredienti',
                            select: 'allergeni',
                            populate: {
                                path: 'allergeni',
                                select: 'nome -_id'
                            }
                        },
                        {
                            path: 'categoria',
                            select: 'nome -_id'
                        }
                ]
                });
        }

        const mappaGroupId = new Map();     //Raggruppo per groupId, unico per ordine

        for (const ordine of ordini) {  //Per ogni ordine in "ordini" estratto dal db
            const groupId = ordine.groupId;     //Mi estraggo il groupID
            const email = ordine.utente.email;     //Mi prendo la mail del singolo ordine
            const prodotto = ordine.prodotto;       //Prendo il singolo prodotto

            const allergeni = new Set(); //Set è una collezione di valori unici, ignora i duplicati: ciclo e mi creo un array con tutti gli allergeni del prodotto

            for (const ingrediente of prodotto.ingredienti) {           //Ciclo per raggruppare gli allergeni
                for (const allergene of ingrediente.allergeni) {
                    allergeni.add(allergene.nome);      //Aggiungo al set, automaticamente non verranno considerati i duplicati
                }
            }

            const prodottoFormattato = {        //Formatto il singolo prodotto, sarà un componente del vettore items dell'output
                name: prodotto.nome,
                description: prodotto.descrizione,
                price: prodotto.prezzo,
                image: prodotto.immagine,
                category: prodotto.categoria[0].nome,   //Categoria mi viene ritornato come array, poichè è unica posso farlo
                allergens: Array.from(allergeni)
            };

            //Ciclo per raggruppare tutti i prodotti che fanno parte dello stesso ordine
            if (!mappaGroupId.has(groupId)) {       //Controllo se Map contiene già una voce con quel groupId
                mappaGroupId.set(groupId, {         //Se non esiste una voce con quel groupId, la vado a creare, questo vuol dire che in questo caso avrò un nuovo blocco di ordini
                    utente: { email },              //Qui assegno già la mail
                    stato: ordine.stato,
                    items: [prodottoFormattato]
                });
            } else {
                mappaGroupId.get(groupId).items.push(prodottoFormattato);   //Altrimenti se mappaGroupId ha già una voce con quel groupId, semplicemente vado ad aggiungere tale prodotto precedentemente formattato
            }
        }

        const risultato = Array.from(mappaGroupId.values());        //Converto i valori della Map (formattati diversamente da ciò che serve a me) in array Javascript standard
        res.status(200).json(risultato);

    } catch (err) {
        console.error("Errore nel recupero degli ordini:", err);
        res.status(500).json({ errore: "Errore nel recupero degli ordini" });
    }
}