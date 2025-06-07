const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//Importazione Rotte
const utentiRoutes = require('./routers/utentiRouter');

connectDB().then(() => console.log('Connessione a MongoDB completata!')); //metto () invece che una variabile poichè la funzione non restituisce nulla nella promise

const app = express();
app.use(cors()); //Permette richieste dal frontend
app.use(express.json()); //Permette di leggere json nel body delle richieste

//Rotte API
app.use('/api/utenti', utentiRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => { //app.listen accetta due parametri: porta e callback (funzione eseguita subito dopo)
    console.log("Server started on port: " + port);
})