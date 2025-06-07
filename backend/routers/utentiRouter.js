const express = require('express');
const router = express.Router();

// Importa il controller degli utenti
const utentiController = require('../controllers/utentiController');

// Rotta GET /api/utenti → restituisce tutti gli utenti
router.get('/', utentiController.getUtenti);

// GET /api/utenti/:id → restituisce un utente per ID
router.get('/:id', utentiController.getUtenteById);

// Rotta POST /api/utenti → crea un nuovo utente
router.post('/', utentiController.creaUtente);

module.exports = router;