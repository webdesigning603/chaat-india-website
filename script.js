
const dishes = [
  // PURI ITEMS
  {
    name: "Pani Puri",
    category: "Puri",
    tag: "Street Food Classic",
    price: 25,
    description: "Crispy puris filled with tangy, spicy pani and delicious fillings.",
    image: "Pani Puri.png"
  },
  {
    name: "Masala Puri",
    category: "Puri",
    tag: "Flavourful Favourite",
    price: 70,
    description: "A delicious puri treat with a spiced masala topping.",
    image: "Masala Puri.png"
  },
  {
    name: "Sev Puri",
    category: "Puri",
    tag: "Crunchy & Tangy",
    price: 70,
    description: "Crisp puris topped with chutneys and crunchy sev.",
    image: "Sev Puri.png"
  },
  {
    name: "Bhel Puri",
    category: "Puri",
    tag: "Light & Crunchy",
    price: 70,
    description: "Puffed rice, chutneys and crunchy toppings in a lively mix.",
    image: "Bhel Puri.png"
  },
  {
    name: "Dhai Puri",
    category: "Puri",
    tag: "Cool & Creamy",
    price: 70,
    description: "Crispy puris paired with yoghurt and sweet-tangy chutneys.",
    image: "Dahi Puri.png"
  },

  // CHAAT ITEMS
  {
    name: "Samosa Chaat",
    category: "Chaat",
    tag: "Crowd Favourite",
    price: 65,
    description: "A comforting chaat favourite with crispy samosa and toppings.",
    image: "Samosa Chaat.png"
  },
  {
    name: "Kachodi Chaat",
    category: "Chaat",
    tag: "Bold & Savoury",
    price: 65,
    description: "A crunchy chaat with classic Indian flavours.",
    image: "Kachodi Chaat.png"
  },
  {
    name: "Papidi Chaat",
    category: "Chaat",
    tag: "Sweet & Spicy",
    price: 65,
    description: "Crisp papdi with chutneys and delicious toppings.",
    image: "Papidi Chaat.png"
  },
  {
    name: "Dhai Papidi Chaat",
    category: "Chaat",
    tag: "Creamy Favourite",
    price: 65,
    description: "Papdi, yoghurt and chutneys come together in every bite.",
    image: "Dhai Papidi Chaat.png"
  },
  {
    name: "Aloo Dhai Chaat",
    category: "Chaat",
    tag: "Comforting Bite",
    price: 85,
    description: "Potato chaat with creamy yoghurt and tangy flavours.",
    image: "Aloo Dahi Chaat.png"
  },
  {
    name: "Mix Chaat",
    category: "Chaat",
    tag: "A Bit of Everything",
    price: 80,
    description: "A delicious mix of textures and signature chaat flavours.",
    image: "Mix Chaat.png"
  },
  {
    name: "Aloo Butter Tikki Chaat",
    category: "Chaat",
    tag: "Golden & Savoury",
    price: 90,
    description: "A potato tikki-style chaat with buttery flavour and toppings.",
    image: "Aloo Butter Tikki Chaat.png"
  },
  {
    name: "Fry Chaat",
    category: "Chaat",
    tag: "Crispy Delight",
    price: 85,
    description: "A crunchy, savoury chaat treat for snack-time cravings.",
    image: "Fry Chaat.png"
  },
  {
    name: "Katori Chaat",
    category: "Chaat",
    tag: "Tasty Little Bowl",
    price: 85,
    description: "A crisp katori filled with delicious chaat flavours.",
    image: "Katori Chaat.png"
  },
  {
    name: "Double Samosa Chaat",
    category: "Chaat",
    tag: "Bestseller",
    price: 110,
    description: "Crispy samosas topped with chutneys and chaat spices.",
    image: "Double Samosa Chaat.png"
  },
  {
    name: "Bucket Family Pack Chaat",
    category: "Chaat",
    tag: "Family Pack",
    price: 160,
    description: "A shareable family-sized bucket of delicious chaat.",
    image: "Bucket Chaat Family Pack.png"
  },

  // SAMOSA AND KACHODI ITEMS
  {
    name: "Samosa (2 Pieces)",
    category: "Samosa & Kachodi",
    tag: "Crispy Classic",
    price: 30,
    description: "Two golden, crispy samosas with a savoury filling.",
    image: "Samosa.png"
  },
  {
    name: "Kachodi (2 Pieces)",
    category: "Samosa & Kachodi",
    tag: "Flaky & Savoury",
    price: 50,
    description: "Two traditional flaky kachodis with a flavourful filling.",
    image: "Kachodi.png"
  },
  {
    name: "Dhai Samosa",
    category: "Samosa & Kachodi",
    tag: "Creamy & Crunchy",
    price: 60,
    description: "Crispy samosa served with yoghurt and chutneys.",
    image: "Dhai Samosa.png"
  },
  {
    name: "Dhai Kachodi",
    category: "Samosa & Kachodi",
    tag: "Tangy Favourite",
    price: 60,
    description: "Flaky kachodi finished with yoghurt and chutneys.",
    image: "Dhai Kachodi.png"
  },
  {
    name: "Dhai Bhala",
    category: "Samosa & Kachodi",
    tag: "Soft & Creamy",
    price: 70,
    description: "A classic yoghurt-based chaat with a tangy finish.",
    image: "Dhai Bhala.png"
  },

  // PAV BHAJI ITEMS
  {
    name: "Butter Pav Bhaji",
    category: "Pav Bhaji",
    tag: "Mumbai Inspired",
    price: 100,
    description: "Spiced vegetable bhaji served with buttery pav.",
    image: "Butter Pav Bhaji.png"
  },
  {
    name: "Cheese Pav Bhaji",
    category: "Pav Bhaji",
    tag: "Cheesy Favourite",
    price: 120,
    description: "A rich pav bhaji favourite with a cheesy twist.",
    image: "Cheese Pav Bhaji.png"
  },
  {
    name: "Paneer Pav Bhaji",
    category: "Pav Bhaji",
    tag: "Paneer Delight",
    price: 120,
    description: "Spiced bhaji with paneer, paired with soft pav.",
    image: "Paneer Pav Bhaji.png"
  },
  {
    name: "Masala Pav",
    category: "Pav Bhaji",
    tag: "Spicy & Satisfying",
    price: 130,
    description: "Pav tossed with a fragrant, flavour-packed masala.",
    image: "Masala Pav.png"
  },
  {
    name: "Masala Cheese Pav",
    category: "Pav Bhaji",
    tag: "Cheesy Favourite",
    price: 150,
    description: "Buttery pav tossed in spicy masala and topped with cheese.",
    image: "Masala Cheese Pav.png"
  },

  // GHEE JALEBI - ONE ITEM WITH FOUR SIZES
  {
    name: "Ghee Jalebi",
    category: "Sweets",
    tag: "Golden Sweet",
    price: 55,
    sizes: [
      { label: "3 Pieces", price: 55 },
      { label: "250 g", price: 140 },
      { label: "500 g", price: 280 },
      { label: "1 kg", price: 500 }
    ],
    description: "Golden, delicious ghee jalebi available in multiple sizes.",
    image: "Ghee Jalebi.png"
  },

  // CHAAT INDIA SPECIAL ITEMS
  {
    name: "Raj Kachodi",
    category: "Specials",
    tag: "Chaat India Special",
    price: 90,
    description: "A special kachodi-style chaat packed with flavour.",
    image: "Raj Kachodi.png"
  },
  {
    name: "Aloo Dhai Paneer",
    category: "Specials",
    tag: "Special Combination",
    price: 90,
    description: "A distinctive combination of aloo, dhai and paneer.",
    image: "Aloo Dahi Paneer.png"
  },
  {
    name: "Dhai Bhala Paneer",
    category: "Specials",
    tag: "Chaat India Special",
    price: 90,
    description: "A special yoghurt-based chaat with paneer.",
    image: "Dahi Bhala Paneer.png"
  }
];

