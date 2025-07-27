// Масив товарів із всіма даними
const products = [
  {
    id: '1',
    category: 'tools',
    title: "Дриль електричний Bosch GSB 13 RE",
    price: "2700 грн",
    img: "https://cdn.pixabay.com/photo/2017/12/10/14/47/power-drill-3019637_1280.jpg",
    description: "Потужний дриль для домашнього та професійного використання. Зручний у роботі, легкий і надійний."
  },
  {
    id: '2',
    category: 'materials',
    title: "Цемент М-500 50 кг",
    price: "110 грн",
    img: "https://cdn.pixabay.com/photo/2017/06/01/19/53/cement-2364891_1280.jpg",
    description: "Високоякісний цемент для будівництва та ремонту. Забезпечує міцність та довговічність."
  },
  {
    id: '3',
    category: 'materials',
    title: "Лак для дерева Teknos Aqua 1л",
    price: "450 грн",
    img: "https://cdn.pixabay.com/photo/2018/11/18/21/40/paint-3825123_1280.jpg",
    description: "Прозорий лак для захисту дерев'яних поверхонь, стійкий до вологи та ультрафіолету."
  },
  {
    id: '4',
    category: 'tools',
    title: "Лопата штикова з дерев'яною ручкою",
    price: "380 грн",
    img: "https://cdn.pixabay.com/photo/2017/05/07/22/08/shovel-2290962_1280.jpg",
    description: "Надійна лопата для копання ґрунту з комфортною дерев'яною ручкою."
  },
  {
    id: '5',
    category: 'lighting',
    title: "Світлодіодна лампа LED 9 Вт",
    price: "120 грн",
    img: "https://cdn.pixabay.com/photo/2017/01/10/19/05/light-bulb-1964242_1280.jpg",
    description: "Енергоефективна LED лампа для освітлення житлових і комерційних приміщень."
  },
  {
    id: '6',
    category: 'materials',
    title: "Герметик силіконовий прозорий 300 мл",
    price: "90 грн",
    img: "https://cdn.pixabay.com/photo/2017/01/13/11/31/silicone-1972448_1280.jpg",
    description: "Прозорий силіконовий герметик для ущільнення та захисту від вологи."
  }
];

// Вивід товарів (усі або по категорії)
function loadProducts(category = 'all') {
  const container = document.getElementById('product-list');
  if (!container) return;

  container.innerHTML = '';

  let filteredProducts = products;
  if (category !== 'all') {
    filteredProducts = products.filter(p => p.category === category);
  }

  if (filteredProducts.length === 0) {
    container.innerHTML = '<p>Товари не знайдені.</p>';
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <a href="product.html?id=${product.id}" style="color: inherit; text-decoration: none;">
        <img src="${product.img}" alt="${product.title}" />
        <div class="product-title">${product.title}</div>
        <div class="product-price">${product.price}</div>
      </a>
    `;
    container.appendChild(card);
  });
}

// Вивід детальної сторінки товару
function loadProductDetail(id) {
  const product = products.find(p => p.id === id);
  const container = document.getElementById('product-detail');
  if (!container) return;

  if (!product) {
    container.innerHTML = '<p>Товар не знайдено.</p>';
    return;
  }

  container.innerHTML = `
    <div class="product-detail-container">
      <img src="${product.img}" alt="${product.title}" />
      <h2 class="product-detail-title">${product.title}</h2>
      <div class="product-detail-price">${product.price}</div>
      <p class="product-detail-description">${product.description}</p>
      <a href="category.html?cat=${product.category}">Повернутися до категорії</a>
    </div>
  `;
}

// При завантаженні сторінки виконуємо відповідні дії
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    loadProducts();
  }

  if (window.location.pathname.endsWith('category.html')) {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat') || 'all';
    loadProducts(cat);
  }

  // Деталі завантажуються через inline-скрипт у product.html
});