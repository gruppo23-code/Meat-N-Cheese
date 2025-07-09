const express = require('express');
const router = express.Router();
const verificaToken = require('../middlewares/userMiddleware');

// Importa il controller degli utenti
const utentiController = require('../controllers/utentiController');

// Rotta POST /api/utenti/login → login utente
router.post('/login',verificaToken ,utentiController.loginUtente );

// Rotta POST /api/utenti/register → crea un nuovo utente
router.post('/register', utentiController.creaUtente);

module.exports = router;