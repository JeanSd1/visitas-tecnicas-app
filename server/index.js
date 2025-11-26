const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/visitas';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.log('Erro ao conectar MongoDB:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
