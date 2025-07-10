const express = require('express');
const router = express.Router();

// Importa il controller degli utenti
const utentiController = require('../controllers/utentiController');

// Rotta POST /api/utenti/login → login utente
router.post('/login',utentiController.loginUtente);

// Rotta POST /api/utenti/register → crea un nuovo utente
router.post('/register', utentiController.creaUtente);

// Rotta POST /api/utenti/register → effettua il logout cancellando anche il refresh token
router.post('/logout',utentiController.logoutUtente);

//Rotta per refreshare il token
router.get('/refreshToken', utentiController.refreshToken);

module.exports = router;