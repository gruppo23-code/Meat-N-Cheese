import { useEffect, useState } from 'react';

function App() {
  const [utenti, setUtenti] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/utenti')
        .then(res => res.json())
        .then(data => {
          console.log('Utenti ricevuti:', data); // stampa in console
          setUtenti(data); // aggiorna lo stato
        })
        .catch(err => console.error('Errore nel fetch:', err));
  }, []);

  return (
      <div>
        <h1>Lista utenti (test)</h1>
        <ul>
          {utenti.map((utente, index) => (
              <li key={utente._id || index}>
                {utente.nome} {utente.cognome} - {utente.email}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
