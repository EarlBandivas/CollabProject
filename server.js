// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/budgets', (req, res) => {
  const newBudget = { id: budgets.length + 1, ...req.body };
  budgets.push(newBudget);
  res.status(201).json(newBudget);
});

app.get('/budgets', (req, res) => {
  res.status(200).json(budgets);
});

app.get('/budgets/:id', (req, res) => {
  res.status(200).json(budget);
});

app.post('/budgets', (req, res) => {
  const newBudget = { id: budgets.length + 1, ...req.body };
  budgets.push(newBudget);
  res.status(201).json(newBudget);
});

app.get('/budgets', (req, res) => {
  res.status(200).json(budgets);
});

app.get('/budgets/:id', (req, res) => {
  const budget = budgets.find((b) => b.id === parseInt(req.params.id));
  if (!budget) return res.status(404).send('Budget not found.');
  res.status(200).json(budget);
});
