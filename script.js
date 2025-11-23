const TAX_SERVICE = 1.28;

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
  { category: "Juices & Smoothies", name: "High Way (Mango + Kiwi)", price: 132.55 },
  { category: "Juices & Smoothies", name: "Tropical (Mango + Banana + Pineapple)", price: 127.55 },
  { category: "Juices & Smoothies", name: "Florida (Mango + Strawberry + Banana)", price: 127.55 },
  { category: "Juices & Smoothies", name: "Banana Caramel", price: 127.55 },
  { category: "Juices & Smoothies", name: "Ice Latte", price: 132.55 },
  { category: "Juices & Smoothies", name: "Ice Coffee", price: 132.55 },
  { category: "Juices & Smoothies", name: "Ice Chocolate", price: 134.55 },
  { category: "Juices & Smoothies", name: "Ice Cappuccino", price: 134.55 },
  { category: "Smoothies", name: "Watermelon Smoothie", price: 120.55 },
  { category: "Smoothies", name: "Pineapple Smoothie", price: 142.55 },
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
  { category: "Smoothies", name: "Pomegranate Smoothie", price: 135.55 },
  { category: "Smoothies", name: "Piña Colada Smoothie", price: 135.55 },
  { category: "Smoothies", name: "Cherry Smoothie", price: 135.55 },
  { category: "Smoothies", name: "Apple Smoothie", price: 135.55 },
  { category: "Soft Drinks & Ice Cream", name: "Mix Ice Cream", price: 146.55 },
  { category: "Soft Drinks & Ice Cream", name: "Vanilla Ice Cream", price: 124.55 },
  { category: "Soft Drinks & Ice Cream", name: "Soft Drinks (Cola - 7UP - Fanta)", price: 46.55 },
  { category: "Soft Drinks & Ice Cream", name: "Schweppes", price: 46.55 },
  { category: "Soft Drinks & Ice Cream", name: "Fayrouz", price: 46.55 },
  { category: "Soft Drinks & Ice Cream", name: "Birrell", price: 53.55 },
  { category: "Soft Drinks & Ice Cream", name: "Red Bull", price: 111.55 },
  { category: "Soft Drinks & Ice Cream", name: "Schweppes Gold", price: 48.55 },
  { category: "Soft Drinks & Ice Cream", name: "Moussy", price: 53.55 },
  { category: "Soft Drinks & Ice Cream", name: "Mineral Water (Small)", price: 26.55 },
  { category: "Soft Drinks & Ice Cream", name: "Sparkling Water", price: 31.55 },
  { category: "Desserts", name: "Om Ali", price: 102.55 },
  { category: "Desserts", name: "Rice with Milk", price: 102.55 },
  { category: "Desserts", name: "Pudding", price: 102.55 },
  { category: "Desserts", name: "Rice Pudding Casserole (Large)", price: 105.55 },
  { category: "Desserts", name: "Milk Pudding Platter (Large)", price: 102.55 },
  { category: "Desserts", name: "Ice Cream", price: 102.55 },
  { category: "Desserts", name: "Pumpkin Platter", price: 102.55 },
  { category: "Desserts (Special)", name: "Lamb Neck with Rice (Large)", price: 974.55 },
  { category: "Desserts (Special)", name: "Stuffed Pigeons with Vine Leaves/Kofta/Rice", price: 695.55 },
  { category: "Desserts (Special)", name: "Stuffed Mutton Mandi with Kabsa Rice", price: 829.55 },
  { category: "Desserts (Special)", name: "Stuffed Mutton Mandi with Vine Leaves", price: 919.55 },
  { category: "Fresh Juices", name: "Lemon Juice", price: 86.55 },
  { category: "Fresh Juices", name: "Orange Juice", price: 82.55 },
  { category: "Fresh Juices", name: "Lemon Mint Juice", price: 90.55 },
  { category: "Fresh Juices", name: "Mango Juice", price: 85.55 },
  { category: "Fresh Juices", name: "Guava Juice", price: 85.55 },
  { category: "Fresh Juices", name: "Kiwi Juice", price: 96.55 },
  { category: "Fresh Juices", name: "Banana with Milk Juice", price: 86.55 },
  { category: "Fresh Juices", name: "Strawberry Juice", price: 99.55 },
  { category: "Fresh Juices", name: "Watermelon Juice", price: 89.55 },
  { category: "Fresh Juices", name: "Avocado Juice", price: 115.55 },
  { category: "Fresh Juices", name: "Pineapple Juice", price: 115.55 },
  { category: "Fresh Juices", name: "Small Fruit Dish", price: 201.55 },
  { category: "Fresh Juices", name: "Large Fruit Dish", price: 303.55 },
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
  { category: "Side Dishes", name: "Cream of Mushroom Soup", price: 179.55 },
  { category: "Side Dishes", name: "Cream of Chicken Soup", price: 188.55 },
  { category: "Side Dishes", name: "Cream of Chicken & Mushroom Soup Platter", price: 198.55 },
  { category: "Side Dishes", name: "Bread (1 basket)", price: 32.55 },

  { category: "Grilled (1/4 Kilo)", name: "Plain Baklava Kebab (1/4 Kilo)", price: 162.55 },
  { category: "Grilled (1/2 Kilo)", name: "Plain Baklava Kebab (1/2 Kilo)", price: 322.55 },
  { category: "Grilled (Kilo)", name: "Plain Baklava Kebab (Kilo)", price: 572.55 },
  { category: "Grilled (1/4 Kilo)", name: "Stuffed Baklava Kebab (1/4 Kilo)", price: 185.55 },
  { category: "Grilled (1/2 Kilo)", name: "Stuffed Baklava Kebab (1/2 Kilo)", price: 372.55 },
  { category: "Grilled (Kilo)", name: "Stuffed Baklava Kebab (Kilo)", price: 676.55 },
  { category: "Grilled (1/4 Kilo)", name: "Chicken Thighs with Iranian Marinade (1/4 Kilo)", price: 199.55 },
  { category: "Grilled (1/2 Kilo)", name: "Chicken Thighs with Iranian Marinade (1/2 Kilo)", price: 385.55 },
  { category: "Grilled (Kilo)", name: "Chicken Thighs with Iranian Marinade (Kilo)", price: 708.55 },
  { category: "Grilled (1/4 Kilo)", name: "Bone Marrow (1/4 Kilo)", price: 203.55 },
  { category: "Grilled (1/2 Kilo)", name: "Bone Marrow (1/2 Kilo)", price: 376.55 },
  { category: "Grilled (Kilo)", name: "Bone Marrow (Kilo)", price: 692.55 },
  { category: "Grilled (1/4 Kilo)", name: "Stuffed Kofta w/ Rice (1/4 Kilo)", price: 199.55 },
  { category: "Grilled (1/2 Kilo)", name: "Stuffed Kofta w/ Rice (1/2 Kilo)", price: 385.55 },
  { category: "Grilled (Kilo)", name: "Stuffed Kofta w/ Rice (Kilo)", price: 713.55 },
  { category: "Grilled (1/4 Kilo)", name: "Kofta Dowoud (1/4 Kilo)", price: 219.55 },
  { category: "Grilled (1/2 Kilo)", name: "Kofta Dowoud (1/2 Kilo)", price: 417.55 },
  { category: "Grilled (Kilo)", name: "Kofta Dowoud (Kilo)", price: 748.55 },
  { category: "Grilled (1/4 Kilo)", name: "Kofta Rice (1/4 Kilo)", price: 249.55 },
  { category: "Grilled (1/2 Kilo)", name: "Kofta Rice (1/2 Kilo)", price: 448.55 },
  { category: "Grilled (Kilo)", name: "Kofta Rice (Kilo)", price: 836.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mutton Kebab (1/4 Kilo)", price: 197.55 },
  { category: "Grilled (1/2 Kilo)", name: "Mutton Kebab (1/2 Kilo)", price: 372.55 },
  { category: "Grilled (Kilo)", name: "Mutton Kebab (Kilo)", price: 707.55 },
  { category: "Grilled (1/4 Kilo)", name: "Veal Kebab (1/4 Kilo)", price: 205.55 },
  { category: "Grilled (1/2 Kilo)", name: "Veal Kebab (1/2 Kilo)", price: 414.55 },
  { category: "Grilled (Kilo)", name: "Veal Kebab (Kilo)", price: 797.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mutton Kofta (1/4 Kilo)", price: 189.55 },
  { category: "Grilled (1/2 Kilo)", name: "Mutton Kofta (1/2 Kilo)", price: 366.55 },
  { category: "Grilled (Kilo)", name: "Mutton Kofta (Kilo)", price: 688.55 }
  { category: "Grilled (1/4 Kilo)", name: "Grilled Ribs (1/4 Kilo)", price: 205.55 },
  { category: "Grilled (1/2 Kilo)", name: "Grilled Ribs (1/2 Kilo)", price: 471.55 },
  { category: "Grilled (Kilo)", name: "Grilled Ribs (Kilo)", price: 923.55 },
  { category: "Grilled (1/4 Kilo)", name: "Veal Ribs (1/4 Kilo)", price: 205.55 },
  { category: "Grilled (1/2 Kilo)", name: "Veal Ribs (1/2 Kilo)", price: 471.55 },
  { category: "Grilled (Kilo)", name: "Veal Ribs (Kilo)", price: 923.55 },
  { category: "Grilled (1/4 Kilo)", name: "Veal Fillet (1/4 Kilo)", price: 249.55 },
  { category: "Grilled (1/2 Kilo)", name: "Veal Fillet (1/2 Kilo)", price: 499.55 },
  { category: "Grilled (Kilo)", name: "Veal Fillet (Kilo)", price: 929.55 },
  { category: "Grilled (1/4 Kilo)", name: "Neefa (1/4 Kilo)", price: 471.55 },
  { category: "Grilled (1/2 Kilo)", name: "Neefa (1/2 Kilo)", price: 909.55 },
  { category: "Grilled (Kilo)", name: "Neefa (Kilo)", price: 1697.55 },
  { category: "Grilled (1/4 Kilo)", name: "Kofta and Tarb (1/4 Kilo)", price: 207.55 },
  { category: "Grilled (1/2 Kilo)", name: "Kofta and Tarb (1/2 Kilo)", price: 408.55 },
  { category: "Grilled (Kilo)", name: "Kofta and Tarb (Kilo)", price: 773.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mix Kebab and Kofta (1/4 Kilo)", price: 207.55 },
  { category: "Grilled (1/2 Kilo)", name: "Mix Kebab and Kofta (1/2 Kilo)", price: 408.55 },
  { category: "Grilled (Kilo)", name: "Mix Kebab and Kofta (Kilo)", price: 773.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mix Veal (1/4 Kilo)", price: 258.55 },
  { category: "Grilled (1/2 Kilo)", name: "Mix Veal (1/2 Kilo)", price: 510.55 },
  { category: "Grilled (Kilo)", name: "Mix Veal (Kilo)", price: 942.55 },
  { category: "Grilled (Whole Chicken)", name: "Whole Charcoal Grilled Chicken", price: 507.55 },
  { category: "Grilled (Half Chicken)", name: "Half Chicken Charcoal Grilled", price: 297.55 },
  { category: "Grilled (Whole Chicken)", name: "Whole Chicken Curry or Tandoori", price: 507.55 },
  { category: "Grilled (Half Chicken)", name: "Half Chicken Curry or Tandoori", price: 297.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Pigeon", price: 318.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Chicken Tandoori", price: 423.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Chicken Curry", price: 423.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Quails", price: 209.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Chicken Breasts", price: 209.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Chicken Thighs", price: 209.55 },
  { category: "Grilled (Full Pigeon)", name: "Mutton Oriental Sausage", price: 209.55 },
  { category: "Grilled (Full Pigeon)", name: "Mutton Fillet", price: 446.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Mutton Kofta & Shish Tawok", price: 401.55 },
  { category: "Grilled (Full Pigeon)", name: "Mutton Kidney", price: 401.55 },
  { category: "Grilled (Full Pigeon)", name: "Mutton Liver", price: 401.55 },
  { category: "Grilled (Single Portions)", name: "Pigeon Piece & Oven Baked Meat Platter", price: 796.55 },
  { category: "Grilled (Single Portions)", name: "Grilled Rice and Vegetables", price: 298.55 },
  { category: "Grilled (Single Portions)", name: "Grilled Pasta with Red Sauce Platter", price: 298.55 },
  { category: "Grilled (Single Portions)", name: "Grilled Rice with Rice, Vegetable and Molokhia", price: 298.55 }

  { category: "Bedouin Corner (1/2 Kilo)", name: "Plain Molokhia Plate (1/2 Kilo)", price: 161.55 },
  { category: "Bedouin Corner (Kilo)", name: "Plain Molokhia Plate (Kilo)", price: 276.55 },
  { category: "Bedouin Corner (1/2 Kilo)", name: "Vermicelli w/ Mutton Meat (1/2 Kilo)", price: 280.55 },
  { category: "Bedouin Corner (Kilo)", name: "Vermicelli w/ Mutton Meat (Kilo)", price: 492.55 },
  { category: "Bedouin Corner (1/2 Kilo)", name: "Kabsa w/ Mutton Meat (1/2 Kilo)", price: 280.55 },
  { category: "Bedouin Corner (Kilo)", name: "Kabsa w/ Mutton Meat (Kilo)", price: 492.55 },
  { category: "Bedouin Corner (1/2 Kilo)", name: "Vermicelli w/ Kandouz Meat (1/2 Kilo)", price: 302.55 },
  { category: "Bedouin Corner (Kilo)", name: "Vermicelli w/ Kandouz Meat (Kilo)", price: 526.55 },
  { category: "Bedouin Corner (1/2 Kilo)", name: "Mandi w/ Mutton Meat (1/2 Kilo)", price: 298.55 },
  { category: "Bedouin Corner (Kilo)", name: "Mandi w/ Mutton Meat (Kilo)", price: 518.55 },
  
  { category: "Elkababgi Dishes", name: "Fattah w/ Mutton Meat Platter", price: 777.55 },
  { category: "Elkababgi Dishes", name: "Roast Mutton Platter", price: 663.55 },
  { category: "Elkababgi Dishes", name: "Roast Veal Platter", price: 777.55 },
  { category: "Elkababgi Dishes", name: "Veal Shank Platter", price: 811.55 },
  { category: "Elkababgi Dishes", name: "Roast Veal Shank w/ Vine Leaves or Rice or Molokhia", price: 823.55 },
  { category: "Elkababgi Dishes", name: "Roast Chicken w/ Oven Baked Fattah Platter", price: 788.55 },
  { category: "Elkababgi Dishes", name: "Special Kabab Dish with Pigeon", price: 1007.55 },
  { category: "Elkababgi Dishes", name: "The special Kabab Dish w/ Shank, Duck and Quail", price: 1175.55 },
  { category: "Elkababgi Dishes", name: "Special El Kababgi Platter", price: 956.55 },
  { category: "Elkababgi Dishes", name: "Family Molokhia Platter", price: 666.55 },
  { category: "Elkababgi Dishes", name: "El Molokhia Mix Grill Platter", price: 901.55 },
  
  { category: "Banquet Elkababgi", name: "Family (Mutton, Veal, Chicken, Rice, Salad, Appetizers, Drinks)", price: 2831.55 },
  { category: "Banquet Elkababgi", name: "Elshola (Mutton, Veal, Chicken, Rice, Soup, Salad, Appetizers, Drinks)", price: 4248.55 },
  { category: "Banquet Elkababgi", name: "El Hemma (Mutton, Veal, Duck, Sausage, Mombar, Rice, Appetizers, Drinks)", price: 5441.55 },
  { category: "Banquet Elkababgi", name: "El Feress (Mutton, Veal, Duck, Rice, Pigeon, Appetizers, Drinks)", price: 5660.55 }

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
  { category: "Tajine Casserole", name: "Ribs w/ Potato Casserole", price: 779.55 },

  // Pan Corner (1/4 & 1/2 Kilo)
  { category: "Pan Corner (1/4 Kilo)", name: "Chicken Sausage Pan", price: 399.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Grilled Oriental Sausage Pan", price: 462.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Grilled Veal Liver Pan", price: 462.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Fried Veal Liver Pan", price: 397.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Veal Cubes Pan", price: 397.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Grilled Oriental Sausage Fajita Pan", price: 402.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Oriental Sausage Pan with Pepper", price: 437.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Grilled Liver Pan", price: 439.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Beef Tongue Pan", price: 618.55 },
  { category: "Pan Corner (1/2 Kilo)", name: "Chicken Fajita Pan", price: 561.55 },
  { category: "Pan Corner (1/2 Kilo)", name: "Meat Fajita Pan", price: 682.55 },
  { category: "Pan Corner (1/2 Kilo)", name: "Liver Fajita Pan", price: 682.55 },

  // Kitchen Corner (Special)
  { category: "Kitchen Corner (Special)", name: "Grilled (1/4 Kilo - Goat with Kabsa)", price: 1745.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (1/2 Kilo - Goat with Kabsa)", price: 3053.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (Kilo - Goat with Kabsa)", price: 5745.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (1/4 Kilo - Goat with Molokhia)", price: 1745.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (1/2 Kilo - Goat with Molokhia)", price: 3053.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (Kilo - Goat with Molokhia)", price: 5745.55 },

  // Kitchen Corner (Entrees)
  { category: "Kitchen Corner (Entrees)", name: "Half Boneless Stuffed Chicken", price: 361.55 },
  { category: "Kitchen Corner (Entrees)", name: "Meat Plate with Mushrooms", price: 518.55 },
  { category: "Kitchen Corner (Entrees)", name: "Escalope Pane", price: 518.55 },
  { category: "Kitchen Corner (Entrees)", name: "Chicken Pane Order", price: 518.55 },
  { category: "Kitchen Corner (Entrees)", name: "Breast Meat with Pepper", price: 479.55 },
  { category: "Kitchen Corner (Entrees)", name: "Breast Chicken Meal", price: 467.55 },
  { category: "Kitchen Corner (Entrees)", name: "Half Baladi Chicken Meal with Vermicelli Rice", price: 479.55 },
  { category: "Kitchen Corner (Entrees)", name: "Oven Baked Lamb", price: 378.55 },
  { category: "Kitchen Corner (Entrees)", name: "Oven Baked Liver", price: 499.55 },
  { category: "Kitchen Corner (Entrees)", name: "Half Duck", price: 460.55 },
  { category: "Kitchen Corner (Entrees)", name: "Half Duck, Rice and Vegetables", price: 685.55 },
  { category: "Kitchen Corner (Entrees)", name: "Stuffed Quails", price: 318.55 },
  { category: "Kitchen Corner (Entrees)", name: "Whole Duck, Rice and Vegetables", price: 783.55 },
  { category: "Kitchen Corner (Entrees)", name: "Roasted Rabbit", price: 618.55 },
  { category: "Kitchen Corner (Entrees)", name: "Roasted Rabbit with Rice and Molokhia", price: 743.55 }

  { category: "Grilled (1/4 Kilo)", name: "Plain Baklava Kebab (1/4 Kilo)", price: 162.55 },
  { category: "Grilled (1/2 Kilo)", name: "Plain Baklava Kebab (1/2 Kilo)", price: 322.55 },
  { category: "Grilled (Kilo)", name: "Plain Baklava Kebab (Kilo)", price: 572.55 },
  { category: "Grilled (1/4 Kilo)", name: "Stuffed Baklava Kebab (1/4 Kilo)", price: 185.55 },
  { category: "Grilled (1/2 Kilo)", name: "Stuffed Baklava Kebab (1/2 Kilo)", price: 372.55 },
  { category: "Grilled (Kilo)", name: "Stuffed Baklava Kebab (Kilo)", price: 676.55 },
  { category: "Grilled (1/4 Kilo)", name: "Chicken Thighs with Iranian Marinade (1/4 Kilo)", price: 199.55 },
  { category: "Grilled (1/2 Kilo)", name: "Chicken Thighs with Iranian Marinade (1/2 Kilo)", price: 385.55 },
  { category: "Grilled (Kilo)", name: "Chicken Thighs with Iranian Marinade (Kilo)", price: 708.55 },
  { category: "Grilled (1/4 Kilo)", name: "Bone Marrow (1/4 Kilo)", price: 203.55 },
  { category: "Grilled (1/2 Kilo)", name: "Bone Marrow (1/2 Kilo)", price: 376.55 },
  { category: "Grilled (Kilo)", name: "Bone Marrow (Kilo)", price: 692.55 },
  { category: "Grilled (1/4 Kilo)", name: "Stuffed Kofta w/ Rice (1/4 Kilo)", price: 199.55 },
  { category: "Grilled (1/2 Kilo)", name: "Stuffed Kofta w/ Rice (1/2 Kilo)", price: 385.55 },
  { category: "Grilled (Kilo)", name: "Stuffed Kofta w/ Rice (Kilo)", price: 713.55 },
  { category: "Grilled (1/4 Kilo)", name: "Kofta Dowoud (1/4 Kilo)", price: 219.55 },
  { category: "Grilled (1/2 Kilo)", name: "Kofta Dowoud (1/2 Kilo)", price: 417.55 },
  { category: "Grilled (Kilo)", name: "Kofta Dowoud (Kilo)", price: 748.55 },
  { category: "Grilled (1/4 Kilo)", name: "Kofta Rice (1/4 Kilo)", price: 249.55 },
  { category: "Grilled (1/2 Kilo)", name: "Kofta Rice (1/2 Kilo)", price: 448.55 },
  { category: "Grilled (Kilo)", name: "Kofta Rice (Kilo)", price: 836.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mutton Kebab (1/4 Kilo)", price: 197.55 },
  { category: "Grilled (1/2 Kilo)", name: "Mutton Kebab (1/2 Kilo)", price: 372.55 },
  { category: "Grilled (Kilo)", name: "Mutton Kebab (Kilo)", price: 707.55 },
  { category: "Grilled (1/4 Kilo)", name: "Veal Kebab (1/4 Kilo)", price: 205.55 },
  { category: "Grilled (1/2 Kilo)", name: "Veal Kebab (1/2 Kilo)", price: 414.55 },
  { category: "Grilled (Kilo)", name: "Veal Kebab (Kilo)", price: 797.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mutton Kofta (1/4 Kilo)", price: 189.55 },
  { category: "Grilled (1/2 Kilo)", name: "Mutton Kofta (1/2 Kilo)", price: 366.55 },
  { category: "Grilled (Kilo)", name: "Mutton Kofta (Kilo)", price: 688.55 },
  { category: "Grilled (1/4 Kilo)", name: "Grilled Ribs (1/4 Kilo)", price: 205.55 },
  { category: "Grilled (1/2 Kilo)", name: "Grilled Ribs (1/2 Kilo)", price: 471.55 },
  { category: "Grilled (Kilo)", name: "Grilled Ribs (Kilo)", price: 923.55 },
  { category: "Grilled (1/4 Kilo)", name: "Veal Ribs (1/4 Kilo)", price: 205.55 },
  { category: "Grilled (1/2 Kilo)", name: "Veal Ribs (1/2 Kilo)", price: 471.55 },
  { category: "Grilled (Kilo)", name: "Veal Ribs (Kilo)", price: 923.55 },
  { category: "Grilled (1/4 Kilo)", name: "Veal Fillet (1/4 Kilo)", price: 249.55 },
  { category: "Grilled (1/2 Kilo)", name: "Veal Fillet (1/2 Kilo)", price: 499.55 },
  { category: "Grilled (Kilo)", name: "Veal Fillet (Kilo)", price: 929.55 },
  { category: "Grilled (1/4 Kilo)", name: "Neefa (1/4 Kilo)", price: 471.55 },
  { category: "Grilled (1/2 Kilo)", name: "Neefa (1/2 Kilo)", price: 909.55 },
  { category: "Grilled (Kilo)", name: "Neefa (Kilo)", price: 1697.55 },
  { category: "Grilled (1/4 Kilo)", name: "Kofta and Tarb (1/4 Kilo)", price: 207.55 },
  { category: "Grilled (1/2 Kilo)", name: "Kofta and Tarb (1/2 Kilo)", price: 408.55 },
  { category: "Grilled (Kilo)", name: "Kofta and Tarb (Kilo)", price: 773.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mix Kebab and Kofta (1/4 Kilo)", price: 207.55 },
  { category: "Grilled (1/2 Kilo)", name: "Mix Kebab and Kofta (1/2 Kilo)", price: 408.55 },
  { category: "Grilled (Kilo)", name: "Mix Kebab and Kofta (Kilo)", price: 773.55 },
  { category: "Grilled (1/4 Kilo)", name: "Mix Veal (1/4 Kilo)", price: 258.55 },
  { category: "Grilled (1/2 Kilo)", name: "Mix Veal (1/2 Kilo)", price: 510.55 },
  { category: "Grilled (Kilo)", name: "Mix Veal (Kilo)", price: 942.55 },
  { category: "Grilled (Whole Chicken)", name: "Whole Charcoal Grilled Chicken", price: 507.55 },
  { category: "Grilled (Half Chicken)", name: "Half Chicken Charcoal Grilled", price: 297.55 },
  { category: "Grilled (Whole Chicken)", name: "Whole Chicken Curry or Tandoori", price: 507.55 },
  { category: "Grilled (Half Chicken)", name: "Half Chicken Curry or Tandoori", price: 297.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Pigeon", price: 318.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Chicken Tandoori", price: 423.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Chicken Curry", price: 423.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Quails", price: 209.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Chicken Breasts", price: 209.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Chicken Thighs", price: 209.55 },
  { category: "Grilled (Full Pigeon)", name: "Mutton Oriental Sausage", price: 209.55 },
  { category: "Grilled (Full Pigeon)", name: "Mutton Fillet", price: 446.55 },
  { category: "Grilled (Full Pigeon)", name: "Grilled Mutton Kofta & Shish Tawok", price: 401.55 },
  { category: "Grilled (Full Pigeon)", name: "Mutton Kidney", price: 401.55 },
  { category: "Grilled (Full Pigeon)", name: "Mutton Liver", price: 401.55 },
  { category: "Grilled (Single Portions)", name: "Pigeon Piece & Oven Baked Meat Platter", price: 796.55 },
  { category: "Grilled (Single Portions)", name: "Grilled Rice and Vegetables", price: 298.55 },
  { category: "Grilled (Single Portions)", name: "Grilled Pasta with Red Sauce Platter", price: 298.55 },
  { category: "Grilled (Single Portions)", name: "Grilled Rice with Rice, Vegetable and Molokhia", price: 298.55 },

  // Bedouin Corner
  { category: "Bedouin Corner (1/2 Kilo)", name: "Plain Molokhia Plate (1/2 Kilo)", price: 161.55 },
  { category: "Bedouin Corner (Kilo)", name: "Plain Molokhia Plate (Kilo)", price: 276.55 },
  { category: "Bedouin Corner (1/2 Kilo)", name: "Vermicelli w/ Mutton Meat (1/2 Kilo)", price: 280.55 },
  { category: "Bedouin Corner (Kilo)", name: "Vermicelli w/ Mutton Meat (Kilo)", price: 492.55 },
  { category: "Bedouin Corner (1/2 Kilo)", name: "Kabsa w/ Mutton Meat (1/2 Kilo)", price: 280.55 },
  { category: "Bedouin Corner (Kilo)", name: "Kabsa w/ Mutton Meat (Kilo)", price: 492.55 },
  { category: "Bedouin Corner (1/2 Kilo)", name: "Vermicelli w/ Kandouz Meat (1/2 Kilo)", price: 302.55 },
  { category: "Bedouin Corner (Kilo)", name: "Vermicelli w/ Kandouz Meat (Kilo)", price: 526.55 },
  { category: "Bedouin Corner (1/2 Kilo)", name: "Mandi w/ Mutton Meat (1/2 Kilo)", price: 298.55 },
  { category: "Bedouin Corner (Kilo)", name: "Mandi w/ Mutton Meat (Kilo)", price: 518.55 },

  // Elkababgi Dishes
  { category: "Elkababgi Dishes", name: "Fattah w/ Mutton Meat Platter", price: 777.55 },
  { category: "Elkababgi Dishes", name: "Roast Mutton Platter", price: 663.55 },
  { category: "Elkababgi Dishes", name: "Roast Veal Platter", price: 777.55 },
  { category: "Elkababgi Dishes", name: "Veal Shank Platter", price: 811.55 },
  { category: "Elkababgi Dishes", name: "Roast Veal Shank w/ Vine Leaves or Rice or Molokhia", price: 823.55 },
  { category: "Elkababgi Dishes", name: "Roast Chicken w/ Oven Baked Fattah Platter", price: 788.55 },
  { category: "Elkababgi Dishes", name: "Special Kabab Dish with Pigeon", price: 1007.55 },
  { category: "Elkababgi Dishes", name: "The special Kabab Dish w/ Shank, Duck and Quail", price: 1175.55 },
  { category: "Elkababgi Dishes", name: "Special El Kababgi Platter", price: 956.55 },
  { category: "Elkababgi Dishes", name: "Family Molokhia Platter", price: 666.55 },
  { category: "Elkababgi Dishes", name: "El Molokhia Mix Grill Platter", price: 901.55 },

  // Banquet Elkababgi
  { category: "Banquet Elkababgi", name: "Family (Mutton, Veal, Chicken, Rice, Salad, Appetizers, Drinks)", price: 2831.55 },
  { category: "Banquet Elkababgi", name: "Elshola (Mutton, Veal, Chicken, Rice, Soup, Salad, Appetizers, Drinks)", price: 4248.55 },
  { category: "Banquet Elkababgi", name: "El Hemma (Mutton, Veal, Duck, Sausage, Mombar, Rice, Appetizers, Drinks)", price: 5441.55 },
  { category: "Banquet Elkababgi", name: "El Feress (Mutton, Veal, Duck, Rice, Pigeon, Appetizers, Drinks)", price: 5660.55 }

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
  { category: "Tajine Casserole", name: "Ribs w/ Potato Casserole", price: 779.55 },

  // Pan Corner (1/4 Kilo & 1/2 Kilo)
  { category: "Pan Corner (1/4 Kilo)", name: "Chicken Sausage Pan", price: 399.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Grilled Oriental Sausage Pan", price: 462.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Grilled Veal Liver Pan", price: 462.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Fried Veal Liver Pan", price: 397.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Veal Cubes Pan", price: 397.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Grilled Oriental Sausage Fajita Pan", price: 402.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Oriental Sausage Pan with Pepper", price: 437.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Grilled Liver Pan", price: 439.55 },
  { category: "Pan Corner (1/4 Kilo)", name: "Beef Tongue Pan", price: 618.55 },
  { category: "Pan Corner (1/2 Kilo)", name: "Chicken Fajita Pan", price: 561.55 },
  { category: "Pan Corner (1/2 Kilo)", name: "Meat Fajita Pan", price: 682.55 },
  { category: "Pan Corner (1/2 Kilo)", name: "Liver Fajita Pan", price: 682.55 },

  // Kitchen Corner (Special)
  { category: "Kitchen Corner (Special)", name: "Grilled (1/4 Kilo - Goat with Kabsa)", price: 1745.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (1/2 Kilo - Goat with Kabsa)", price: 3053.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (Kilo - Goat with Kabsa)", price: 5745.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (1/4 Kilo - Goat with Molokhia)", price: 1745.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (1/2 Kilo - Goat with Molokhia)", price: 3053.55 },
  { category: "Kitchen Corner (Special)", name: "Grilled (Kilo - Goat with Molokhia)", price: 5745.55 },

  // Kitchen Corner (Entrees)
  { category: "Kitchen Corner (Entrees)", name: "Half Boneless Stuffed Chicken", price: 361.55 },
  { category: "Kitchen Corner (Entrees)", name: "Meat Plate with Mushrooms", price: 518.55 },
  { category: "Kitchen Corner (Entrees)", name: "Escalope Pane", price: 518.55 },
  { category: "Kitchen Corner (Entrees)", name: "Chicken Pane Order", price: 518.55 },
  { category: "Kitchen Corner (Entrees)", name: "Breast Meat with Pepper", price: 479.55 },
  { category: "Kitchen Corner (Entrees)", name: "Breast Chicken Meal", price: 467.55 },
  { category: "Kitchen Corner (Entrees)", name: "Half Baladi Chicken Meal with Vermicelli Rice", price: 479.55 },
  { category: "Kitchen Corner (Entrees)", name: "Oven Baked Lamb", price: 378.55 },
  { category: "Kitchen Corner (Entrees)", name: "Oven Baked Liver", price: 499.55 },
  { category: "Kitchen Corner (Entrees)", name: "Half Duck", price: 460.55 },
  { category: "Kitchen Corner (Entrees)", name: "Half Duck, Rice and Vegetables", price: 685.55 },
  { category: "Kitchen Corner (Entrees)", name: "Stuffed Quails", price: 318.55 },
  { category: "Kitchen Corner (Entrees)", name: "Whole Duck, Rice and Vegetables", price: 783.55 },
  { category: "Kitchen Corner (Entrees)", name: "Roasted Rabbit", price: 618.55 },
  { category: "Kitchen Corner (Entrees)", name: "Roasted Rabbit with Rice and Molokhia", price: 743.55 }
  
];


let orders = [];

// Add Person
document.getElementById('addPersonBtn').addEventListener('click', () => {
  const nameInput = document.getElementById('personName');
  const name = nameInput.value.trim();
  if (!name) return alert('Enter person name');
  if (orders.some(o => o.personName === name)) return alert('Person already exists');

  orders.push({ personName: name, items: [] });
  nameInput.value = '';
  renderOrders();
});

// Render all orders
function renderOrders() {
  const orderSection = document.getElementById('orderSection');
  orderSection.innerHTML = '';

  let grandTotal = 0;

  orders.forEach(order => {
    const div = document.createElement('div');
    div.className = 'person';
    div.setAttribute('data-person', order.personName);

    div.innerHTML = `
      <h3>${order.personName}</h3>
      <div class="item-controls">
        <select class="categorySelect"></select>
        <select class="itemSelect"></select>
        <input type="number" class="quantityInput" min="1" value="1">
        <button class="btn addItemBtn">Add Item</button>
      </div>
      <ul></ul>
      <div class="person-total"></div>
    `;

    orderSection.appendChild(div);

    // Populate categories
    const categories = [...new Set(menu.map(m => m.category))];
    const catSelect = div.querySelector('.categorySelect');
    categories.forEach(c => {
      const option = document.createElement('option');
      option.value = c;
      option.innerText = c;
      catSelect.appendChild(option);
    });

    const itemSelect = div.querySelector('.itemSelect');
    function populateItems() {
      itemSelect.innerHTML = '';
      const catItems = menu.filter(m => m.category === catSelect.value);
      catItems.forEach(i => {
        const taxedPrice = (i.price * TAX_SERVICE).toFixed(2);
        const option = document.createElement('option');
        option.value = i.name;
        option.text = `${i.name} - ${i.price.toFixed(2)} EGP (${taxedPrice} incl.)`;
        itemSelect.appendChild(option);
      });
    }

    populateItems();
    catSelect.addEventListener('change', populateItems);

    // Add Item button for this person
    div.querySelector('.addItemBtn').addEventListener('click', () => {
      const itemName = itemSelect.value;
      const quantity = parseInt(div.querySelector('.quantityInput').value);
      if (!itemName || quantity < 1) return alert('Select item and valid quantity');
      const item = menu.find(i => i.name === itemName);
      order.items.push({ name: item.name, price: item.price, quantity });
      renderOrders();
    });

    updatePersonTotal(order);
  });

  updateGrandTotal();
}

// Update person total
function updatePersonTotal(order) {
  const div = document.querySelector(`.person[data-person='${order.personName}']`);
  const ul = div.querySelector('ul');
  ul.innerHTML = order.items.map(i => {
    const taxed = (i.price * i.quantity * TAX_SERVICE).toFixed(2);
    return `<li>${i.name} x ${i.quantity} x 1.28 = ${taxed} EGP
      <button class="removeItem" onclick="removeItem('${order.personName}', '${i.name}')">X</button></li>`;
  }).join('');

  const total = order.items.reduce((sum, i) => sum + i.price * i.quantity * TAX_SERVICE, 0).toFixed(2);
  div.querySelector('.person-total').innerText = `Total: ${total} EGP`;
}

// Remove item
function removeItem(personName, itemName) {
  const order = orders.find(o => o.personName === personName);
  order.items = order.items.filter(i => i.name !== itemName);
  renderOrders();
}

// Grand total
function updateGrandTotal() {
  const grand = orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.price * i.quantity * TAX_SERVICE, 0), 0).toFixed(2);
  document.getElementById('grandTotal').innerText = `Grand Total: ${grand} EGP`;
}

// Download CSV
document.getElementById('downloadCsvBtn').addEventListener('click', () => {
  if (orders.length === 0) return alert('No orders to export.');
  let csv = "Person,Item,Quantity,Price,Total incl. Tax & Service\n";
  orders.forEach(order => {
    order.items.forEach(i => {
      const total = (i.price * i.quantity * TAX_SERVICE).toFixed(2);
      csv += `${order.personName},${i.name},${i.quantity},${i.price.toFixed(2)},${total}\n`;
    });
  });
  const grandTotal = orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.price * i.quantity * TAX_SERVICE, 0), 0).toFixed(2);
  csv += `,,,"Grand Total",${grandTotal}\n`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "KasrElKababgy_Orders.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
