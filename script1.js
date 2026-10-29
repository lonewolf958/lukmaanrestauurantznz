/* =========================================================================
   LUKMAAN RESTAURANT — DIGITAL MENU
   All menu content lives in MENU_DATA below. To update prices or items,
   edit this array only — the page renders itself from this data.
   Prices are in Tanzanian Shillings (TSh) as printed on the source menu.
   m(name, price, description) — description is optional.
   A price can be a number (5000) or text ("3,000 - 4,000").
   ========================================================================= */

const m = (name, price, desc) => (desc ? { name, price, desc } : { name, price });
const all = (price, names) => names.map((n) => m(n, price));

const SMOOTHIES = [
  "Pineapple / Passion",
  "Watermelon Lime",
  "Watermelon Beetroot",
  "Mango Passion",
  "Pineapple Coconut",
  "Papaya Avocado",
  "Watermelon Passion",
  "Watermelon Cucumber",
  "Watermelon Bungo (rubbervine fruit)",
  "Fresh Cocktail",
  "Fresh Tomato",
  "Watermelon Passion Apple Ginger",
  "Dates Milk Shake",
  "Soursop Passion",
  "Pineapple Banana",
  "Bomb",
  "Avocado Passion",
  "Carrot / Orange Ginger",
  "Jackfruit Shake",
  "Tamarind Mango",
  "Apple / Watermelon",
  "Fresh Orange",
  "Orange / Carrot",
  "Mango / Avocado",
  "Beetroot / Orange / Carrot",
  "Avocado / Banana",
  "Baobab Shake",
  "Fruit Salad",
  "Flavour Shakes"
];

