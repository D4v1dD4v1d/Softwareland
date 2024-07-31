const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  const { name, lastName } = req.query;
  if (name && lastName) {
    res.send(`Hola ${name} ${lastName}`);
  } else {
    res.send('Hello World!!');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
