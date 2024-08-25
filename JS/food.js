// Menu data for each category
const menuData = {
  breakfast: [
    {
      name: "Pancakes",
      description: "Delicious fluffy pancakes with syrup",
      price: "$10",
      image: "../Image/Video/menu-1.jpg",
    },
    {
      name: "Omelette",
      description: "Egg omelette with cheese and veggies",
      price: "$8",
      image: "../Image/Video/menu-2.jpg",
    },
    {
      name: "French Toast",
      description: "Crispy French toast with honey",
      price: "$9",
      image: "../Image/Video/menu-3.jpg",
    },
    {
      name: "Fruit Salad",
      description: "Fresh seasonal fruits",
      price: "$7",
      image: "../Image/Video/menu-4.jpg",
    },
    {
      name: "Avocado Toast",
      description: "Avocado on toasted bread",
      price: "$11",
      image: "../Image/Video/menu-5.jpg",
    },
    {
      name: "Breakfast Burrito",
      description: "Tortilla with eggs, bacon, and cheese",
      price: "$12",
      image: "../Image/Video/menu-6.jpg",
    },
    {
      name: "Granola Yogurt Parfait",
      description: "Layered yogurt with granola",
      price: "$10",
      image: "../Image/Video/menu-7.jpg",
    },
    {
      name: "Granola Yogurt Parfait",
      description: "Layered yogurt with granola",
      price: "$10",
      image: "../Image/Video/menu-8.jpg",
    },
  ],
  lunch: [
    {
      name: "Chicken Burger",
      description: "Juicy chicken burger with fries",
      price: "$15",
      image: "../Image/Video/menu-1.jpg",
    },
    {
      name: "Caesar Salad",
      description: "Fresh salad with Caesar dressing",
      price: "$12",
      image: "../Image/Video/menu-2.jpg",
    },
    {
      name: "Club Sandwich",
      description: "Sandwich with turkey, bacon, and lettuce",
      price: "$14",
      image: "../Image/Video/menu-3.jpg",
    },
    {
      name: "Grilled Cheese",
      description: "Cheese sandwich with a crispy crust",
      price: "$10",
      image: "../Image/Video/menu-4.jpg",
    },
    {
      name: "Beef Taco",
      description: "Tacos with seasoned beef and salsa",
      price: "$13",
      image: "../Image/Video/menu-5.jpg",
    },
    {
      name: "Spaghetti Carbonara",
      description: "Classic pasta with creamy sauce",
      price: "$16",
      image: "../Image/Video/menu-6.jpg",
    },
    {
      name: "Fish and Chips",
      description: "Fried fish with crispy fries",
      price: "$17",
      image: "../Image/Video/menu-7.jpg",
    },
    {
      name: "Fish and Chips",
      description: "Fried fish with crispy fries",
      price: "$17",
      image: "../Image/Video/menu-8.jpg",
    },
  ],
  dinner: [
    {
      name: "Grilled Steak",
      description: "Grilled steak with garlic butter",
      price: "$25",
      image: "../Image/Video/menu-1.jpg",
    },
    {
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta with meat sauce",
      price: "$18",
      image: "../Image/Video/menu-2.jpg",
    },
    {
      name: "Chicken Alfredo",
      description: "Creamy Alfredo pasta with chicken",
      price: "$20",
      image: "../Image/Video/menu-3.jpg",
    },
    {
      name: "Salmon Fillet",
      description: "Grilled salmon with lemon sauce",
      price: "$22",
      image: "../Image/Video/menu-4.jpg",
    },
    {
      name: "Vegetable Stir-fry",
      description: "Mixed vegetables with soy sauce",
      price: "$15",
      image: "../Image/Video/menu-5.jpg",
    },
    {
      name: "Roast Chicken",
      description: "Herb-marinated chicken with vegetables",
      price: "$21",
      image: "../Image/Video/menu-6.jpg",
    },
    {
      name: "Beef Lasagna",
      description: "Layers of pasta with beef and cheese",
      price: "$23",
      image: "../Image/Video/menu-7.jpg",
    },
    {
      name: "Beef Lasagna",
      description: "Layers of pasta with beef and cheese",
      price: "$23",
      image: "../Image/Video/menu-8.jpg",
    },
  ],
};

// Function to show menu items based on selected category
function showMenuItems(category) {
  const container = document.getElementById("menu-items-container");
  container.innerHTML = ""; // Clear existing items

  menuData[category].forEach((item) => {
    const menuItem = `
                    <div class="col-md-6">
                        <div class="menu-item">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid rounded menu-image">
                            <div class="ms-3">
                                <h5 class="mb-0">${item.name}</h5>
                                <small class="text-muted">${item.description}</small>
                            </div>
                            <div class="ms-auto text-highlight">${item.price}</div>
                        </div>
                    </div>
                `;
    container.innerHTML += menuItem;
  });
  const container1 = document.getElementById("menu-items-container1");
  container1.innerHTML = ""; // Clear existing items

  menuData[category].forEach((item) => {
    const menuItem = `
                    <div class="col-md-6">
                        <div class="menu-item">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid rounded menu-image">
                            <div class="ms-3">
                                <h5 class="mb-0">${item.name}</h5>
                                <small class="text-muted">${item.description}</small>
                            </div>
                            <div class="ms-auto text-highlight">${item.price}</div>
                        </div>
                    </div>
                `;
    container1.innerHTML += menuItem;
  });
}

// JavaScript to handle switching menu categories
document.addEventListener("DOMContentLoaded", function () {
  // Show breakfast items by default on page load
  showMenuItems("breakfast");

  // Add click event to menu categories
  const menuCategories = document.querySelectorAll(".menu-category");
  menuCategories.forEach(function (category) {
    category.addEventListener("click", function () {
      // Remove 'active' class from all categories
      menuCategories.forEach((cat) => cat.classList.remove("active"));
      // Add 'active' class to the clicked category
      this.classList.add("active");

      // Show menu items for the clicked category
      const selectedCategory = this.getAttribute("data-category");
      showMenuItems(selectedCategory);
    });
  });
});
