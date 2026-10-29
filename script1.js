/* ==========================================================================
   LUKMAAN RESTAURANT — DIGITAL MENU
   File: script1.js

   PURPOSE:
   1. Store menu categories, meal names, descriptions, and prices.
   2. Generate the category navigation buttons.
   3. Display menu categories and items on the page.
   4. Highlight the active category while scrolling.
   5. Automatically update the footer copyright year.

   RELATED FILES:
   - index1.html: Digital menu page
   - style.css: Shared website styles
   - style1.css: Digital menu styles

   HOW TO UPDATE THE MENU:
   Edit MENU_DATA below. Keep category IDs unique and consistent.
   ========================================================================== */


/* ==========================================================================
   1. MENU DATA
   This is the main source of menu content.

   Each category contains:
   - id: Unique identifier used for navigation.
   - name: Category name displayed on the page.
   - items: Meals or drinks belonging to the category.

   Each item can contain:
   - name: Item name.
   - price: Price in Tanzanian Shillings. This can be a number (5000)
            or text for a price range ("3,000 - 4,000").
   - desc: Optional description.

   Some rendering logic also supports:
   - cat.note: Optional category note.
   - cat.sizeLabels, item.small, item.large: Optional dual-size pricing.
   ========================================================================== */

const MENU_DATA = [
  {
    id: "grill",
    name: "Zanzibar Grill",
    items: [
      { name: "Calamari", price: 5000 },
      { name: "Octopus", price: 10000 },
      { name: "King Fish", price: 15000 },
      { name: "Whole Fish", price: 10000 },
      { name: "Jumbo Prawns", price: 15000 },
      { name: "Tiger Prawns", price: 5000 },
      { name: "Chicken Quarter", price: 4000 },
      { name: "Indian Chicken Tikka", price: 3000 },
      { name: "Beef Barbecue Stick", price: 2000 },
      { name: "Chicken Shawarma", price: 12000 },
      { name: "French Fries", price: 3000 }
    ]
  },

  {
    id: "kisinia",
    name: "Kisinia Platters",
    items: [
      { name: "Single Kisinia", price: 15000 },
      { name: "Double Kisinia", price: 25000 },
      { name: "Triple Kisinia", price: 35000 },
      { name: "Kisinia for 4 People", price: 45000 },
      { name: "Kisinia for 6 People", price: 60000 }
    ]
  },

  {
    id: "coconut",
    name: "Coconut & Veg",
    items: [
      { name: "Mchicha wa Nazi", price: 3000 },
      { name: "Mchicha wa Supu", price: 3000 },
      { name: "Kisambu cha Nazi", price: 3000 },
      { name: "Vegetables in Coconut", price: 3000 },
      { name: "Vegetables in Tomato", price: 3000 },
      { name: "Mtoriro wa Nazi", price: 3000 },
      { name: "Red Beans in Coconut", price: 3000 },
      { name: "Green Peas in Coconut", price: 4000 },
      { name: "Indian Dhaal (Lentils)", price: 3000 },
      { name: "Ndizi Coconut", price: 5000 },
      { name: "Cassava in Coconut", price: 5000 },
      { name: "Mchemsho wa Ndizi", price: 5000 },
      { name: "Bokoboko", price: 4000 },
      { name: "Sweet Pumpkin", price: 5000 },
      { name: "Mbatata Nyekundu", price: 5000 }
    ]
  },

  {
    id: "rice",
    name: "Rice & Staples",
    items: [
      { name: "Wali Mweupe (White Rice)", price: 3000 },
      { name: "Pilau Rice", price: 5000 },
      { name: "Veggie Biryani Rice", price: 5000 },
      { name: "Veggie Fried Rice", price: 5000 },
      { name: "Mseto wa Chooko", price: 5000 },
      { name: "Mseto wa Kunde", price: 5000 },
      { name: "Sembe", price: 2000 },
      { name: "Sweet Banana", price: 1000 }
    ]
  },

  {
    id: "seafood",
    name: "Seafood Dishes",
    items: [
      { name: "Octopus in Coconut", price: 7000 },
      { name: "Prawns in Coconut", price: 7000 },
      { name: "Fried Fish", price: 4000 },
      { name: "Boiled Anchovies", price: 2000 },
      { name: "Chukuchuku na Samaki", price: 5000 },
      { name: "Fish Parker", price: 12000 }
    ]
  },

  {
    id: "meat",
    name: "Meat & Curries",
    items: [
      { name: "Mbuzi Choma (Grilled Goat)", price: 15000 },
      { name: "Mchuzi wa Mbuzi", price: 6000 },
      { name: "Indian Chicken Curry", price: 6000 },
      { name: "Cow Liver / Beef Curry", price: 6000 },
      { name: "Minced Beef", price: 5000 }
    ]
  },

  {
    id: "sides",
    name: "Sides & Salads",
    items: [
      { name: "Spinach Sautee", price: 3000 },
      { name: "Brocoli", price: 3000 },
      { name: "Beef Sautee", price: 3000 },
      { name: "Sautee Veg", price: 5000 },
      { name: "Avocado Salad", price: 5000 },
      { name: "Veggie Pasta", price: 6000 },
      { name: "Potato Sautee", price: 5000 },
      { name: "Muhogo wa Kuchemsha", price: 1000 },
      { name: "Kiazi Kitamu", price: 1000 },
      { name: "Samosa Veg", price: 1500 },
      { name: "Samosa Beef", price: 1500 },
      { name: "Samosa Chicken", price: 1500 }
    ]
  },

  {
    id: "bread",
    name: "Breads & Bites",
    items: [
      { name: "Chapati", price: 1000 },
      { name: "Indian Kebab", price: 1500 },
      { name: "Potato Beef Cutlets", price: 1000 },
      { name: "Ufuta Naan", price: 1000 },
      { name: "Indian Naan", price: 1000 },
      { name: "Arabic Pita Bread", price: 1000 }
    ]
  },

  {
    id: "snacks",
    name: "Zanzibar Snacks",
    items: [
      { name: "Andazi Doughnut", price: 1000 },
      { name: "Chila Rice Pancake", price: 1000 },
      { name: "Rice Vitumbua", price: 1000 },
      { name: "Visheti Doughnuts", price: 500 },
      { name: "Flavor Cakes", price: "3,000 - 4,000" }
    ]
  },

  {
    id: "pizza",
    name: "Pizza",
    items: [
      {
        name: "Margherita Pizza",
        price: 20000,
        desc: "Pizza base, tomato sauce, mozzarella cheese."
      },
      {
        name: "Beef Pizza",
        price: 25000,
        desc: "Pizza base, tomato sauce, beef, green pepper, oregano."
      },
      {
        name: "Ocean Feast (Seafood)",
        price: 35000,
        desc: "Pizza base, tomato sauce, seafood, green pepper, oregano."
      },
      {
        name: "Chicken Hawaiian Pizza",
        price: 25000,
        desc: "Pizza base, tomato sauce, chicken, onion, pineapple, oregano, mozzarella."
      },
      {
        name: "Veggie Delight",
        price: 22000,
        desc: "Pizza base, onion, tomato sauce, green pepper, sweet corn, black olives, mushroom, oregano, mozzarella."
      },
      { name: "Lukman Special", price: 25000 }
    ]
  },

  {
    id: "burgers",
    name: "Burgers",
    note: "All burgers are served with chips.",
    items: [
      {
        name: "Chicken Burger",
        price: 12000,
        desc: "Burger bread, lettuce, onion, cheese, chicken, mayonnaise sauce."
      },
      {
        name: "Chicken Vegetable Burger",
        price: 16000,
        desc: "Burger bread, lettuce, onion, cheese, chicken, mayonnaise sauce."
      }
    ]
  },

  {
    id: "salads",
    name: "Salads",
    items: [
      { name: "Chicken Salad", price: 10000 },
      { name: "Watermelon with Feta Cheese Salad", price: 10000 },
      { name: "Coleslaw Salad", price: 10000 },
      { name: "Greek Salad", price: 10000 }
    ]
  },

  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Passion Cheese Cake", price: 10000 },
      { name: "Butter Cookies", price: 5000 },
      { name: "Duo Chocolate Mousse with Berry Coulis", price: 10000 },
      { name: "Coconut Mousse", price: 6000 },
      { name: "Banana Cake", price: 6000 },
      { name: "Strawberry Chocolate Mousse", price: 10000 },
      { name: "Black Forest", price: 10000 },
      { name: "Mango Mousse", price: 10000 }
    ]
  },

  {
    id: "smoothies",
    name: "Smoothies & Juices",
    note: "All smoothies and juices are TSh 5,000.",
    items: [
      { name: "Pineapple / Passion", price: 5000 },
      { name: "Watermelon Lime", price: 5000 },
      { name: "Watermelon Beetroot", price: 5000 },
      { name: "Mango Passion", price: 5000 },
      { name: "Pineapple Coconut", price: 5000 },
      { name: "Papaya Avocado", price: 5000 },
      { name: "Watermelon Passion", price: 5000 },
      { name: "Watermelon Cucumber", price: 5000 },
      { name: "Watermelon Bungo (rubbervine fruit)", price: 5000 },
      { name: "Fresh Cocktail", price: 5000 },
      { name: "Fresh Tomato", price: 5000 },
      { name: "Watermelon Passion Apple Ginger", price: 5000 },
      { name: "Dates Milk Shake", price: 5000 },
      { name: "Soursop Passion", price: 5000 },
      { name: "Pineapple Banana", price: 5000 },
      { name: "Bomb", price: 5000 },
      { name: "Avocado Passion", price: 5000 },
      { name: "Carrot / Orange Ginger", price: 5000 },
      { name: "Jackfruit Shake", price: 5000 },
      { name: "Tamarind Mango", price: 5000 },
      { name: "Apple / Watermelon", price: 5000 },
      { name: "Fresh Orange", price: 5000 },
      { name: "Orange / Carrot", price: 5000 },
      { name: "Mango / Avocado", price: 5000 },
      { name: "Beetroot / Orange / Carrot", price: 5000 },
      { name: "Avocado / Banana", price: 5000 },
      { name: "Baobab Shake", price: 5000 },
      { name: "Fruit Salad", price: 5000 },
      { name: "Flavour Shakes", price: 5000 },
      { name: "Young Coconut", price: 2000 }
    ]
  },

  {
    id: "mojitos",
    name: "Mojitos & Cool Drinks",
    items: [
      { name: "Orange Mojito", price: 5000 },
      { name: "Virgin Mojito", price: 5000 },
      { name: "Watermelon Mojito", price: 5000 },
      { name: "Orange Ginger Mojito", price: 5000 },
      { name: "Lukmaan Sunset Mojito", price: 5000 },
      { name: "Ice Cream Ball", price: 1500 }
    ]
  },

  {
    id: "tea",
    name: "Tea & Hot Drinks",
    items: [
      { name: "Spice Tea", price: 3000 },
      { name: "Ginger Tea", price: 2000 },
      { name: "Masala Tea", price: 4000 },
      { name: "Wheat Porridge", price: 2000 },
      { name: "Brewed Coffee", price: 3000 },
      { name: "Lavazza Espresso", price: 4000 },
      { name: "Lavazza Cappuccino", price: 5000 }
    ]
  },

  {
    id: "coffee",
    name: "Coffee",
    items: [
      { name: "Cappuccino", price: 5000 },
      { name: "Latte Macchiato", price: 5000 },
      { name: "Coffee Latte", price: 5000 },
      { name: "Chocochino", price: 5000 },
      { name: "Chai Latte", price: 5000 },
      { name: "Americano", price: 5000 },
      { name: "Iced Coffee", price: 5000 },
      { name: "Stressachino", price: 4000 },
      { name: "Espresso", price: 4000 },
      { name: "Hot Chocolate", price: 5000 },
      { name: "Affogato", price: 5000 },
      { name: "Cinnamon Coffee", price: 5000 },
      { name: "Lukman Coffee", price: 5000 },
      { name: "Mocha, Chocolate or Caramel Coffee", price: 5000 }
    ]
  }
];