const MENU_DATA = [
  {
    id: "grill",
    name: "Zanzibar Grill",
    items: [
      m("Calamari", 5000),
      m("Octopus", 10000),
      m("King Fish", 15000),
      m("Whole Fish", 10000),
      m("Jumbo Prawns", 15000),
      m("Tiger Prawns", 5000),
      m("Chicken Quarter", 4000),
      m("Indian Chicken Tikka", 3000),
      m("Beef Barbecue Stick", 2000),
      m("Chicken Shawarma", 12000),
      m("French Fries", 3000)
    ]
  },

  {
    id: "kisinia",
    name: "Kisinia Platters",
    items: [
      m("Single Kisinia", 15000),
      m("Double Kisinia", 25000),
      m("Triple Kisinia", 35000),
      m("Kisinia for 4 People", 45000),
      m("Kisinia for 6 People", 60000)
    ]
  },

  {
    id: "coconut",
    name: "Coconut & Veg",
    items: [
      m("Mchicha wa Nazi", 3000),
      m("Mchicha wa Supu", 3000),
      m("Kisambu cha Nazi", 3000),
      m("Vegetables in Coconut", 3000),
      m("Vegetables in Tomato", 3000),
      m("Mtoriro wa Nazi", 3000),
      m("Red Beans in Coconut", 3000),
      m("Green Peas in Coconut", 4000),
      m("Indian Dhaal (Lentils)", 3000),
      m("Ndizi Coconut", 5000),
      m("Cassava in Coconut", 5000),
      m("Mchemsho wa Ndizi", 5000),
      m("Bokoboko", 4000),
      m("Sweet Pumpkin", 5000),
      m("Mbatata Nyekundu", 5000)
    ]
  },

  {
    id: "rice",
    name: "Rice & Staples",
    items: [
      m("Wali Mweupe (White Rice)", 3000),
      m("Pilau Rice", 5000),
      m("Veggie Biryani Rice", 5000),
      m("Veggie Fried Rice", 5000),
      m("Mseto wa Chooko", 5000),
      m("Mseto wa Kunde", 5000),
      m("Sembe", 2000),
      m("Sweet Banana", 1000)
    ]
  },

  {
    id: "seafood",
    name: "Seafood Dishes",
    items: [
      m("Octopus in Coconut", 7000),
      m("Prawns in Coconut", 7000),
      m("Fried Fish", 4000),
      m("Boiled Anchovies", 2000),
      m("Chukuchuku na Samaki", 5000),
      m("Fish Parker", 12000)
    ]
  },

  {
    id: "meat",
    name: "Meat & Curries",
    items: [
      m("Mbuzi Choma (Grilled Goat)", 15000),
      m("Mchuzi wa Mbuzi", 6000),
      m("Indian Chicken Curry", 6000),
      m("Cow Liver / Beef Curry", 6000),
      m("Minced Beef", 5000)
    ]
  },

  {
    id: "sides",
    name: "Sides & Salads",
    items: [
      m("Spinach Sautee", 3000),
      m("Sautee Veg", 5000),
      m("Avocado Salad", 5000),
      m("Veggie Pasta", 6000),
      m("Potato Sautee", 5000),
      m("Samosa Veg", 1500),
      m("Samosa Chicken / Nyama", 1500)
    ]
  },

  {
    id: "bread",
    name: "Breads & Bites",
    items: [
      m("Chapati", 1000),
      m("Indian Kebab", 1500),
      m("Potato Beef Cutlets", 1000),
      m("Ufuta Naan", 1000),
      m("Indian Naan", 1000),
      m("Arabic Pita Bread", 1000)
    ]
  },

  {
    id: "snacks",
    name: "Zanzibar Snacks",
    items: [
      m("Andazi Doughnut", 1000)
      m("Chila Rice Pancake", 1000),
      m("Rice Vitumbua", 1000),
      m("Visheti Doughnuts", 500),
      m("Flavor Cakes", "3,000 - 4,000")
    ]
  },

  {
    id: "pizza",
    name: "Pizza",
    items: [
      m("Margherita Pizza", 20000, "Pizza base, tomato sauce, mozzarella cheese"),
      m("Beef Pizza", 25000, "Pizza base, tomato sauce, beef, green pepper, oregano"),
      m("Ocean Feast (Seafood)", 35000, "Pizza base, tomato sauce, seafood, green pepper, oregano"),
      m("Chicken Hawaiian Pizza", 25000, "Pizza base, tomato sauce, chicken, onion, pineapple, oregano, mozzarella"),
      m("Veggie Delight", 22000, "Pizza base, onion, tomato sauce, green pepper, sweet corn, black olives, mushroom, oregano, mozzarella"),
      m("Lukman Special", 25000)
    ]
  },

  {
    id: "burgers",
    name: "Burgers",
    note: "All burgers are served with chips.",
    items: [
      m("Chicken Burger", 12000, "Burger bread, lettuce, onion, cheese, chicken, mayonnaise sauce"),
      m("Chicken Vegetable Burger", 16000, "Burger bread, lettuce, onion, cheese, chicken, mayonnaise sauce")
    ]
  },

  {
    id: "salads",
    name: "Salads",
    items: [
      m("Chicken Salad", 10000),
      m("Watermelon with Feta Cheese Salad", 10000),
      m("Coleslaw Salad", 10000),
      m("Greek Salad", 10000)
    ]
  },

  {
    id: "desserts",
    name: "Desserts",
    items: [
      m("Passion Cheese Cake", 10000),
      m("Butter Cookies", 5000),
      m("Duo Chocolate Mousse with Berry Coulis", 10000),
      m("Coconut Mousse", 6000),
      m("Banana Cake", 6000),
      m("Strawberry Chocolate Mousse", 10000),
      m("Black Forest", 10000),
      m("Mango Mousse", 10000)
    ]
  },

  {
    id: "smoothies",
    name: "Smoothies & Juices",
    note: "All smoothies and juices are TSh 5,000.",
    items: [
      ...all(5000, SMOOTHIES),
      m("Young Coconut", 2000)
    ]
  },

  {
    id: "mojitos",
    name: "Mojitos & Cool Drinks",
    items: [
      m("Orange Mojito", 5000),
      m("Virgin Mojito", 5000),
      m("Watermelon Mojito", 5000),
      m("Orange Ginger Mojito", 5000),
      m("Lukmaan Sunset Mojito", 5000),
      m("Ice Cream Ball", 1500)
    ]
  },

  {
    id: "tea",
    name: "Tea & Hot Drinks",
    items: [
      m("Spice Tea", 3000),
      m("Ginger Tea", 2000),
      m("Masala Tea", 4000),
      m("Wheat Porridge", 1000),
      m("Brewed Coffee", 3000),
      m("Lavazza Espresso", 4000),
      m("Lavazza Cappuccino", 5000)
    ]
  },

  {
    id: "coffee",
    name: "Coffee",
    items: [
      m("Cappuccino", 5000),
      m("Latte Macchiato", 5000),
      m("Coffee Latte", 5000),
      m("Chocochino", 5000),
      m("Chai Latte", 5000),
      m("Americano", 5000),
      m("Iced Coffee", 5000),
      m("Stressachino", 4000),
      m("Espresso", 4000),
      m("Hot Chocolate", 5000),
      m("Affogato", 5000),
      m("Cinnamon Coffee", 5000),
      m("Lukman Coffee", 5000),
      m("Mocha, Chocolate or Caramel Coffee", 5000)
    ]
  }
];


