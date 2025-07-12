const express = require('express');
const ordiniController = require("../controllers/ordiniController");

const { verificaToken } = require("../middlewares/userMiddleware");
const router = express.Router();

router.post('/aggiungicarrello', verificaToken(), ordiniController.aggiungiCarrello);

router.get('/popolaCarrello', verificaToken(),ordiniController.popolaCarrello);

router.post('/inviaOrdine', verificaToken(),ordiniController.inviaOrdine);

router.delete('/eliminaDaCarrello/:id', verificaToken(),ordiniController.eliminaDaCarrello);

router.get('/visualizzaOrdini', ordiniController.visualizzaOrdini);

router.post("/consegnato", ordiniController.contrassegnaPronto);


// Questa rotta viene chiamata dal frontend per sapere dove reindirizzare l'utente
router.get('/ordine-ruolo', verificaToken(), (req, res) => {
    if (req.ruolo === "admin") {
        return res.json({ redirect: "/OrdineAdmin" });
    } else {
        return res.json({ redirect: "/OrdineClient" });
    }
});

module.exports = router;