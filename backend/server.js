const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta simple para probar el servidor
app.get('/', (req, res) => {
    res.send('¡Hola, asistente virtual en desarrollo!');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});