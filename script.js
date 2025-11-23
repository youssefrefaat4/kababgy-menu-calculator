// Elements
const namesContainer = document.getElementById("names-container");
const addNameBtn = document.getElementById("addNameBtn");
const downloadCSVBtn = document.getElementById("downloadCSVBtn");
const totalCostLabel = document.getElementById("totalCost");

let nameCount = 0;
let menu = [];
let orders = []; // store all orders in memory

// Load menu from CSV
fetch("menu.csv")
    .then(res => res.text())
    .then(data => {
        menu = parseCSV(data);
        loadOrders(); // Load initial orders after menu is ready
    });

// Load orders from CSV
function loadOrders() {
    fetch("orders.csv")
        .then(res => res.text())
        .then(data => {
            orders = parseCSV(data);
            // Populate names
            const grouped = {};
            orders.forEach(row => {
                if(!grouped[row['Name']]) grouped[row['Name']] = [];
                grouped[row['Name']].push(row);
            });
            Object.keys(grouped).forEach(name => addName(name, grouped[name]));
        });
}

// Add new Name
addNameBtn.addEventListener("click", () => addName());

// Add Name function
function addName(name = "", items = []) {
    nameCount++;
    const nameDiv = document.createElement("div");
    nameDiv.className = "name";

    nameDiv.innerHTML = `
        <div class="name-header">
            <input type="text" placeholder="Name" class="name-input" value="${name}">
            <button class="addItemBtn">Add Item</button>
        </div>
        <div class="items-container"></div>
        <p class="name-total">Total: <span>0</span> EGP</p>
    `;
    namesContainer.appendChild(nameDiv);

    const itemsContainer = nameDiv.querySelector(".items-container");
    const addItemBtn = nameDiv.querySelector(".addItemBtn");

    // Add items if any exist
    if(items.length > 0){
        items.forEach(it => addItemRow(itemsContainer, it['Item'], it['Quantity']));
    } else {
        addItemRow(itemsContainer); // default one row
    }

    addItemBtn.addEventListener("click", () => addItemRow(itemsContainer));

    // Update total on any change
    itemsContainer.addEventListener("input", calculateCosts);
    nameDiv.querySelector(".name-input").addEventListener("input", calculateCosts);
}

// Add item row
function addItemRow(container, selectedItem = "", quantity = 1) {
    const row = document.createElement("div");
    row.className = "item-row";

    row.innerHTML = `
        <select class="item-select">
            ${menu.map(item => `<option value="${item.Price}" ${item.name===selectedItem?'selected':''}>${item.name} (${item.Price} EGP)</option>`).join('')}
        </select>
        <input type="number" class="item-qty" min="1" value="${quantity}">
        <button class="removeItemBtn">X</button>
    `;
    container.appendChild(row);

    row.querySelector(".removeItemBtn").addEventListener("click", () => {
        row.remove();
        calculateCosts();
    });
}

// Calculate totals
function calculateCosts() {
    let teamTotal = 0;

    document.querySelectorAll(".name").forEach(nameDiv => {
        let nameTotal = 0;
        const nameInput = nameDiv.querySelector(".name-input");
        const items = nameDiv.querySelectorAll(".item-row");
        items.forEach(item => {
            const price = parseFloat(item.querySelector(".item-select").value);
            const qty = parseInt(item.querySelector(".item-qty").value);
            nameTotal += price * qty;
        });
        nameTotal *= 1.28; // tax/service per name
        nameDiv.querySelector(".name-total span").innerText = nameTotal.toFixed(2);
        teamTotal += nameTotal;
    });

    totalCostLabel.innerText = teamTotal.toFixed(2);
}

// CSV parsing utility
function parseCSV(data) {
    const lines = data.split("\n").filter(l => l.trim() !== "");
    const headers = lines[0].split(",");
    return lines.slice(1).map(line => {
        const values = line.split(",");
        const obj = {};
        headers.forEach((h,i) => obj[h.trim()] = values[i].trim());
        return obj;
    });
}

// Download CSV
downloadCSVBtn.addEventListener("click", () => {
    let csv = "Name,Item,Quantity,Price(EGP)\n";
    document.querySelectorAll(".name").forEach(nameDiv => {
        const name = nameDiv.querySelector(".name-input").value || "Unnamed";
        const items = nameDiv.querySelectorAll(".item-row");
        items.forEach(item => {
            const itemName = item.querySelector(".item-select").selectedOptions[0].text.split(' (')[0];
            const qty = item.querySelector(".item-qty").value;
            const price = parseFloat(item.querySelector(".item-select").value) * 1.28;
            csv += `${name},${itemName},${qty},${(price*qty).toFixed(2)}\n`;
        });
    });

    const blob = new Blob([csv], {type: "text/csv"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "orders.csv";
    a.click();
    URL.revokeObjectURL(url);
});
