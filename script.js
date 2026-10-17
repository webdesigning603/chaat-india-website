
const dishes = [
  {
    name: "Pani Puri",
    category: "Puri",
    tag: "Street Food Classic",
    description: "Crispy puris filled with tangy, spicy pani and delicious fillings.",
    image: "Pani Puri.png"
  },
  {
    name: "Masala Puri",
    category: "Puri",
    tag: "Flavourful Favourite",
    description: "A delicious puri treat with a spiced masala topping.",
    image: "Masala Puri.png"
  },
  {
    name: "Sev Puri",
    category: "Puri",
    tag: "Crunchy & Tangy",
    description: "Crisp puris topped with chutneys and crunchy sev.",
    image: "Sev Puri.png"
  },
  {
    name: "Bhel Puri",
    category: "Puri",
    tag: "Light & Crunchy",
    description: "Puffed rice, chutneys and crunchy toppings in a lively mix.",
    image: "Bhel Puri.png"
  },
  {
    name: "Dahi Puri",
    category: "Puri",
    tag: "Cool & Creamy",
    description: "Crispy puris paired with yoghurt and sweet-tangy chutneys.",
    image: "Dahi Puri.png"
  },
  {
    name: "Samosa Chaat",
    category: "Chaat",
    tag: "Crowd Favourite",
    description: "A comforting chaat favourite with crispy samosa and toppings.",
    image: "Samosa Chaat.png"
  },
  {
    name: "Kachodi Chaat",
    category: "Chaat",
    tag: "Bold & Savoury",
    description: "A crunchy chaat with classic Indian flavours.",
    image: "Kachodi Chaat.png"
  },
  {
    name: "Papidi Chaat",
    category: "Chaat",
    tag: "Sweet & Spicy",
    description: "Crisp papdi with chutneys and delicious toppings.",
    image: "Papidi Chaat.png"
  },
  {
    name: "Dhai Papidi Chaat",
    category: "Chaat",
    tag: "Creamy Favourite",
    description: "Papdi, yoghurt and chutneys come together in every bite.",
    image: "Dhai Papidi Chaat.png"
  },
  {
    name: "Aloo Dahi Chaat",
    category: "Chaat",
    tag: "Comforting Bite",
    description: "Potato chaat with creamy yoghurt and tangy flavours.",
    image: "Aloo Dahi Chaat.png"
  },
  {
    name: "Mix Chaat",
    category: "Chaat",
    tag: "A Bit of Everything",
    description: "A delicious mix of textures and signature chaat flavours.",
    image: "Mix Chaat.png"
  },
  {
    name: "Aloo Butter Tikki Chaat",
    category: "Chaat",
    tag: "Golden & Savoury",
    description: "A potato tikki-style chaat with buttery flavour and toppings.",
    image: "Aloo Butter Tikki Chaat.png"
  },
  {
    name: "Fry Chaat",
    category: "Chaat",
    tag: "Crispy Delight",
    description: "A crunchy, savoury chaat treat for snack-time cravings.",
    image: "Fry Chaat.png"
  },
  {
    name: "Katori Chaat",
    category: "Chaat",
    tag: "Tasty Little Bowl",
    description: "A crisp katori filled with delicious chaat flavours.",
    image: "Katori Chaat.png"
  },
  {
    name: "Samosa",
    category: "Samosa & Kachodi",
    tag: "Crispy Classic",
    description: "A golden, crisp Indian snack with a savoury filling.",
    image: "Samosa.png"
  },
  {
    name: "Kachodi",
    category: "Samosa & Kachodi",
    tag: "Flaky & Savoury",
    description: "A traditional flaky snack with a flavourful filling.",
    image: "Kachodi.png"
  },
  {
    name: "Dhai Samosa",
    category: "Samosa & Kachodi",
    tag: "Creamy & Crunchy",
    description: "Crispy samosa served with yoghurt and chutneys.",
    image: "Dhai Samosa.png"
  },
  {
    name: "Dhai Kachodi",
    category: "Samosa & Kachodi",
    tag: "Tangy Favourite",
    description: "Flaky kachodi finished with yoghurt and chutneys.",
    image: "Dhai Kachodi.png"
  },
  {
    name: "Dhai Bhala",
    category: "Samosa & Kachodi",
    tag: "Soft & Creamy",
    description: "A classic yoghurt-based chaat with a tangy finish.",
    image: "Dhai Bhala.png"
  },
  {
    name: "Butter Pav Bhaji",
    category: "Pav Bhaji",
    tag: "Mumbai Inspired",
    description: "Spiced vegetable bhaji served with buttery pav.",
    image: "Butter Pav Bhaji.png"
  },
  {
    name: "Cheese Pav Bhaji",
    category: "Pav Bhaji",
    tag: "Cheesy Favourite",
    description: "A rich pav bhaji favourite with a cheesy twist.",
    image: "Cheese Pav Bhaji.png"
  },
  {
    name: "Paneer Pav Bhaji",
    category: "Pav Bhaji",
    tag: "Paneer Delight",
    description: "Spiced bhaji with paneer notes, paired with soft pav.",
    image: "Paneer Pav Bhaji.png"
  },
  {
    name: "Masala Pav",
    category: "Pav Bhaji",
    tag: "Spicy & Satisfying",
    description: "Pav tossed with a fragrant, flavour-packed masala.",
    image: "Masala Pav.png"
  },
  {
    name: "Ghee Jalebi",
    category: "Sweets",
    tag: "Golden Sweet",
    description: "Golden jalebi with a rich ghee aroma and syrupy bite.",
    image: "Ghee Jalebi.png"
  },
  {
    name: "Raj Kachodi",
    category: "Specials",
    tag: "Chaat India Special",
    description: "A special kachodi-style chaat packed with flavour.",
    image: "Raj Kachodi.png"
  },
  {
    name: "Aloo Dahi Paneer",
    category: "Specials",
    tag: "Special Combination",
    description: "A distinctive combination of aloo, dahi and paneer.",
    image: "Aloo Dahi Paneer.png"
  },
  {
    name: "Dahi Bhala Paneer",
    category: "Specials",
    tag: "Chaat India Special",
    description: "A special yoghurt-based chaat with paneer.",
    image: "Dahi Bhala Paneer.png"
  }
];

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

