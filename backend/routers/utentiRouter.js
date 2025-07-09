const express = require('express');
const router = express.Router();

// Importa il controller degli utenti
const utentiController = require('../controllers/utentiController');

// Rotta POST /api/utenti/login → login utente
router.post('/login', utentiController.loginUtente);

// Rotta POST /api/utenti/register → crea un nuovo utente
router.post('/register', utentiController.creaUtente);

module.exports = router;