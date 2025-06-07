const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Carico le variabili d'ambiente
dotenv.config();

const connectDB = async () => { //Funzione asincrona poichè potrebbe richiedere tempo
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connesso a MongoDB con successo!!!');
    } catch (error) {
        console.error('Errore nella connessione a MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
