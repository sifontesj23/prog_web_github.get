const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let categories = [];

app.get('/categories', (req, res) => {
  res.json(categories);
});

app.post('/categories', (req, res) => {
  const { icon, name } = req.body;

  const newCategory = {
    icon,
    name
  };

  categories.push(newCategory);
  res.status(201).send('Categoria salva com sucesso!');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});