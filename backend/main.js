const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

//Importazione Rotte
const utentiRoutes = require('./routers/utentiRouter');
const prodottiRoutes = require('./routers/prodottiRouter');
const ordiniRoutes = require('./routers/ordiniRouter');

connectDB().then(() => console.log('Connessione a MongoDB completata!')); //metto () invece che una variabile poichè la funzione non restituisce nulla nella promise

const app = express();
app.use(cors({
    origin: process.env.IND_FRONTEND,
    credentials: true,      //Abilito lo scambio di cookies
})); //Permette richieste dal frontend
app.use(express.json()); //Permette di leggere json nel body delle richieste
app.use(cookieParser()); //Permette di estrarre i cookie dalle richieste HTTP

//Rotte API
app.use('/api/utenti', utentiRoutes);

app.use('/api/prodotti', prodottiRoutes);

app.use('/api/ordini', ordiniRoutes);


const port = process.env.PORT || 5001;
app.listen(port, () => { //app.listen accetta due parametri: porta e callback (funzione eseguita subito dopo)
    console.log("Server started on port: " + port);
})