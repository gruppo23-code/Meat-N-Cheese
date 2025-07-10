const Prodotto = require('../models/prodottiModel');
const Allergeni = require('../models/allergeniModel');
const Ingredienti = require('../models/ingredientiModel');
const Categorie = require('../models/categorieModel');

exports.getProdotti = async (req, res) => {
    try {
        const prodotti = await Prodotto.find({disponibile: true})
            .populate({
                path: 'ingredienti',
                populate: {
                    path: 'allergeni',
                    select: 'nome -_id'
                },
                select: 'nome allergeni'
            })
            .populate('categoria', 'nome')
            .lean();    //Converte in oggetto javascript il document mongoose


        const output = prodotti.map((p) => ({
            id: p._id,
            name: p.nome,
            category: p.categoria.map(c => c.nome).join(','),
            description: p.descrizione,
            price: p.prezzo,
            image: p.immagine,
            allergens: Array.from(
                new Set(
                    p.ingredienti.flatMap(i =>
                        (i.allergeni || []).map(a => a.nome)
                    )
                )
            )
        }));
        res.json(output);
    } catch (err) {
        console.error("Errore durante il caricamento dei prodotti: ", err);
        res.status(500).json({error: "Internal server error"});
    }
}