/* ---------- Helpers ---------- */

function formatPrice(n) {
  const v = typeof n === "number" ? n.toLocaleString("en-US") : n;
  return "TSh " + v + "/=";
}

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/* ---------- Render category navigation ---------- */

function renderNav() {
  const nav = document.getElementById("category-nav");
  MENU_DATA.forEach((cat) => {
    const btn = el("button", "nav-pill");
    btn.type = "button";
    btn.textContent = cat.name;
    btn.dataset.target = cat.id;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", "false");
    btn.addEventListener("click", () => {
      const target = document.getElementById(cat.id);
      if (!target) return;
      const headerOffset = document.querySelector(".category-nav").offsetHeight + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    });
    nav.appendChild(btn);
  });
}

/* ---------- Render menu sections ---------- */

function renderMenu() {
  const main = document.getElementById("menu-content");

  MENU_DATA.forEach((cat) => {
    const section = el("section", "category-section");
    section.id = cat.id;
    section.setAttribute("aria-labelledby", cat.id + "-heading");

    const heading = el("h2", "category-heading");
    heading.id = cat.id + "-heading";
    heading.textContent = cat.name;
    section.appendChild(heading);

    if (cat.note) {
      section.appendChild(el("p", "category-note", cat.note));
    }

    const list = el("div", "item-list");

    cat.items.forEach((item) => {
      const row = el("article", "menu-item");

      const info = el("div", "menu-item-info");
      info.appendChild(el("h3", "menu-item-name", item.name));
      if (item.desc) {
        info.appendChild(el("p", "menu-item-desc", item.desc));
      }
      row.appendChild(info);

      row.appendChild(el("div", "menu-item-price", formatPrice(item.price)));

      list.appendChild(row);
    });

    section.appendChild(list);
    main.appendChild(section);
  });
}

/* ---------- Active category highlighting on scroll ---------- */

function setupActiveTracking() {
  const pills = Array.from(document.querySelectorAll(".nav-pill"));
  const sections = MENU_DATA.map((c) => document.getElementById(c.id));
  const navEl = document.querySelector(".category-nav");

  function setActive(id) {
    pills.forEach((p) => {
      const isActive = p.dataset.target === id;
      p.classList.toggle("active", isActive);
      p.setAttribute("aria-selected", isActive ? "true" : "false");
      if (isActive) {
        p.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: `-${navEl.offsetHeight + 20}px 0px -70% 0px`,
      threshold: 0,
    }
  );

  sections.forEach((s) => s && observer.observe(s));

  // Set initial active state
  if (sections[0]) setActive(sections[0].id);
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderMenu();
  setupActiveTracking();

  document.getElementById("year").textContent = new Date().getFullYear();
});
