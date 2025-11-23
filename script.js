// Menu array (all items + price)
const menu = [
  // Milkshakes
  { name: "Milkshake Vanilla", price: 134.55 },
  { name: "Milkshake Chocolate", price: 134.55 },
  { name: "Milkshake Blueberry", price: 132.55 },
  { name: "Milkshake Lemon Mint", price: 132.55 },
  { name: "Milkshake Oreo", price: 154.55 },
  { name: "Snickers Shake", price: 154.55 },
  { name: "Kitkat Shake", price: 154.55 },
  { name: "Milkshake Pomegranate", price: 154.55 },
  { name: "Milkshake Coconut", price: 134.55 },
  { name: "Milkshake Grape", price: 134.55 },
  { name: "Milkshake Peach", price: 156.55 },
  { name: "Frappuccino Mocha", price: 134.55 },
  { name: "Frappuccino Latte", price: 156.55 },
  { name: "Milkshake Date", price: 156.55 },
  { name: "Milkshake Mango", price: 134.55 },
  { name: "Milkshake Strawberry", price: 134.55 },
  { name: "Milkshake Guava", price: 134.55 },

  // Soft Drinks & Ice Cream
  { name: "Mix Ice Cream", price: 146.55 },
  { name: "Vanilla Ice Cream", price: 124.55 },
  { name: "Soft Drinks (Cola/Fanta/Sprite)", price: 46.55 },
  { name: "Schweppes", price: 46.55 },
  { name: "Fayrouz", price: 46.55 },
  { name: "Birrell", price: 53.55 },
  { name: "Red Bull", price: 111.55 },
  { name: "Schweppes Gold", price: 48.55 },
  { name: "Moussy", price: 53.55 },
  { name: "Mineral Water (Small)", price: 26.55 },
  { name: "Mineral Water (Large)", price: 31.55 },
  { name: "Sparkling Water", price: 31.55 },

  // Desserts
  { name: "Om Ali", price: 102.55 },
  { name: "Rice with Milk", price: 102.55 },
  { name: "Red Velvet", price: 129.55 },
  { name: "Cherry Cake", price: 129.55 },
  { name: "Cheese Cake", price: 135.55 },
  { name: "Pudding", price: 102.55 },
  { name: "Rice Pudding Casserole (Large)", price: 105.55 },
  { name: "Milk Pudding Platter (Large)", price: 102.55 },
  { name: "Ice Cream", price: 102.55 },
  { name: "Pumpkin Platter", price: 102.55 },

  // Juices & Smoothies
  { name: "High Way (Mango + Kiwi)", price: 132.55 },
  { name: "Tropical (Mango + Banana + Pineapple)", price: 127.55 },
  { name: "Florida (Mango + Strawberry + Banana)", price: 127.55 },
  { name: "Banana Caramel", price: 127.55 },
  { name: "Ice Latte", price: 132.55 },
  { name: "Ice Coffee", price: 132.55 },
  { name: "Ice Chocolate", price: 134.55 },
  { name: "Ice Cappuccino", price: 151.55 },
  { name: "Ice Flat White", price: 142.55 },
  { name: "Watermelon Smoothie", price: 120.55 },
  { name: "Pineapple Smoothie", price: 121.55 },
  { name: "Mango Smoothie", price: 142.55 },
  { name: "Strawberry Smoothie", price: 120.55 },
  { name: "Lemon Mint Smoothie", price: 121.55 },
  { name: "Lemon Smoothie", price: 120.55 },
  { name: "Kiwi Smoothie", price: 151.55 },
  { name: "Guava Smoothie", price: 151.55 },
  { name: "Coconut Smoothie", price: 151.55 },
  { name: "Blueberry Smoothie", price: 150.55 },
  { name: "Red Grapes Smoothie", price: 151.55 },
  { name: "Orange Smoothie", price: 151.55 },
  { name: "Blue Passion Smoothie", price: 151.55 },
  { name: "Pomegranate Smoothie", price: 135.55 },
  { name: "Piña Colada Smoothie", price: 135.55 },
  { name: "Cherry Smoothie", price: 135.55 },
  { name: "Apple Smoothie", price: 135.55 },

  // Fresh Juices
  { name: "Lemon Juice", price: 86.55 },
  { name: "Orange Juice", price: 82.55 },
  { name: "Lemon Mint Juice", price: 90.55 },
  { name: "Mango Juice", price: 85.55 },
  { name: "Guava Juice", price: 85.55 },
  { name: "Kiwi Juice", price: 96.55 },
  { name: "Banana with Milk Juice", price: 86.55 },
  { name: "Strawberry Juice", price: 99.55 },
  { name: "Rocket Juice", price: 130.55 },
  { name: "Cucumber + Watercress Juice", price: 89.55 },
  { name: "Avocado Juice", price: 115.55 },
  { name: "Pineapple Juice", price: 115.55 },
  { name: "Watermelon Juice", price: 89.55 },
  { name: "Small Fruit Dish", price: 258.55 },
  { name: "Large Fruit Dish", price: 412.55 },
  { name: "Prune Juice", price: 111.55 },
  { name: "Grape Juice", price: 111.55 },

  // Hot Drinks
  { name: "Capuccino", price: 125.55 },
  { name: "Nescafe", price: 104.55 },
  { name: "Hot Chocolate", price: 122.55 },
  { name: "Hot Cider", price: 98.55 },
  { name: "Turkish Coffee", price: 66.55 },
  { name: "Turkish Coffee Double", price: 86.55 },
  { name: "French Coffee", price: 90.55 },
  { name: "Hazel Coffee", price: 85.55 },
  { name: "Tea", price: 48.55 },
  { name: "Espresso", price: 78.55 },
  { name: "Espresso Double", price: 121.55 },
  { name: "Ristretto", price: 78.55 },
  { name: "Lungo", price: 79.55 },
  { name: "Macchiato", price: 88.55 },
  { name: "Hot White", price: 101.55 },
  { name: "Flat Firbay", price: 122.55 },
  { name: "Mocha", price: 132.55 },
  { name: "Latte", price: 116.55 },
  { name: "American Coffee", price: 110.55 },
  { name: "Americano", price: 99.55 },

  // Salads
  { name: "Sesame Tahini Salad", price: 60.55 },
  { name: "Baba Ghanouj", price: 60.55 },
  { name: "Hummus", price: 60.55 },
  { name: "Mixed Pickles", price: 53.55 },
  { name: "Beetroot Salad", price: 65.55 },
  { name: "Garlic Dip", price: 60.55 },
  { name: "Mint Tomatoes", price: 60.55 },
  { name: "Coleslaw", price: 60.55 },
  { name: "Tuna Salad", price: 98.55 },
  { name: "Green Salad", price: 56.55 },

  // Appetizers
  { name: "Vine Leaves Mahshi (Small)", price: 204.55 },
  { name: "Spring Roll (5 pcs)", price: 208.55 },
  { name: "Sambousak (4 pcs)", price: 208.55 },
  { name: "Sambousak Cheese (4 pcs)", price: 198.55 },
  { name: "Pizza Halloumi", price: 215.55 },
  { name: "Medium Mix Mahshi", price: 213.55 },
  { name: "Large Mix Mahshi", price: 229.55 },
  { name: "Mombar (5 pcs)", price: 279.55 },
  { name: "Farm Potato / Chips", price: 113.55 },

  // Side Dishes
  { name: "Oven Baked Rice Bram", price: 134.55 },
  { name: "Oven Baked Rice w/ Meat Casserole", price: 401.55 },
  { name: "Oven Baked Rice w/ Pigeon Casserole", price: 481.55 },
  { name: "Plain White Rice", price: 100.55 },
  { name: "Vermicelli White Rice", price: 110.55 },
  { name: "Vermicelli Plain", price: 100.55 },
  { name: "White Rice w/ Liver Platter", price: 154.55 },
  { name: "Mandi Rice Platter", price: 144.55 },
  { name: "Kabsa Rice Platter", price: 144.55 },
  { name: "Bechamel Potato Platter", price: 108.55 },
  { name: "Bolognese Pasta w/ Red Sauce Platter", price: 186.55 },
  { name: "White Sauce Pasta w/ Chicken Platter", price: 217.55 },
  { name: "Negresco Pasta Platter", price: 217.55 },
  { name: "Pasta w/ Sausage", price: 278.55 },
  { name: "Spaghetti w/ Red Sauce Platter", price: 163.55 },
  { name: "Orzo Soup", price: 108.55 },
  { name: "Lentil Soup", price: 119.55 },
  { name: "Cream of Chicken Soup", price: 188.55 },
  { name: "Cream of Mushroom Soup Platter", price: 198.55 },
  { name: "Cream of Chicken & Mushroom Soup Platter", price: 198.55 },
  { name: "Bread (1 basket)", price: 32.55 },

  // Grilled (1/4 Kilo)
  { name: "Plain Baklava Kebab", price: 162.55 },
  { name: "Stuffed Baklava Kebab", price: 185.55 },
  { name: "Chicken Thighs w/ Iranian Marinade", price: 199.55 },
  { name: "Bone Marrow", price: 203.55 },
  { name: "Stuffed Kofta w/ Rice", price: 199.55 },
  { name: "Kofta Dowoud", price: 219.55 },
  { name: "Kofta Rice", price: 249.55 },
  { name: "Mutton Kebab", price: 197.55 },
  { name: "Veal Kebab", price: 205.55 },
  { name: "Mutton Kofta", price: 189.55 },
  { name: "Grilled Ribs", price: 205.55 },
  { name: "Veal Ribs", price: 205.55 },
  { name: "Veal Fillet", price: 249.55 },
  { name: "Neefa", price: 471.55 },
  { name: "Kofta and Tarb", price: 207.55 },
  { name: "Mix Kebab and Kofta", price: 207.55 },
  { name: "Mix Veal", price: 258.55 },

  // Grilled (Full/Half Chicken)
  { name: "Whole Charcoal Grilled Chicken", price: 507.55 },
  { name: "Half Chicken Charcoal Grilled", price: 297.55 },
  { name: "Whole Chicken Curry or Tandoori", price: 507.55 },
  { name: "Half Chicken Curry or Tandoori", price: 297.55 },

  // Grilled (Single Portions)
  { name: "Grilled Pigeon", price: 318.55 },
  { name: "Grilled Chicken Breasts", price: 209.55 },
  { name: "Grilled Chicken Quails", price: 209.55 },

  // Tajine Casserole
  { name: "Knuckles Casserole", price: 681.55 },
  { name: "Knuckles w/ Onion and Pepper Casserole", price: 681.55 },
  { name: "Knuckles Fatteh Casserole", price: 703.55 },
  { name: "Vine Leaves w/ Knuckles Casserole", price: 632.55 },
  { name: "Veal Oxtail Casserole", price: 613.55 },
  { name: "Beef Oxtail Casserole", price: 613.55 },
  { name: "Oxtail w/ Orzo Casserole", price: 650.55 },
  { name: "Vine Leaves w/ Oxtail Casserole", price: 660.55 },
  { name: "Oxtail w/ Okra Casserole", price: 650.55 },
  { name: "Meat w/ Orzo Casserole", price: 453.55 },
  { name: "Meat w/ Onion and Tomato Casserole", price: 525.55 },
  { name: "Mix Veg w/ Meat Casserole", price: 482.55 },
  { name: "Ribs w/ Vine Leaves Casserole", price: 779.55 },

  // Pan Corner
  { name: "Veal Cubes Pan", price: 397.55 },
  { name: "Oriental Sausage Fajita Pan", price: 402.55 },
  { name: "Oriental Sausage Pan", price: 399.55 },
  { name: "Chicken Fajita Pan", price: 561.55 },
  { name: "Meat Fajita Pan", price: 682.55 },

  // Kitchen Corner (Entrees)
  { name: "Half Boneless Stuffed Chicken", price: 361.55 },
  { name: "Meat Plate with Mushrooms", price: 518.55 },
  { name: "Escalope Pane", price: 518.55 },
  { name: "Chicken Pane Order", price: 518.55 },
  { name: "Breast Meat", price: 479.55 },
  { name: "Half Baladi Chicken", price: 467.55 },
  { name: "Half Baladi Chicken Meal with Vermicelli Rice", price: 479.55 },
  { name: "Roasted Rabbit", price: 243.55 },

  // Kitchen Corner (Seafood)
  { name: "Salmon Steak", price: 682.55 },
  { name: "Sea Bass Fillet", price: 600.55 }
];

