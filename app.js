const pizzaSizes = [
  { name: "Chica", slices: 6, price: 100 },
  { name: "Mediana", slices: 8, price: 140 },
  { name: "Grande", slices: 10, price: 180 },
  { name: "Familiar", slices: 12, price: 200 }
];
const PIZZAS_PER_PAGE = 6;

const snackFlavors = ["BBQ", "Mango Habanero", "Buffalo", "Tamarindo"];
const frappeFlavors = ["Moka", "Vainilla", "Capuchino", "Oreo"];
const milkshakeFlavors = ["Fresa", "Vainilla", "Chocolate", "Rompope"];
const dessertIngredients = ["Nutella", "Quesocrema", "Lechera", "Cajeta", "Mermelada de Fresa", "Mermelada de Zarzamora", "Fresas", "Zarzamora", "Moras", "Nuez", "Canela"];

const pizzaSpecialties = [
  { id: "pepperoni", name: "Pepperoni", description: "", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80" },
  { id: "hawaiana", name: "Hawaiana", description: "Jamón de pavo y piña.", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80" },
  { id: "carnes-frias", name: "Carnes Frías", description: "Tocino, pepperoni en rajas y jamón.", image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80" },
  { id: "americana", name: "Americana", description: "Salchicha, pepperoni y jamón.", image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=800&q=80" },
  { id: "oaxaquena", name: "Oaxaqueña", description: "Chile poblano asado, chorizo y cebolla.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80" },
  { id: "al-pastor", name: "Al Pastor", description: "Cebollas, bistec al pastor y piña.", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80" },
  { id: "mexicana", name: "Mexicana", description: "Arrachera marinada, cebollas y jalapeño.", image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80" },
  { id: "pollo-bbq", name: "Pollo a la BBQ", description: "Cebollas y pollo BBQ.", image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=800&q=80" },
  { id: "alambre", name: "Alambre", description: "Chile poblano, tocino, chorizo y cebollas.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80" },
  { id: "vegetariana", name: "Vegetariana", description: "Champiñones, tomates, chile poblano y cebollas.", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80" },
  { id: "pepperoni-champinones", name: "Pepperoni con Champiñones", description: "", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=1000&q=85" },
  { id: "chicken-fajita", name: "Chicken Fajita", description: "Fajitas de pollo jugosas, chile morrón, chile poblano y cebollas.", image: "https://images.unsplash.com/photo-1689773976415-293dd893f77e?auto=format&fit=crop&w=1000&q=85" }
];

const products = [
  ...pizzaSpecialties.map(({ id, name, description, image }) => ({ id, nombre: name, categoria: "Pizzas", descripcion: description, imagen: image })),
  { id: "combo-sencillo", name: "Combo Sencillo", category: "Hamburguesas", group: "Combos de Hamburguesa", price: 100, description: "Contiene hamburguesa, papas y refresco", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
  { id: "combo-tocino", name: "Combo con Tocino", category: "Hamburguesas", group: "Combos de Hamburguesa", price: 110, description: "Contiene hamburguesa, papas y refresco", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80" },
  { id: "combo-hawaiano", name: "Combo Hawaiano", category: "Hamburguesas", group: "Combos de Hamburguesa", price: 110, description: "Contiene hamburguesa, papas y refresco", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80" },
  { id: "combo-pollo", name: "Combo de Pollo", category: "Hamburguesas", group: "Combos de Hamburguesa", price: 110, description: "Contiene hamburguesa, papas y refresco", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80" },
  { id: "hamburguesa-sencilla", name: "Hamburguesa Sencilla", category: "Hamburguesas", group: "Hamburguesas Solas", price: 50, description: "Carne a la parrilla con lechuga, tomate y queso.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
  { id: "hamburguesa-tocino", name: "Hamburguesa con Tocino", category: "Hamburguesas", group: "Hamburguesas Solas", price: 60, description: "Carne a la parrilla con tocino crujiente y queso.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80" },
  { id: "hamburguesa-hawaiana", name: "Hamburguesa Hawaiana", category: "Hamburguesas", group: "Hamburguesas Solas", price: 60, description: "Carne a la parrilla con piña dorada y queso.", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" },
  { id: "hamburguesa-pollo", name: "Hamburguesa de Pollo", category: "Hamburguesas", group: "Hamburguesas Solas", price: 60, description: "Pollo dorado con lechuga fresca y aderezo de la casa.", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80" },
  { id: "cafe-capuchino", name: "Café Capuchino", category: "Bebidas Calientes", price: 40, description: "Espresso con leche vaporizada y una capa perfecta de espuma", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80" },
  { id: "cafe-mokachino", name: "Café Mokachino", category: "Bebidas Calientes", price: 40, description: "Deliciosa combinación de espresso, chocolate y leche vaporizada", image: "https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=800&q=80" },
  { id: "cafe-latte", name: "Café Latte", category: "Bebidas Calientes", price: 40, description: "Espresso suave con abundante leche vaporizada", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80" },
  { id: "cafe-americano", name: "Café Americano", category: "Bebidas Calientes", price: 25, description: "Café negro clásico, intenso y aromático", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" },
  { id: "cafe-olla", name: "Café de Olla", category: "Bebidas Calientes", price: 15, description: "Tradicional café de olla endulzado con piloncillo y canela", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80" },
  { id: "chocolate-caliente", name: "Chocolate Caliente", category: "Bebidas Calientes", price: 25, description: "Chocolate tradicional caliente, reconfortante y espumoso", image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&q=80" },
  { id: "chocolate-leche", name: "Chocolate con Leche", category: "Bebidas Calientes", price: 30, description: "Cremosa combinación de chocolate premium y leche caliente", image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&q=80" },
  { id: "te", name: "Té", category: "Bebidas Calientes", price: 15, description: "Infusión caliente de hierbas selectas a elegir", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80" },
  { id: "frappe", name: "Frappé", category: "Bebidas Frías", price: 50, description: "Delicioso frappé helado hecho al momento", flavors: frappeFlavors, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80" },
  { id: "malteada", name: "Malteada", category: "Bebidas Frías", price: 40, description: "Cremosa malteada tradicional con crema batida", flavors: milkshakeFlavors, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80" },
  { id: "cerveza", name: "Cerveza", category: "Bebidas Frías", price: 25, description: "Cerveza bien fría para acompañar tu pizza", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80" },
  { id: "azulito", name: "Azulito", category: "Bebidas Frías", price: 50, description: "Famosa bebida preparada de color azul, dulce y refrescante", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80" },
  { id: "refresco-400ml", name: "Refresco 400ml", category: "Bebidas Frías", price: 20, description: "Refresco embotellado bien frío", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80" },
  { id: "jugo-lata", name: "Jugo de lata", category: "Bebidas Frías", price: 20, description: "Jugo de frutas enlatado", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80" },
  { id: "jugo-cajita", name: "Jugo de cajita", category: "Bebidas Frías", price: 15, description: "Jugo de frutas en presentación pequeña de cartón", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80" },
  { id: "agua-600ml", name: "Agua 600ml", category: "Bebidas Frías", price: 15, description: "Botella de agua purificada de 600ml", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80" },
  { id: "agua-1l", name: "Agua 1L", category: "Bebidas Frías", price: 20, description: "Botella de agua purificada de 1 litro", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80" },
  { id: "alitas", name: "Alitas de Pollo", category: "Snacks", price: 80, description: "La orden contiene 5 alitas", flavors: snackFlavors, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80" },
  { id: "boneless", name: "Boneless de Pollo", category: "Snacks", price: 80, description: "Tiernos trozos de pechuga de pollo empanizados", flavors: snackFlavors, image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80" },
  { id: "papas-francesa", name: "Papas a la Francesa", category: "Snacks", price: 40, description: "Crujientes papas fritas sazonadas", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80" },
  { id: "nuggets", name: "Nuggets de Pollo", category: "Snacks", price: 50, description: "Deliciosos nuggets de pollo crujientes", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80" },
  { id: "nachos", name: "Orden de Nachos", category: "Snacks", price: 50, description: "Totopos con queso fundido y jalapeños", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80" },
  { id: "hotdog", name: "HotDog", category: "Snacks", price: 30, description: "Hot dog tradicional con aderezos", image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&w=800&q=80" },
  { id: "rebanada-pizza", name: "Rebanada de Pizza", category: "Snacks", price: 25, description: "Una rebanada de nuestra deliciosa pizza tradicional", image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80" },
  { id: "crepa", name: "Crepa", category: "Postres", price: 50, description: "Deliciosa crepa artesanal preparada al momento", ingredients: dessertIngredients, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80" },
  { id: "waffle", name: "Waffle", category: "Postres", price: 60, description: "Cremoso y crujiente waffle recién horneado", ingredients: dessertIngredients, image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80" },
  { id: "pay-queso", name: "Pay de Queso", category: "Postres", price: 40, description: "Deliciosa rebanada de pay de queso tradicional. No incluye extras", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80" }
];

const money = (amount) => `$${amount} MXN`;
const imageMarkup = (product, className = "") => `<img class="${className}" src="${product.image}" alt="${product.name}" loading="lazy">`;

function renderPizzaScreen() {
  const pizzaGrids = [
    document.querySelector("#pizza-grid-page-one"),
    document.querySelector("#pizza-grid-page-two")
  ];
  const burgerLists = [
    [document.querySelector("#combo-list"), "Combos de Hamburguesa"],
    [document.querySelector("#solo-burger-list"), "Hamburguesas Solas"]
  ];
  const pizzaSizesMarkup = pizzaSizes.map((size) => `
    <div class="size-price"><strong>${size.name}</strong><b>${money(size.price)}</b><span>${size.slices} rebanadas</span></div>
  `).join("");
  const pizzas = products.filter((product) => product.categoria === "Pizzas");
  const burgers = products.filter((product) => product.category === "Hamburguesas");
  const renderPizzaCard = (pizza) => `
    <article class="pizza-card">
      ${imageMarkup({ name: pizza.nombre, image: pizza.imagen })}
      <div class="pizza-card-copy"><h3>${pizza.nombre}</h3><p>${pizza.descripcion}</p></div>
    </article>
  `;

  pizzaGrids.forEach((grid, pageIndex) => {
    grid.innerHTML = pizzas.slice(pageIndex * PIZZAS_PER_PAGE, (pageIndex + 1) * PIZZAS_PER_PAGE).map(renderPizzaCard).join("");
  });

  document.querySelector("#pizza-sizes-page-one").innerHTML = pizzaSizesMarkup;
  document.querySelector("#pizza-sizes-page-two").innerHTML = pizzaSizesMarkup;

  burgerLists.forEach(([list, group]) => {
    list.innerHTML = burgers.filter((burger) => burger.group === group).map((burger) => `
      <article class="burger-item">
        ${imageMarkup(burger)}
        <div><h3>${burger.name}</h3><p>${burger.description}</p></div>
        <b>${money(burger.price)}</b>
      </article>
    `).join("");
  });
}

function renderMenuItem(product) {
  const flavors = product.flavors ? `<p class="flavors">Sabores: ${product.flavors.join(" · ")}</p>` : "";
  let description = product.description;
  if (product.ingredients) description = "Elige hasta 3 ingredientes";
  return `
    <article class="menu-item">
      ${imageMarkup(product)}
      <div><h3>${product.name}</h3><p>${description}</p>${flavors}</div>
      <b>${money(product.price)}</b>
    </article>
  `;
}

function renderDrinksAndSnacksScreen() {
  const sections = [
    ["#snacks-list", "Snacks"],
    ["#cold-list", "Bebidas Frías"],
    ["#hot-list", "Bebidas Calientes"],
    ["#dessert-list", "Postres"]
  ];
  sections.forEach(([selector, category]) => {
    const target = document.querySelector(selector);
    target.innerHTML = products.filter((product) => product.category === category).map(renderMenuItem).join("");
  });
}

function initializeCarousel() {
  const main = document.querySelector("[data-carousel]");
  if (!main) return;

  const slides = [...main.querySelectorAll(".menu-panel")];
  if (slides.length < 2) return;

  let activeIndex = 0;
  const showActiveSlide = () => {
    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.hidden = !isActive;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.querySelector(".section-index").textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    });
  };

  main.classList.add("is-carousel");
  showActiveSlide();
  window.setInterval(() => {
    activeIndex = (activeIndex + 1) % slides.length;
    showActiveSlide();
  }, Number(main.dataset.carouselInterval) || 8000);
}

if (document.body.dataset.screen === "one") renderPizzaScreen();
if (document.body.dataset.screen === "two") renderDrinksAndSnacksScreen();
initializeCarousel();
