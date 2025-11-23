let menu = [];
let orders = [];

// Load menu.csv
fetch('menu.csv')
  .then(res => res.text())
  .then(data => {
    const lines = data.trim().split('\n');
    for (let i = 1; i < lines.length; i++) {
      const [name, price] = lines[i].split(',');
      menu.push({ name, price: parseFloat(price) });
    }
    // After menu is loaded, load orders
    loadOrders();
  })
  .catch(err => console.error('Error loading menu:', err));

// Load orders.csv
function loadOrders() {
  fetch('orders.csv')
    .then(res => res.text())
    .then(data => {
      const lines = data.trim().split('\n');
      for (let i = 1; i < lines.length; i++) {
        const [Name, Item, Quantity, Price] = lines[i].split(',');
        orders.push({
          name: Name,
          item: Item,
          quantity: parseInt(Quantity),
          price: parseFloat(Price)
        });
      }
      renderOrders();
    })
    .catch(err => console.log('No orders.csv found or empty, starting fresh.'));
}

function renderOrders() {
  const tbody = document.querySelector('#orders-table tbody');
  tbody.innerHTML = '';
  orders.forEach((order, index) => {
    const row = document.createElement('tr');

    // Name
    const nameCell = document.createElement('td');
    nameCell.textContent = order.name;
    row.appendChild(nameCell);

    // Item Dropdown
    const itemCell = document.createElement('td');
    const select = document.createElement('select');
    menu.forEach(m => {
      const option = document.createElement('option');
      option.value = m.name;
      option.textContent = `${m.name} (${m.price} EGP)`;
      if (m.name === order.item) option.selected = true;
      select.appendChild(option);
    });
    select.onchange = () => {
      const selectedItem = menu.find(m => m.name === select.value);
      order.item = selectedItem.name;
      order.price = selectedItem.price;
      updateRow(row, order);
    };
    itemCell.appendChild(select);
    row.appendChild(itemCell);

    // Quantity
    const quantityCell = document.createElement('td');
    const qtyInput = document.createElement('input');
    qtyInput.type = 'number';
    qtyInput.min = 1;
    qtyInput.value = order.quantity;
    qtyInput.oninput = () => {
      order.quantity = parseInt(qtyInput.value);
      updateRow(row, order);
    };
    quantityCell.appendChild(qtyInput);
    row.appendChild(quantityCell);

    // Price per Item
    const priceCell = document.createElement('td');
    priceCell.textContent = order.price.toFixed(2);
    row.appendChild(priceCell);

    // Total with Tax
    const totalCell = document.createElement('td');
    totalCell.textContent = (order.price * order.quantity * 1.28).toFixed(2);
    row.appendChild(totalCell);

    // Action
    const actionCell = document.createElement('td');
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => {
      orders.splice(index, 1);
      renderOrders();
    };
    actionCell.appendChild(delBtn);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  });
}

function updateRow(row, order) {
  row.cells[3].textContent = order.price.toFixed(2);
  row.cells[4].textContent = (order.price * order.quantity * 1.28).toFixed(2);
}

function addMember() {
  const nameInput = document.getElementById('member-name');
  const name = nameInput.value.trim();
  if (!name) return alert('Enter a name!');
  
  // Add one empty order row for this member
  orders.push({
    name: name,
    item: menu[0].name,
    quantity: 1,
    price: menu[0].price
  });

  nameInput.value = '';
  renderOrders();
}

// Download CSV
function downloadCSV() {
  let csv = 'Name,Item,Quantity,Price(EGP)\n';
  orders.forEach(o => {
    csv += `${o.name},${o.item},${o.quantity},${o.price}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'orders.csv';
  a.click();
}