// MENU CATEGORIES
const categories = [
  "All Items",
  "Puri",
  "Chaat",
  "Samosa & Kachodi",
  "Pav Bhaji",
  "Sweets",
  "Specials"
];

const menuGrid = document.getElementById("menuGrid");
const filters = document.getElementById("filters");
const modal = document.getElementById("foodModal");

let activeCategory = "All Items";

// CREATE CATEGORY FILTER BUTTONS
function renderFilters() {
  if (!filters) return;

  filters.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");

    button.className =
      "filter" + (category === activeCategory ? " active" : "");

    button.textContent = category;

    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderMenu();
    });

    filters.appendChild(button);
  });
}

// CREATE A PRICE DISPLAY
function createPriceDisplay(dish, className = "food-price") {
  const priceContainer = document.createElement("div");
  priceContainer.className = className;

  if (dish.sizes) {
    dish.sizes.forEach(size => {
      const row = document.createElement("div");
      row.className = "jalebi-price-row";

      const label = document.createElement("span");
      label.textContent = size.label;

      const price = document.createElement("strong");
      price.textContent = `₹${size.price}`;

      row.append(label, price);
      priceContainer.appendChild(row);
    });
  } else {
    priceContainer.textContent = `₹${dish.price}`;
  }

  return priceContainer;
}

