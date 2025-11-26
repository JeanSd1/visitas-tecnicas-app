import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('Carregando...');

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/health')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(err => setStatus('Erro ao conectar ao servidor'));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Visitas Técnicas</h1>
        <p>Status: {status}</p>
      </header>
    </div>
  );
}

export default App;
