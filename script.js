// MENU (edit freely)
const menu = [
    { name: "Kofta", price: 120 },
    { name: "Kabab", price: 150 },
    { name: "Tarb", price: 140 },
    { name: "Chicken", price: 110 },
    { name: "Mix Grill", price: 180 },
    { name: "Rice", price: 40 },
    { name: "Salad", price: 35 }
];

const teamContainer = document.getElementById("team-container");
const totalCostLabel = document.getElementById("totalCost");
const addMemberBtn = document.getElementById("addMemberBtn");

let memberCount = 0;

// Add new member
addMemberBtn.addEventListener("click", () => {
    memberCount++;
    addTeamMember(memberCount);
});

// Add team member section
function addTeamMember(id) {
    const memberDiv = document.createElement("div");
    memberDiv.className = "member";

    memberDiv.innerHTML = `
        <h3>Member ${id}</h3>
        <div class="menu-items">
            ${menu.map(item => `
                <div class="item-row">
                    <label>${item.name} (${item.price} EGP)</label>
                    <input 
                        type="number" 
                        min="0" 
                        value="0" 
                        class="qty-input" 
                        data-price="${item.price}"
                    >
                </div>
            `).join('')}
        </div>
        <p class="member-total">Member Total: <span>0</span> EGP</p>
    `;

    teamContainer.appendChild(memberDiv);

    // Add listeners for quantity changes
    memberDiv.querySelectorAll(".qty-input").forEach(input => {
        input.addEventListener("input", () => calculateCosts());
    });
}

// Calculate totals
function calculateCosts() {
    let teamTotal = 0;

    document.querySelectorAll(".member").forEach(member => {
        let memberTotal = 0;

        member.querySelectorAll(".qty-input").forEach(input => {
            const qty = Number(input.value);
            const price = Number(input.dataset.price);

            memberTotal += qty * price;
        });

        // Update member total
        member.querySelector(".member-total span").innerText = memberTotal;

        teamTotal += memberTotal;
    });

    // Update team total
    totalCostLabel.innerText = teamTotal;
}
