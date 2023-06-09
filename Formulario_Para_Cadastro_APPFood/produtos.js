const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o pacote cors

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors()); // Use o cors no seu aplicativo

let products = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name, description, price } = req.body;

  const productData = {
    name,
    description,
    price
  };

  products.push(productData);
  res.status(201).send('Produto salvo com sucesso!');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});