/* ==========================================================================
   2. HELPER FUNCTIONS
   Small reusable functions used throughout the script.
   ========================================================================== */


/**
 * Format a price as a Tanzanian Shilling amount.
 *
 * Numbers are formatted with thousands separators.
 * Text prices (such as price ranges) are displayed as written.
 *
 * Examples:
 * formatPrice(15000) returns "TSh 15,000/="
 * formatPrice("3,000 - 4,000") returns "TSh 3,000 - 4,000/="
 *
 * To change how prices appear throughout the menu, edit this function.
 */
function formatPrice(amount) {
  const value =
    typeof amount === "number"
      ? amount.toLocaleString("en-US")
      : amount;

  return "TSh " + value + "/=";
}


/**
 * Create an HTML element.
 *
 * @param {string} tag       HTML tag name, such as "div" or "h2".
 * @param {string} className Optional CSS class.
 * @param {string} html      Optional HTML content.
 * @returns {HTMLElement}
 *
 * Note: The html argument is interpreted as HTML.
 * Use textContent instead when displaying untrusted text.
 */
function el(tag, className, html) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (html !== undefined) {
    element.innerHTML = html;
  }

  return element;
}


/* ==========================================================================
   3. CATEGORY NAVIGATION
   Creates one navigation button for every menu category.
   Clicking a button scrolls to its corresponding section.
   ========================================================================== */

