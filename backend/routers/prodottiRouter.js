const express = require('express');
const router = express.Router();

const prodottiController = require('../controllers/prodottiController');


router.get('/getprodotti', prodottiController.getProdotti);

module.exports = router;