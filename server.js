const express = require('express');
const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

// Load menu from CSV
let menu = [];
fs.createReadStream('menu.csv')
  .pipe(csvParser())
  .on('data', row => {
    menu.push({ category: row['Category'], name: row['Item Name'], price: parseFloat(row['Price (EGP)']) });
  })
  .on('end', () => console.log('Menu loaded'));

// Helper to read orders
function readOrders() {
  let orders = [];
  if (!fs.existsSync('orders.csv')) return [];
  const data = fs.readFileSync('orders.csv', 'utf8');
  const lines = data.trim().split('\n').slice(1); // skip header
  for (let line of lines) {
    const [name, itemsJSON] = line.split(',', 2);
    orders.push({ name, items: JSON.parse(itemsJSON) });
  }
  return orders;
}

// Helper to write orders
function writeOrders(orders) {
  const lines = ['Name,ItemsJSON'];
  for (let order of orders) {
    lines.push(`${order.name},${JSON.stringify(order.items).replace(/,/g,';')}`); 
  }
  fs.writeFileSync('orders.csv', lines.join('\n'));
}

// API endpoints
app.get('/menu', (req, res) => res.json(menu));

app.get('/orders', (req, res) => {
  res.json(readOrders());
});

app.post('/orders', (req, res) => {
  const { name, items } = req.body;
  let orders = readOrders();
  const index = orders.findIndex(o => o.name === name);
  if (index >= 0) {
    orders[index].items = items; // update existing
  } else {
    orders.push({ name, items }); // add new
  }
  writeOrders(orders);
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