const ordersContainer = document.getElementById("ordersContainer");
const grandTotalSpan = document.getElementById("grandTotal");

document.getElementById("addOrderBtn").addEventListener("click", addOrder);

function addOrder() {
  const orderBox = document.createElement("div");
  orderBox.className = "order-box";

  const nameInput = document.createElement("input");
  nameInput.placeholder = "Name";
  orderBox.appendChild(nameInput);
  orderBox.appendChild(document.createElement("br"));

  // Add first item row by default
  addItemRow(orderBox, 1);

  const addItemBtn = document.createElement("button");
  addItemBtn.textContent = "Add Item";
  addItemBtn.addEventListener("click", () => {
    const nextIndex = orderBox.querySelectorAll(".item-row").length + 1;
    addItemRow(orderBox, nextIndex);
  });

  orderBox.appendChild(addItemBtn);
  orderBox.appendChild(document.createElement("br"));

  const totalSpan = document.createElement("span");
  totalSpan.textContent = "Total: 0.00 EGP";
  orderBox.appendChild(totalSpan);

  ordersContainer.appendChild(orderBox);

  // Update totals on any input change
  orderBox.addEventListener("input", () => updateOrderTotal(orderBox, totalSpan));
}

function addItemRow(container, index) {
  const div = document.createElement("div");
  div.className = "item-row";

  const select = document.createElement("select");
  menu.forEach(item => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = `${item.name} - ${item.price} EGP`;
    select.appendChild(option);
  });

  const qty = document.createElement("input");
  qty.type = "number";
  qty.value = 1;
  qty.min = 1;
  qty.style.width = "50px";

  div.appendChild(document.createTextNode(`Item ${index}: `));
  div.appendChild(select);
  div.appendChild(document.createTextNode(" Qty: "));
  div.appendChild(qty);

  container.appendChild(div);
}

function updateOrderTotal(orderBox, totalSpan) {
  const rows = orderBox.querySelectorAll(".item-row");
  let total = 0;
  rows.forEach(row => {
    const select = row.querySelector("select");
    const qty = parseInt(row.querySelector("input").value) || 1;
    const item = menu.find(i => i.name === select.value);
    if (item) total += item.price * qty;
  });
  total *= 1.28; // apply tax/service
  totalSpan.textContent = `Total: ${total.toFixed(2)} EGP`;
  updateGrandTotal();
}

function updateGrandTotal() {
  let grandTotal = 0;
  document.querySelectorAll(".order-box span").forEach(span => {
    const text = span.textContent.replace("Total: ", "").replace(" EGP", "");
    const val = parseFloat(text) || 0;
    grandTotal += val;
  });
  grandTotalSpan.textContent = grandTotal.toFixed(2);
}