function renderFilters() {
  filters.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");

    button.className =
      "filter" +
      (category === activeCategory ? " active" : "");

    button.textContent = category;

    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderMenu();
    });

    filters.appendChild(button);
  });
}

function renderMenu() {
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

    const imageWrap = document.createElement("div");
    imageWrap.className = "food-image-wrap";

    const image = document.createElement("img");
    image.className = "food-image";
    image.src = dish.image;
    image.alt = dish.name;
    image.loading = "lazy";

    const tag = document.createElement("span");
    tag.className = "food-tag";
    tag.textContent = dish.tag;

    imageWrap.append(image, tag);

    const body = document.createElement("div");
    body.className = "food-body";

    const title = document.createElement("h3");
    title.textContent = dish.name;

    const description = document.createElement("p");
    description.textContent = dish.description;

    const bottom = document.createElement("div");
    bottom.className = "food-bottom";

    const label = document.createElement("span");
    label.textContent = "Explore this dish";

    const viewButton = document.createElement("button");
    viewButton.className = "view-btn";
    viewButton.type = "button";
    viewButton.textContent = "View Details ↗";

    bottom.append(label, viewButton);
    body.append(title, description, bottom);
    card.append(imageWrap, body);

    card.addEventListener("click", () => showDish(dish));

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showDish(dish);
      }
    });

    menuGrid.appendChild(card);
  });
}

function showDish(dish) {
  document.getElementById("modalTitle").textContent = dish.name;

  document.getElementById("modalDescription").textContent =
    dish.description;

  const modalImage = document.getElementById("modalImage");

  modalImage.src = dish.image;
  modalImage.alt = dish.name;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("closeModal")
  .addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.getElementById("year").textContent =
  new Date().getFullYear();

renderFilters();
renderMenu();
