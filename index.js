const express = require('express');
const fs = require('fs'); // es la libreria para trabajar con archivos
const app = express();
const port = 3002;

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica para la solicitud raíz ('/')
/*
practica 1
app.get('/', (req, res) => {
  const { name, lastName } = req.query;
  if (name && lastName) {
    res.send(`Hola ${name} ${lastName}`);
  } else {
    res.send('Hello World!!');
  }
});*/

// Ruta para manejar solicitudes GET a /users regresa todo el json
app.get('/users', (req, res) => {
  fs.readFile('users.json', (err, data) => {
    if (err) {
      res.status(500).send('Error leyendo el archivo.');
    } else {
      const users = JSON.parse(data);
      res.json(users);
    }
  });
});

// ruta de usuario con id regresa el usuario con el id seleccionado
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error leyendo el archivo.');
    } else {
      const users = JSON.parse(data);
      const user = users.find(u => u.id === userId);

      if (user) {
        res.json(user);
      } else {
        res.status(404).send('Usuario no encontrado.');
      }
    }
  });
});

// agregar un nuevo usuario por post
app.post('/users', (req, res) => {
  // toma el usuario mandado en el body y lo guarda en newUser
  const newUser = req.body;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error leyendo el archivo.');
    } else {
      const users = JSON.parse(data);
      // Asigna un ID único al nuevo usuario
      newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
      users.push(newUser);

      fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error guardando el usuario.');
        } else {
          res.status(201).send('Usuario creado.');
        }
      });
    }
  });
});

// Ruta para manejar solicitudes PUT a /users/:id para editar un usuario existente
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUserData = req.body;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error leyendo el archivo.');
    } else {
      const users = JSON.parse(data);
      const userIndex = users.findIndex(user => user.id === userId);

      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedUserData };

        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
          if (err) {
            res.status(500).send('Error guardando los cambios.');
          } else {
            res.status(200).send('Usuario actualizado correctamente.');
          }
        });
      } else {
        res.status(404).send('Usuario no encontrado.');
      }
    }
  });
});

// Ruta para manejar solicitudes DELETE a /users/:id
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error leyendo el archivo.');
    } else {
      let users = JSON.parse(data);
      const index = users.findIndex(user => user.id === userId);

      if (index !== -1) {
        users.splice(index, 1);

        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
          if (err) {
            res.status(500).send('Error al guardar.');
          } else {
            res.status(200).send('Usuario eliminado.');
          }
        });
      } else {
        res.status(404).send('Usuario no encontrado.');
      }
    }
  });
});

// Middleware para manejar errores 404 para cualquier otra ruta
app.use((req, res) => {
  res.status(404).send('Error 404: Ruta no encontrada');
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
