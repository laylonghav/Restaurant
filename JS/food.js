// Menu data for each category
const menuData = {
  breakfast: [
    {
      name: "Bacon cheese sandwich",
      description: "Rice porridge with prawns",
      price: "$10",
      image: "../Image/Video/Bacon_cheese_sandwich.jpg",
    },
    {
      name: "បាយដូងត្រីចៀន (bai doung trei chien)",
      description: "Rice cakes with coconut",
      price: "$8",
      image: "../Image/Video/bai_doung_trei_chien.jpg",
    },
    {
      name: "បាយខសាច់ជ្រូកបីជាន់ (bai kher sach chrouk bei chon)",
      description: "Sweet rice cakes with coconut and sugar",
      price: "$9",
      image: "../Image/Video/bai_kher_sach_chrouk_bei_chon.jpg",
    },
    {
      name: "បាយឡុកឡាក់ (bai lok lak)",
      description: "Fresh fruit salad with mango and coconut",
      price: "$7",
      image: "../Image/Video/bai_lok_lak.jpg",
    },
    {
      name: "បាយត្រីសាបាក់ (bai trei sa bek)",
      description: "Toasted bread with sweet coconut spread",
      price: "$11",
      image: "../Image/Video/bai_trei_sa_bek.jpg",
    },
    {
      name: "បាយត្រីសាម៉ុន (bai trei samon)",
      description: "Rice with traditional Khmer-style pork",
      price: "$12",
      image: "../Image/Video/bai_trei_samon.jpg",
    },
    {
      name: "Breakfast (breakfast)",
      description: "Rice with fried garlic and eggs",
      price: "$10",
      image: "../Image/Video/breakfast.jpg",
    },
    {
      name: "ឆាគ្រឿង (cha kroueng)",
      description: "Rice with fried garlic and eggs",
      price: "$10",
      image: "../Image/Video/cha_kroueng.jpg",
    },
  ],
  lunch: [
    {
      name: "សម្លម្ហូបសាច់ជ្រូក (samlor mreah preu sach chrouk)",
      description: "Rice with beef",
      price: "$15",
      image: "../Image/Video/cha_mreah_preu_sach_chrouk.jpg",
    },
    {
      name: "កាហ្វេ (COFFEE)",
      description: "Salad with prawns",
      price: "$12",
      image: "../Image/Video/COFFEE.jpg",
    },
    {
      name: "បង្អែម (Dessert)",
      description: "Pork with herbs and spices",
      price: "$14",
      image: "../Image/Video/Dessert.jpg",
    },
    {
      name: "សាច់ជ្រូកអាំង (Grilled Pork Ribs)",
      description: "Fried tofu with a crispy crust",
      price: "$10",
      image: "../Image/Video/Grilled_Pork_Ribs.jpg",
    },
    {
      name: "ការីបង្គាទន្លេ (kari bongka tonle)",
      description: "Tacos with seasoned pork and vegetables",
      price: "$13",
      image: "../Image/Video/kari_bongka_tonle.jpg",
    },
    {
      name: "ខត្រីស្វាយខ្ចី (khat trei svay khey)",
      description: "Spaghetti with creamy sauce",
      price: "$16",
      image: "../Image/Video/khat_trei_svay_khey.jpg",
    },
    {
      name: "ខត្រីស្វាយខ្ចី (Pineapple dessert)",
      description: "Fish with crispy fries",
      price: "$17",
      image: "../Image/Video/Pineapple_dessert.jpg",
    },
    {
      name: "សម្លការី (samlor kari)",
      description: "Fish with crispy fries",
      price: "$17",
      image: "../Image/Video/samlor_kari.jpg",
    },
  ],
  dinner: [
    {
      name: "ស្តេកសាច់គោខ្មែរ (stek sach ko Khmer)",
      description: "Grilled beef with garlic butter",
      price: "$25",
      image: "../Image/Video/stek_sach_ko_Khmer.jpg",
    },
    {
      name: "ត្រីស្រែចៀនទឹកអំពិលទុំ (trei srae chien tirk ampe tom)",
      description: "Rice with a traditional Khmer sauce",
      price: "$18",
      image: "../Image/Video/trei_srae_chien_tirk_ampe_tom.jpg",
    },
    {
      name: "ត្រីទឹកកក (Trei Tuk Kak)",
      description: "Fish with a creamy sauce",
      price: "$20",
      image: "../Image/Video/menu-3.jpg",
    },
    {
      name: "សាច់ត្រី ( Sach Trei)",
      description: "Grilled fish with lemon sauce",
      price: "$22",
      image: "../Image/Video/menu-4.jpg",
    },
    {
      name: "សាច់បន្លែ (Sach Bonlae)",
      description: "Stir-fried vegetables with soy sauce",
      price: "$15",
      image: "../Image/Video/menu-5.jpg",
    },
    {
      name: "សាច់ជ្រូក (Sach Chrouk)",
      description: "Herb-marinated pork with vegetables",
      price: "$21",
      image: "../Image/Video/menu-6.jpg",
    },
    {
      name: "សាច់គោ (Sach Ko )",
      description: "Layers of pasta with beef and cheese",
      price: "$23",
      image: "../Image/Video/menu-7.jpg",
    },
    {
      name: "សាច់គោអាំង (Sach Ko​​ Oang )",
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
                            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover;" class="img-fluid  rounded menu-image">
                            <div class="ms-3">
                                <h5 class="mb-0 txtKhmer" style="font-size: 18px;">${item.name}</h5>
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
                            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover;" class="img-fluid rounded menu-image">
                            <div class="ms-3">
                                <h5 class="mb-0 txtKhmer" style="font-size: 18px;">${item.name}</h5>
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