// RENDER FOOD CARDS
function renderMenu() {
  if (!menuGrid) return;

  menuGrid.innerHTML = "";

  const filteredDishes =
    activeCategory === "All Items"
      ? dishes
      : dishes.filter(dish => dish.category === activeCategory);

  filteredDishes.forEach(dish => {
    const card = document.createElement("article");

    card.className = "food-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View ${dish.name}`);

    // IMAGE
    const imageWrap = document.createElement("div");
    imageWrap.className = "food-image-wrap";

    const image = document.createElement("img");
    image.className = "food-image";
    image.src = dish.image;
    image.alt = dish.name;
    image.loading = "lazy";

    image.onerror = function () {
      this.alt = `${dish.name} image unavailable`;
    };

    // TAG
    const tag = document.createElement("span");
    tag.className = "food-tag";
    tag.textContent = dish.tag;

    imageWrap.append(image, tag);

    // CARD CONTENT
    const body = document.createElement("div");
    body.className = "food-body";

    const title = document.createElement("h3");
    title.textContent = dish.name;

    const price = createPriceDisplay(dish, "food-price");

    const description = document.createElement("p");
    description.className = "food-description";
    description.textContent = dish.description;

    const bottom = document.createElement("div");
    bottom.className = "food-bottom";

    const label = document.createElement("span");
    label.textContent = "Explore this dish";

    const viewButton = document.createElement("button");
    viewButton.className = "view-btn";
    viewButton.type = "button";
    viewButton.textContent = "View Details ↗";

    viewButton.addEventListener("click", event => {
      event.stopPropagation();
      showDish(dish);
    });

    bottom.append(label, viewButton);
    body.append(title, price, description, bottom);
    card.append(imageWrap, body);

    card.addEventListener("click", () => showDish(dish));

    card.addEventListener("keydown", event => {
      if (event.target !== card) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showDish(dish);
      }
    });

    menuGrid.appendChild(card);
  });
}

// SHOW FOOD DETAILS POPUP
function showDish(dish) {
  if (!modal) return;

  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalImage = document.getElementById("modalImage");
  const modalPrice = document.getElementById("modalPrice");

  if (modalTitle) modalTitle.textContent = dish.name;

  if (modalDescription) {
    modalDescription.textContent = dish.description;
  }

  if (modalPrice) {
    modalPrice.replaceChildren();
    modalPrice.appendChild(createPriceDisplay(dish, "modal-price-list"));
  }

  if (modalImage) {
    modalImage.style.display = "block";
    modalImage.src = dish.image;
    modalImage.alt = dish.name;

    modalImage.onerror = function () {
      this.style.display = "none";
    };
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// CLOSE POPUP
function closeModal() {
  if (!modal) return;

  modal.classList.remove("open");
  document.body.style.overflow = "";
}

const closeButton = document.getElementById("closeModal");

if (closeButton) {
  closeButton.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// INITIALISE WEBSITE
renderFilters();
renderMenu();