function renderNav() {
  const nav = document.getElementById("category-nav");
  const navContainer = document.querySelector(".category-nav");

  // Stop if the required HTML elements are missing.
  if (!nav || !navContainer) {
    return;
  }

  MENU_DATA.forEach((category) => {
    const button = el("button", "nav-pill");

    button.type = "button";
    button.textContent = category.name;
    button.dataset.target = category.id;

    // Accessibility attributes for category navigation.
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", "false");

    // Scroll to the selected category.
    button.addEventListener("click", () => {
      const target = document.getElementById(category.id);

      if (!target) {
        return;
      }

      // Account for the category navigation height.
      const headerOffset = navContainer.offsetHeight + 12;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });

    nav.appendChild(button);
  });
}


/* ==========================================================================
   4. MENU RENDERING
   Generates all menu categories, meal names, descriptions, and prices.

   The HTML elements are inserted into:
   <main id="menu-content"></main>

   The function supports standard prices and optional two-size prices.
   ========================================================================== */

function renderMenu() {
  const main = document.getElementById("menu-content");

  // Stop if the menu container does not exist.
  if (!main) {
    return;
  }

  MENU_DATA.forEach((category) => {

    // Create the category section.
    const section = el("section", "category-section");

    section.id = category.id;
    section.setAttribute(
      "aria-labelledby",
      category.id + "-heading"
    );

    // Create the category heading.
    const heading = el("h2", "category-heading");

    heading.id = category.id + "-heading";
    heading.textContent = category.name;

    section.appendChild(heading);

    // Display an optional category note.
    if (category.note) {
      section.appendChild(
        el("p", "category-note", category.note)
      );
    }

    // Container for all items in this category.
    const list = el("div", "item-list");

    category.items.forEach((item) => {

      // Create an individual menu item.
      const row = el("article", "menu-item");

      // Meal name and optional description.
      const info = el("div", "menu-item-info");

      const itemName = el("h3", "menu-item-name");
      itemName.textContent = item.name;

      info.appendChild(itemName);

      if (item.desc) {
        const description = el("p", "menu-item-desc");
        description.textContent = item.desc;

        info.appendChild(description);
      }

      row.appendChild(info);


      // Display two prices if the category uses size options.
      if (category.sizeLabels) {

        const priceWrap = el(
          "div",
          "menu-item-price menu-item-price--dual"
        );

        // First size and price.
        const smallPrice = el("div", "price-option");

        const smallLabel = el("span", "price-option-label");
        smallLabel.textContent = category.sizeLabels[0];

        const smallValue = el("span", "price-option-value");
        smallValue.textContent = formatPrice(item.small);

        smallPrice.appendChild(smallLabel);
        smallPrice.appendChild(smallValue);


        // Second size and price.
        const largePrice = el("div", "price-option");

        const largeLabel = el("span", "price-option-label");
        largeLabel.textContent = category.sizeLabels[1];

        const largeValue = el("span", "price-option-value");
        largeValue.textContent = formatPrice(item.large);

        largePrice.appendChild(largeLabel);
        largePrice.appendChild(largeValue);


        // Add both price options to the menu item.
        priceWrap.appendChild(smallPrice);
        priceWrap.appendChild(largePrice);

        row.appendChild(priceWrap);

      } else {

        // Standard single price.
        const price = el("div", "menu-item-price");
        price.textContent = formatPrice(item.price);

        row.appendChild(price);

      }

      list.appendChild(row);
    });

    // Add the item list to its category.
    section.appendChild(list);

    // Add the complete category to the menu page.
    main.appendChild(section);
  });
}


