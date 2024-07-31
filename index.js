const express = require('express');
const app = express();
const port = 3002;

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica para la solicitud raíz ('/')
app.get('/', (req, res) => {
  const { name, lastName } = req.query;
  if (name && lastName) {
    res.send(`Hola ${name} ${lastName}`);
  } else {
    res.send('Hello World!!');
  }
});

// Ruta para manejar solicitudes GET a /users
app.get('/users', (req, res) => {
  res.send('GET request to /users');
});

// Ruta para manejar solicitudes POST a /users
app.post('/users', (req, res) => {
  res.send('POST request to /users');
});

// Ruta para manejar solicitudes PUT a /users
app.put('/users', (req, res) => {
  res.send('PUT request to /users');
});

// Ruta para manejar solicitudes DELETE a /users
app.delete('/users', (req, res) => {
  res.send('DELETE request to /users');
});

// Middleware para manejar errores 404 para cualquier otra ruta
app.use((req, res) => {
  res.status(404).send('Error 404: Ruta no encontrada');
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
