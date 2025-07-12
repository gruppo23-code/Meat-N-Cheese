const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const { Server } = require("socket.io");
const http = require('http');

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


const server = http.createServer(app);      //Creo un server HTTP, necessario per socket.io che si collega al server HTTP e non direttamente all'app Express
const io = new Server(server, {     //Creo un'istanza di Socket.IO legata al server appena creato
    cors: {     //Configurazione di cors per le connessioni WebSocket
        origin: process.env.IND_FRONTEND,
        credentials: true
    }
});

app.set('io', io);      //Salvo l'oggetto io dentro l'app Express rendendolo accessibile in tutti i controllers mediante "req.app.get('io')

io.on("connection", (socket) => {
    const ruolo = socket.handshake.auth.ruolo;
    const userId = socket.handshake.auth.userId;

    //console.log(`Socket connesso: ${socket.id}`);
    console.log(`Ruolo: ${ruolo} | Utente ID: ${userId}`);

    if (ruolo === "admin") {
        socket.join("admin"); // Tutti gli admin nella stessa stanza
        //console.log(`✅ Socket ${socket.id} unito alla stanza 'admin'`);
    } else if (ruolo === "cliente" && userId) {
        socket.join(`utente_${userId}`); // Ogni cliente ha la sua stanza
        //console.log(`✅ Socket ${socket.id} unito alla stanza 'utente_${userId}'`);
    }

    socket.on("disconnect", () => {
        console.log(`Socket disconnesso: ${socket.id}`);
    });
});



const port = process.env.PORT || 5001;
server.listen(port, () => { //app.listen accetta due parametri: porta e callback (funzione eseguita subito dopo); Cambiato in server.listen per socket.io
    console.log("Server started on port: " + port);
})