/* ==========================================================================
   5. ACTIVE CATEGORY TRACKING
   Highlights the category button corresponding to the section currently
   being viewed while the customer scrolls through the menu.
   ========================================================================== */

function setupActiveTracking() {
  const pills = Array.from(
    document.querySelectorAll(".nav-pill")
  );

  const sections = MENU_DATA.map((category) =>
    document.getElementById(category.id)
  );

  const navElement = document.querySelector(".category-nav");

  // Stop if there are no navigation buttons or the navigation is missing.
  if (!pills.length || !navElement) {
    return;
  }


  /**
   * Update the active category button.
   *
   * @param {string} categoryId The ID of the active category section.
   */
  function setActive(categoryId) {
    pills.forEach((pill) => {

      const isActive = pill.dataset.target === categoryId;

      pill.classList.toggle("active", isActive);

      pill.setAttribute(
        "aria-selected",
        isActive ? "true" : "false"
      );

      // Keep the active category button visible in the navigation.
      if (isActive) {
        pill.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }

    });
  }


  // Observe menu sections as they enter the viewport.
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

      // Account for the category navigation when tracking sections.
      rootMargin:
        `-${navElement.offsetHeight + 20}px 0px -70% 0px`,

      threshold: 0
    }
  );


  // Start observing all existing menu sections.
  sections.forEach((section) => {
    if (section) {
      observer.observe(section);
    }
  });


  // Highlight the first category when the page loads.
  if (sections[0]) {
    setActive(sections[0].id);
  }
}


/* ==========================================================================
   6. INITIALIZE THE DIGITAL MENU
   Runs after the HTML document has loaded.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Generate category navigation buttons.
  renderNav();

  // Generate menu categories and items.
  renderMenu();

  // Enable automatic active-category highlighting.
  setupActiveTracking();

  // Update the copyright year.
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
