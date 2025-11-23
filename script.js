// --- Full menu hardcoded ---
const menu = [
  { category: "Milkshakes", name: "Milkshake Vanilla", price: 134.55 },
  { category: "Milkshakes", name: "Milkshake Chocolate", price: 134.55 },
  { category: "Milkshakes", name: "Milkshake Blueberry", price: 132.55 },
  { category: "Milkshakes", name: "Milkshake Lemon Mint", price: 132.55 },
  { category: "Milkshakes", name: "Milkshake Oreo", price: 154.55 },
  { category: "Milkshakes", name: "Snickers Shake", price: 154.55 },
  { category: "Milkshakes", name: "Kitkat Shake", price: 154.55 },
  { category: "Milkshakes", name: "Milkshake Pomegranate", price: 154.55 },
  { category: "Milkshakes", name: "Milkshake Coconut", price: 134.55 },
  { category: "Milkshakes", name: "Milkshake Grape", price: 134.55 },
  { category: "Milkshakes", name: "Milkshake Peach", price: 156.55 },
  { category: "Milkshakes", name: "Frappuccino Mocha", price: 134.55 },
  { category: "Milkshakes", name: "Frappuccino Latte", price: 156.55 },
  { category: "Milkshakes", name: "Milkshake Date", price: 156.55 },
  { category: "Milkshakes", name: "Milkshake Mango", price: 134.55 },
  { category: "Milkshakes", name: "Milkshake Strawberry", price: 134.55 },
  { category: "Milkshakes", name: "Milkshake Guava", price: 134.55 },
  { category: "Soft Drinks & Ice Cream", name: "Mix Ice Cream", price: 146.55 },
  { category: "Soft Drinks & Ice Cream", name: "Vanilla Ice Cream", price: 124.55 },
  { category: "Soft Drinks & Ice Cream", name: "Soft Drinks (Cola/Fanta/Sprite)", price: 46.55 },
  { category: "Soft Drinks & Ice Cream", name: "Schweppes", price: 46.55 },
  { category: "Soft Drinks & Ice Cream", name: "Fayrouz", price: 46.55 },
  { category: "Soft Drinks & Ice Cream", name: "Birrell", price: 53.55 },
  { category: "Soft Drinks & Ice Cream", name: "Red Bull", price: 111.55 },
  { category: "Soft Drinks & Ice Cream", name: "Schweppes Gold", price: 48.55 },
  { category: "Soft Drinks & Ice Cream", name: "Moussy", price: 53.55 },
  { category: "Soft Drinks & Ice Cream", name: "Mineral Water (Small)", price: 26.55 },
  { category: "Soft Drinks & Ice Cream", name: "Mineral Water (Large)", price: 31.55 },
  { category: "Soft Drinks & Ice Cream", name: "Sparkling Water", price: 31.55 },
  { category: "Desserts", name: "Om Ali", price: 102.55 },
  { category: "Desserts", name: "Rice with Milk", price: 102.55 },
  { category: "Desserts", name: "Red Velvet", price: 129.55 },
  { category: "Desserts", name: "Cherry Cake", price: 129.55 },
  { category: "Desserts", name: "Cheese Cake", price: 135.55 },
  { category: "Desserts", name: "Pudding", price: 102.55 },
  { category: "Desserts", name: "Rice Pudding Casserole (Large)", price: 105.55 },
  { category: "Desserts", name: "Milk Pudding Platter (Large)", price: 102.55 },
  { category: "Desserts", name: "Ice Cream", price: 102.55 },
  { category: "Desserts", name: "Pumpkin Platter", price: 102.55 },
  { category: "Juices & Smoothies", name: "High Way (Mango + Kiwi)", price: 132.55 },
  { category: "Juices & Smoothies", name: "Tropical (Mango + Banana + Pineapple)", price: 127.55 },
  { category: "Juices & Smoothies", name: "Florida (Mango + Strawberry + Banana)", price: 127.55 },
  { category: "Juices & Smoothies", name: "Banana Caramel", price: 127.55 },
  { category: "Juices & Smoothies", name: "Ice Latte", price: 132.55 },
  { category: "Juices & Smoothies", name: "Ice Coffee", price: 132.55 },
  { category: "Juices & Smoothies", name: "Ice Chocolate", price: 134.55 },
  { category: "Juices & Smoothies", name: "Ice Cappuccino", price: 151.55 },
  { category: "Juices & Smoothies", name: "Ice Flat White", price: 142.55 },
  { category: "Smoothies", name: "Watermelon Smoothie", price: 120.55 },
  { category: "Smoothies", name: "Pineapple Smoothie", price: 121.55 },
  { category: "Smoothies", name: "Mango Smoothie", price: 142.55 },
  { category: "Smoothies", name: "Strawberry Smoothie", price: 120.55 },
  { category: "Smoothies", name: "Lemon Mint Smoothie", price: 121.55 },
  { category: "Smoothies", name: "Lemon Smoothie", price: 120.55 },
  { category: "Smoothies", name: "Kiwi Smoothie", price: 151.55 },
  { category: "Smoothies", name: "Guava Smoothie", price: 151.55 },
  { category: "Smoothies", name: "Coconut Smoothie", price: 151.55 },
  { category: "Smoothies", name: "Blueberry Smoothie", price: 150.55 },
  { category: "Smoothies", name: "Red Grapes Smoothie", price: 151.55 },
  { category: "Smoothies", name: "Orange Smoothie", price: 151.55 },
  { category: "Smoothies", name: "Blue Passion Smoothie", price: 151.55 },
  { category: "Smoothies", name: "Pomegranate Smoothie", price: 135.55 },
  { category: "Smoothies", name: "Piña Colada Smoothie", price: 135.55 },
  { category: "Smoothies", name: "Cherry Smoothie", price: 135.55 },
  { category: "Smoothies", name: "Apple Smoothie", price: 135.55 },
  { category: "Fresh Juices", name: "Lemon Juice", price: 86.55 },
  { category: "Fresh Juices", name: "Orange Juice", price: 82.55 },
  { category: "Fresh Juices", name: "Lemon Mint Juice", price: 90.55 },
  { category: "Fresh Juices", name: "Mango Juice", price: 85.55 },
  { category: "Fresh Juices", name: "Guava Juice", price: 85.55 },
  { category: "Fresh Juices", name: "Kiwi Juice", price: 96.55 },
  { category: "Fresh Juices", name: "Banana with Milk Juice", price: 86.55 },
  { category: "Fresh Juices", name: "Strawberry Juice", price: 99.55 },
  { category: "Fresh Juices", name: "Rocket Juice", price: 130.55 },
  { category: "Fresh Juices", name: "Cucumber + Watercress Juice", price: 89.55 },
  { category: "Fresh Juices", name: "Avocado Juice", price: 115.55 },
  { category: "Fresh Juices", name: "Pineapple Juice", price: 115.55 },
  { category: "Fresh Juices", name: "Watermelon Juice", price: 89.55 },
  { category: "Fresh Juices", name: "Small Fruit Dish", price: 258.55 },
  { category: "Fresh Juices", name: "Large Fruit Dish", price: 412.55 },
  { category: "Fresh Juices", name: "Prune Juice", price: 111.55 },
  { category: "Fresh Juices", name: "Grape Juice", price: 111.55 },
  { category: "Hot Drinks", name: "Capuccino", price: 125.55 },
  { category: "Hot Drinks", name: "Nescafe", price: 104.55 },
  { category: "Hot Drinks", name: "Hot Chocolate", price: 122.55 },
  { category: "Hot Drinks", name: "Hot Cider", price: 98.55 },
  { category: "Hot Drinks", name: "Turkish Coffee", price: 66.55 },
  { category: "Hot Drinks", name: "Turkish Coffee Double", price: 86.55 },
  { category: "Hot Drinks", name: "French Coffee", price: 90.55 },
  { category: "Hot Drinks", name: "Hazel Coffee", price: 85.55 },
  { category: "Hot Drinks", name: "Tea", price: 48.55 },
  { category: "Hot Drinks", name: "Espresso", price: 78.55 },
  { category: "Hot Drinks", name: "Espresso Double", price: 121.55 },
  { category: "Hot Drinks", name: "Ristretto", price: 78.55 },
  { category: "Hot Drinks", name: "Lungo", price: 79.55 },
  { category: "Hot Drinks", name: "Macchiato", price: 88.55 },
  { category: "Hot Drinks", name: "Hot White", price: 101.55 },
  { category: "Hot Drinks", name: "Flat Firbay", price: 122.55 },
  { category: "Hot Drinks", name: "Mocha", price: 132.55 },
  { category: "Hot Drinks", name: "Latte", price: 116.55 },
  { category: "Hot Drinks", name: "American Coffee", price: 110.55 },
  { category: "Hot Drinks", name: "Americano", price: 99.55 },
  { category: "Refreshments", name: "Mojito", price: 134.55 },
  { category: "Refreshments", name: "Cherry Cola", price: 128.55 },
  { category: "Refreshments", name: "Caramel Explosion", price: 128.55 },
  { category: "Refreshments", name: "Corn Pro", price: 127.55 },
  { category: "Refreshments", name: "Lemon Corn Mint", price: 127.55 },
  { category: "Salads", name: "Sesame Tahini Salad", price: 60.55 },
  { category: "Salads", name: "Baba Ghanouj", price: 60.55 },
  { category: "Salads", name: "Hummus", price: 60.55 },
  { category: "Salads", name: "Mixed Pickles", price: 53.55 },
  { category: "Salads", name: "Beetroot Salad", price: 65.55 },
  { category: "Salads", name: "Garlic Dip", price: 60.55 },
  { category: "Salads", name: "Mint Tomatoes", price: 60.55 },
  { category: "Salads", name: "Coleslaw", price: 60.55 },
  { category: "Salads", name: "Tuna Salad", price: 98.55 },
  { category: "Salads", name: "Green Salad", price: 56.55 },
  { category: "Appetizers", name: "Vine Leaves Mahshi (Small)", price: 204.55 },
  { category: "Appetizers", name: "Spring Roll (5 pcs)", price: 208.55 },
  { category: "Appetizers", name: "Sambousak (4 pcs)", price: 208.55 },
  { category: "Appetizers", name: "Sambousak Cheese (4 pcs)", price: 198.55 },
  { category: "Appetizers", name: "Pizza Halloumi", price: 215.55 },
  { category: "Appetizers", name: "Medium Mix Mahshi", price: 213.55 },
  { category: "Appetizers", name: "Large Mix Mahshi", price: 229.55 },
  { category: "Appetizers", name: "Mombar (5 pcs)", price: 279.55 },
  { category: "Appetizers", name: "Farm Potato / Chips", price: 113.55 },
  { category: "Side Dishes", name: "Oven Baked Rice Bram", price: 134.55 },
  { category: "Side Dishes", name: "Oven Baked Rice w/ Meat Casserole", price: 401.55 },
  { category: "Side Dishes", name: "Oven Baked Rice w/ Pigeon Casserole", price: 481.55 },
  { category: "Side Dishes", name: "Plain White Rice", price: 100.55 },
  { category: "Side Dishes", name: "Vermicelli White Rice", price: 110.55 },
  { category: "Side Dishes", name: "Vermicelli Plain", price: 100.55 },
  { category: "Side Dishes", name: "White Rice w/ Liver Platter", price: 154.55 },
  { category: "Side Dishes", name: "Mandi Rice Platter", price: 144.55 },
  { category: "Side Dishes", name: "Kabsa Rice Platter", price: 144.55 },
  { category: "Side Dishes", name: "Bechamel Potato Platter", price: 108.55 },
  { category: "Side Dishes", name: "Bolognese Pasta w/ Red Sauce Platter", price: 186.55 },
  { category: "Side Dishes", name: "White Sauce Pasta w/ Chicken Platter", price: 217.55 },
  { category: "Side Dishes", name: "Negresco Pasta Platter", price: 217.55 },
  { category: "Side Dishes", name: "Pasta w/ Sausage", price: 278.55 },
  { category: "Side Dishes", name: "Spaghetti w/ Red Sauce Platter", price: 163.55 },
  { category: "Side Dishes", name: "Orzo Soup", price: 108.55 },
  { category: "Side Dishes", name: "Lentil Soup", price: 119.55 },
  { category: "Side Dishes", name: "Cream of Chicken Soup", price: 188.55 },
  { category: "Side Dishes", name: "Cream of Mushroom Soup Platter", price: 198.55 },
  { category: "Side Dishes", name: "Cream of Chicken & Mushroom Soup Platter", price: 198.55 },
  { category: "Side Dishes", name: "Bread (1 basket)", price: 32.55 },
  { category: "Grilled (1/4 Kilo)", name: "Plain Baklava Kebab", price: 162.55 },
  { category: "Grilled (1/4 Kilo)", name: "Stuffed Baklava Kebab", price: 185.55 },
  { category: "Grilled (1/4 Kilo)", name: "Chicken Thighs w/ Iranian Marinade", price: 199.55 },
  { category: "Grilled (1/4 Kilo)", name: "Bone Marrow", price: 203.55 },
  { category: "Grilled (1/4 Kilo)", name: "Stuffed Kofta w/ Rice", price: 199.55 },
  { category: "Grilled (1/4 Kilo)", name: "Kofta Dowoud", price: 219.55 },
  { category: "Grilled (1/4 Kilo)", name: "Kofta Rice", price: 249.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mutton Kebab", price: 197.55 },
  { category: "Grilled (1/4 Kilo)", name: "Veal Kebab", price: 205.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mutton Kofta", price: 189.55 },
  { category: "Grilled (1/4 Kilo)", name: "Grilled Ribs", price: 205.55 },
  { category: "Grilled (1/4 Kilo)", name: "Veal Ribs", price: 205.55 },
  { category: "Grilled (1/4 Kilo)", name: "Veal Fillet", price: 249.55 },
  { category: "Grilled (1/4 Kilo)", name: "Neefa", price: 471.55 },
  { category: "Grilled (1/4 Kilo)", name: "Kofta and Tarb", price: 207.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mix Kebab and Kofta", price: 207.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mix Veal", price: 258.55 },
  { category: "Grilled (Full/Half Chicken)", name: "Whole Charcoal Grilled Chicken", price: 507.55 },
  { category: "Grilled (Full/Half Chicken)", name: "Half Chicken Charcoal Grilled", price: 297.55 },
  { category: "Grilled (Full/Half Chicken)", name: "Whole Chicken Curry or Tandoori", price: 507.55 },
  { category: "Grilled (Full/Half Chicken)", name: "Half Chicken Curry or Tandoori", price: 297.55 },
  { category: "Grilled (Single Portions)", name: "Grilled Pigeon", price: 318.55 },
  { category: "Grilled (Single Portions)", name: "Grilled Chicken Breasts", price: 209.55 },
  { category: "Grilled (Single Portions)", name: "Grilled Chicken Quails", price: 209.55 },
  { category: "Tajine Casserole", name: "Knuckles Casserole", price: 681.55 },
  { category: "Tajine Casserole", name: "Knuckles w/ Onion and Pepper Casserole", price: 681.55 },
  { category: "Tajine Casserole", name: "Knuckles Fatteh Casserole", price: 703.55 },
  { category: "Tajine Casserole", name: "Vine Leaves w/ Knuckles Casserole", price: 632.55 },
  { category: "Tajine Casserole", name: "Veal Oxtail Casserole", price: 613.55 },
  { category: "Tajine Casserole", name: "Beef Oxtail Casserole", price: 613.55 },
  { category: "Tajine Casserole", name: "Oxtail w/ Orzo Casserole", price: 650.55 },
  { category: "Tajine Casserole", name: "Vine Leaves w/ Oxtail Casserole", price: 660.55 },
  { category: "Tajine Casserole", name: "Oxtail w/ Okra Casserole", price: 650.55 },
  { category: "Tajine Casserole", name: "Meat w/ Orzo Casserole", price: 453.55 },
  { category: "Tajine Casserole", name: "Meat w/ Onion and Tomato Casserole", price: 525.55 },
  { category: "Tajine Casserole", name: "Mix Veg w/ Meat Casserole", price: 482.55 },
  { category: "Tajine Casserole", name: "Ribs w/ Vine Leaves Casserole", price: 779.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Veal Cubes Pan", price: 397.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Oriental Sausage Fajita Pan", price: 402.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Oriental Sausage Pan", price: 399.55 },
  { category: "Pan Corner (1/2 Kilo)", name: "Chicken Fajita Pan", price: 561.55 },
  { category: "Pan Corner (1/2 Kilo)", name: "Meat Fajita Pan", price: 682.55 },
  { category: "Kitchen Corner (Entrees)", name: "Half Boneless Stuffed Chicken", price: 361.55 },
  { category: "Kitchen Corner (Entrees)", name: "Meat Plate with Mushrooms", price: 518.55 },
  { category: "Kitchen Corner (Entrees)", name: "Escalope Pane", price: 518.55 },
  { category: "Kitchen Corner (Entrees)", name: "Chicken Pane Order", price: 518.55 },
  { category: "Kitchen Corner (Entrees)", name: "Breast Meat", price: 479.55 },
  { category: "Kitchen Corner (Entrees)", name: "Half Baladi Chicken", price: 467.55 },
  { category: "Kitchen Corner (Entrees)", name: "Half Baladi Chicken Meal with Vermicelli Rice", price: 479.55 },
  { category: "Kitchen Corner (Entrees)", name: "Roasted Rabbit", price: 243.55 },
  { category: "Kitchen Corner (Seafood)", name: "Salmon Steak", price: 682.55 },
  { category: "Kitchen Corner (Seafood)", name: "Sea Bass Fillet", price: 600.55 }
];


let orders = []; // { personName, items: [{name, quantity, price}] }

// Add new person
function addPerson() {
  const name = document.getElementById('personName').value.trim();
  if (!name) return alert('Enter a name');
  orders.push({ personName: name, items: [] });
  renderOrders();
  document.getElementById('personName').value = '';
}

// Render all persons and their orders
function renderOrders() {
  const section = document.getElementById('orderSection');
  section.innerHTML = '';

  orders.forEach((order, index) => {
    const div = document.createElement('div');
    div.className = 'person';
    div.innerHTML = `
      <h3>${order.personName}</h3>
      <select onchange="updateItemsDropdown(${index}, this.value)">
        <option value="">Select Category</option>
        ${[...new Set(menu.map(i => i.category))].map(cat => `<option value="${cat}">${cat}</option>`).join('')}
      </select>
      <select id="itemSelect-${index}">
        <option value="">Select Item</option>
      </select>
      <input type="number" min="1" value="1" id="quantity-${index}">
      <button onclick="addItemToPerson(${index})">Add Item</button>
      <ul id="personItems-${index}">
        ${order.items.map(item => `<li>${item.name} x ${item.quantity} = ${(item.price * item.quantity).toFixed(2)} EGP</li>`).join('')}
      </ul>
      <b>Total: ${order.items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)} EGP</b>
    `;
    section.appendChild(div);
  });
}

// Update items dropdown based on category
function updateItemsDropdown(personIndex, category) {
  const itemSelect = document.getElementById(`itemSelect-${personIndex}`);
  itemSelect.innerHTML = `<option value="">Select Item</option>` +
    menu.filter(i => i.category === category)
        .map(i => `<option value="${i.name}">${i.name}</option>`).join('');
}

// Add item to person
function addItemToPerson(personIndex) {
  const itemSelect = document.getElementById(`itemSelect-${personIndex}`);
  const quantity = parseInt(document.getElementById(`quantity-${personIndex}`).value);
  const itemName = itemSelect.value;
  if (!itemName || quantity < 1) return alert('Select item and quantity');

  const itemData = menu.find(i => i.name === itemName);
  orders[personIndex].items.push({ name: itemData.name, quantity, price: itemData.price });
  renderOrders();
}
