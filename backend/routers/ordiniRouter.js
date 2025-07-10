const express = require('express');
const ordiniController = require("../controllers/ordiniController");
const router = express.Router();

router.post('/aggiungicarrello',ordiniController.aggiungiCarrello);

module.exports = router;