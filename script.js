// Products Data
const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Analgésicos",
    price: 12.9,
    oldPrice: 18.9,
    image: "img/Paracetamol 500mg.jpg",
    description: "Analgésico e antitérmico eficaz para dores leves a moderadas e febre.",
    indications: "Indicado para o alívio de dores de cabeça, dores musculares, dores de dente e febre.",
    contraindications: "Não use em caso de alergia ao paracetamol ou problemas hepáticos graves.",
    dosage: "Adultos: 1 comprimido a cada 6 horas. Não exceder 4g por dia.",
    prescription: false,
  },
  {
    id: 2,
    name: "Vitamina C 1g",
    category: "Vitaminas",
    price: 24.9,
    oldPrice: 32.9,
    image: "img/Vitamina C 1g.jpg",
    description: "Suplemento vitamínico para fortalecer o sistema imunológico.",
    indications: "Fortalecimento do sistema imunológico, prevenção de gripes e resfriados.",
    contraindications: "Não recomendado para pessoas com cálculos renais.",
    dosage: "1 comprimido efervescente ao dia, dissolvido em água.",
    prescription: false,
  },
  {
    id: 3,
    name: "Dipirona 500mg",
    category: "Analgésicos",
    price: 8.9,
    oldPrice: 14.9,
    image: "/dipirona.jpg",
    description: "Analgésico e antitérmico de ação rápida.",
    indications: "Dores de intensidade leve a moderada e febre.",
    contraindications: "Não use em caso de alergia à dipirona ou problemas sanguíneos.",
    dosage: "Adultos: 1 a 2 comprimidos até 4 vezes ao dia.",
    prescription: false,
  },
  {
    id: 4,
    name: "Ômega 3 1000mg",
    category: "Suplementos",
    price: 45.9,
    oldPrice: 59.9,
    image: "/omega-3.jpg",
    description: "Suplemento rico em ácidos graxos essenciais para saúde cardiovascular.",
    indications: "Saúde do coração, redução de triglicerídeos, função cerebral.",
    contraindications: "Consulte um médico se estiver tomando anticoagulantes.",
    dosage: "1 a 2 cápsulas ao dia, junto com as refeições.",
    prescription: false,
  },
  {
    id: 5,
    name: "Ibuprofeno 600mg",
    category: "Analgésicos",
    price: 15.9,
    oldPrice: 22.9,
    image: "/ibuprofeno.jpg",
    description: "Anti-inflamatório não esteroidal para dores e inflamações.",
    indications: "Dores musculares, artrite, dores de cabeça, cólicas menstruais.",
    contraindications: "Não use em caso de úlcera gástrica ou problemas renais.",
    dosage: "1 comprimido a cada 8 horas, após as refeições.",
    prescription: false,
  },
  {
    id: 6,
    name: "Vitamina D3 2000UI",
    category: "Vitaminas",
    price: 28.9,
    oldPrice: 38.9,
    image: "/vitamin-d.jpg",
    description: "Essencial para saúde óssea e sistema imunológico.",
    indications: "Fortalecimento dos ossos, prevenção de osteoporose, imunidade.",
    contraindications: "Não exceder a dose recomendada.",
    dosage: "1 cápsula ao dia, preferencialmente com refeição.",
    prescription: false,
  },
  {
    id: 7,
    name: "Amoxicilina 500mg",
    category: "Antibióticos",
    price: 32.9,
    oldPrice: 45.9,
    image: "/amoxicilina.jpg",
    description: "Antibiótico de amplo espectro para infecções bacterianas.",
    indications: "Infecções respiratórias, urinárias, de pele e ouvido.",
    contraindications: "Alergia à penicilina.",
    dosage: "1 cápsula a cada 8 horas por 7 a 10 dias.",
    prescription: true,
  },
  {
    id: 8,
    name: "Complexo B",
    category: "Vitaminas",
    price: 22.9,
    oldPrice: 29.9,
    image: "/vitamin-b.jpg",
    description: "Combinação de vitaminas do complexo B para energia e metabolismo.",
    indications: "Fadiga, estresse, metabolismo energético.",
    contraindications: "Consulte um médico em caso de gravidez.",
    dosage: "1 comprimido ao dia, após o café da manhã.",
    prescription: false,
  },
  {
    id: 9,
    name: "Omeprazol 20mg",
    category: "Digestivos",
    price: 18.9,
    oldPrice: 26.9,
    image: "/omeprazol.jpg",
    description: "Inibidor da bomba de prótons para tratamento de acidez estomacal.",
    indications: "Azia, refluxo gastroesofágico, úlceras.",
    contraindications: "Não use por mais de 14 dias sem orientação médica.",
    dosage: "1 cápsula ao dia, antes do café da manhã.",
    prescription: false,
  },
  {
    id: 10,
    name: "Colágeno Hidrolisado",
    category: "Suplementos",
    price: 52.9,
    oldPrice: 68.9,
    image: "/colageno.jpg",
    description: "Suplemento para saúde da pele, cabelos e articulações.",
    indications: "Elasticidade da pele, fortalecimento de unhas e cabelos, articulações.",
    contraindications: "Alergia a proteínas animais.",
    dosage: "1 dose (10g) ao dia, dissolvida em água ou suco.",
    prescription: false,
  },
  {
    id: 11,
    name: "Loratadina 10mg",
    category: "Antialérgicos",
    price: 14.9,
    oldPrice: 21.9,
    image: "/loratadina.jpg",
    description: "Antialérgico de longa duração sem causar sono.",
    indications: "Rinite alérgica, urticária, coceira.",
    contraindications: "Consulte um médico em caso de gravidez.",
    dosage: "1 comprimido ao dia.",
    prescription: false,
  },
  {
    id: 12,
    name: "Probióticos 10 Bilhões",
    category: "Suplementos",
    price: 38.9,
    oldPrice: 49.9,
    image: "/probioticos.jpg",
    description: "Suplemento com bactérias benéficas para saúde intestinal.",
    indications: "Saúde digestiva, imunidade, equilíbrio da flora intestinal.",
    contraindications: "Pessoas imunocomprometidas devem consultar médico.",
    dosage: "1 cápsula ao dia, preferencialmente em jejum.",
    prescription: false,
  },
  {
    id: 13,
    name: "Dorflex",
    category: "Analgésicos",
    price: 16.9,
    oldPrice: 23.9,
    image: "/dorflex.jpg",
    description: "Analgésico e relaxante muscular.",
    indications: "Dores musculares, tensão, dores de cabeça tensionais.",
    contraindications: "Não use com álcool ou outros relaxantes.",
    dosage: "1 a 2 comprimidos até 4 vezes ao dia.",
    prescription: false,
  },
  {
    id: 14,
    name: "Magnésio Dimalato",
    category: "Suplementos",
    price: 34.9,
    oldPrice: 44.9,
    image: "/magnesio.jpg",
    description: "Suplemento de magnésio para energia e função muscular.",
    indications: "Cãibras, fadiga, função muscular e nervosa.",
    contraindications: "Problemas renais graves.",
    dosage: "2 cápsulas ao dia, junto com as refeições.",
    prescription: false,
  },
  {
    id: 15,
    name: "Cetirizina 10mg",
    category: "Antialérgicos",
    price: 19.9,
    oldPrice: 27.9,
    image: "/cetirizina.jpg",
    description: "Antialérgico de segunda geração.",
    indications: "Alergias respiratórias, urticária, rinite.",
    contraindications: "Insuficiência renal grave.",
    dosage: "1 comprimido ao dia, preferencialmente à noite.",
    prescription: false,
  },
  {
    id: 16,
    name: "Whey Protein",
    category: "Suplementos",
    price: 89.9,
    oldPrice: 119.9,
    image: "/whey-protein.jpg",
    description: "Proteína de alta qualidade para ganho de massa muscular.",
    indications: "Ganho de massa muscular, recuperação pós-treino.",
    contraindications: "Alergia ao leite.",
    dosage: "1 dose (30g) após o treino ou conforme orientação.",
    prescription: false,
  },
]

// Cart Management
let cart = JSON.parse(localStorage.getItem("cart")) || []

function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartCountElements = document.querySelectorAll("#cart-count")
  cartCountElements.forEach((el) => {
    el.textContent = cartCount
    el.style.display = cartCount > 0 ? "inline" : "none"
  })
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()

  // Show toast notification
  showToast("Adicionado ao carrinho!", `${product.name} foi adicionado com sucesso`)
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  loadCart()
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (!item) return

  item.quantity += change

  if (item.quantity <= 0) {
    removeFromCart(productId)
  } else {
    localStorage.setItem("cart", JSON.stringify(cart))
    loadCart()
  }
}

// Load Featured Products on Homepage
function loadFeaturedProducts() {
  const container = document.getElementById("featured-products")
  if (!container) return

  const featuredProducts = products.slice(0, 4)

  container.innerHTML = featuredProducts
    .map(
      (product) => `
        <div class="col-md-6 col-lg-3">
            <div class="card product-card border-0 shadow-sm" onclick="window.location.href='produto.html?id=${product.id}'">
                ${product.oldPrice ? `<span class="badge-discount">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>` : ""}
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h6 class="card-title fw-bold">${product.name}</h6>
                    <p class="text-muted small mb-2">${product.category}</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            ${product.oldPrice ? `<small class="text-muted text-decoration-line-through d-block">R$ ${product.oldPrice.toFixed(2)}</small>` : ""}
                            <span class="text-purple fw-bold fs-5">R$ ${product.price.toFixed(2)}</span>
                        </div>
                    </div>
                    <button class="btn btn-purple w-100 mt-3" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="bi bi-cart-plus me-2"></i>Adicionar
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Load All Products on Catalog Page
let filteredProducts = [...products]

function loadProducts() {
  const container = document.getElementById("products-grid")
  if (!container) return

  container.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card product-card border-0 shadow-sm" onclick="window.location.href='produto.html?id=${product.id}'">
                ${product.oldPrice ? `<span class="badge-discount">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>` : ""}
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h6 class="card-title fw-bold">${product.name}</h6>
                    <p class="text-muted small mb-2">${product.category}</p>
                    ${product.prescription ? '<span class="badge bg-warning text-dark mb-2">Receita Obrigatória</span>' : ""}
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div>
                            ${product.oldPrice ? `<small class="text-muted text-decoration-line-through d-block">R$ ${product.oldPrice.toFixed(2)}</small>` : ""}
                            <span class="text-purple fw-bold fs-5">R$ ${product.price.toFixed(2)}</span>
                        </div>
                    </div>
                    <button class="btn btn-purple w-100" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="bi bi-cart-plus me-2"></i>Adicionar
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function filterProducts() {
  const searchTerm = document.getElementById("catalog-search")?.value.toLowerCase() || ""
  const category = document.getElementById("category-filter")?.value || ""
  const sortBy = document.getElementById("sort-filter")?.value || "name"

  // Filter
  filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm)
    const matchesCategory = !category || product.category === category
    return matchesSearch && matchesCategory
  })

  // Sort
  if (sortBy === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  loadProducts()
}

// Load Product Details
function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))
  const product = products.find((p) => p.id === productId)

  const container = document.getElementById("product-details")
  const breadcrumb = document.getElementById("breadcrumb-product")

  if (!product || !container) {
    if (container) {
      container.innerHTML = '<div class="alert alert-danger">Produto não encontrado</div>'
    }
    return
  }

  if (breadcrumb) {
    breadcrumb.textContent = product.name
  }

  document.title = `${product.name} - FarmaSaúde`

  container.innerHTML = `
        <div class="row">
            <div class="col-lg-5 mb-4">
                <img src="${product.image}" alt="${product.name}" class="img-fluid product-detail-img rounded shadow">
            </div>
            <div class="col-lg-7">
                <span class="badge bg-purple mb-2">${product.category}</span>
                ${product.prescription ? '<span class="badge bg-warning text-dark mb-2 ms-2">Receita Obrigatória</span>' : ""}
                <h1 class="fw-bold mb-3">${product.name}</h1>
                <p class="lead text-muted">${product.description}</p>
                
                <div class="my-4">
                    ${
                      product.oldPrice
                        ? `
                        <div class="mb-2">
                            <span class="text-muted text-decoration-line-through fs-5">R$ ${product.oldPrice.toFixed(2)}</span>
                            <span class="badge bg-danger ms-2">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>
                        </div>
                    `
                        : ""
                    }
                    <div class="display-5 text-purple fw-bold">R$ ${product.price.toFixed(2)}</div>
                </div>
                
                <button class="btn btn-purple btn-lg px-5" onclick="addToCart(${product.id})">
                    <i class="bi bi-cart-plus me-2"></i>Adicionar ao Carrinho
                </button>
                
                <div class="mt-4">
                    <div class="d-flex gap-3">
                        <div><i class="bi bi-truck text-purple"></i> Entrega rápida</div>
                        <div><i class="bi bi-shield-check text-purple"></i> Compra segura</div>
                        <div><i class="bi bi-arrow-clockwise text-purple"></i> Troca fácil</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row mt-5">
            <div class="col-12">
                <div class="info-section">
                    <h5><i class="bi bi-info-circle me-2"></i>Indicações</h5>
                    <p>${product.indications}</p>
                </div>
                
                <div class="info-section">
                    <h5><i class="bi bi-exclamation-triangle me-2"></i>Contraindicações</h5>
                    <p>${product.contraindications}</p>
                </div>
                
                <div class="info-section">
                    <h5><i class="bi bi-capsule me-2"></i>Posologia</h5>
                    <p>${product.dosage}</p>
                </div>
            </div>
        </div>
    `
}

// Load Cart
function loadCart() {
  const cartItems = document.getElementById("cart-items")
  const cartEmpty = document.getElementById("cart-empty")
  const cartContent = document.getElementById("cart-content")

  if (!cartItems) return

  if (cart.length === 0) {
    if (cartEmpty) cartEmpty.style.display = "block"
    if (cartContent) cartContent.style.display = "none"
    return
  }

  if (cartEmpty) cartEmpty.style.display = "none"
  if (cartContent) cartContent.style.display = "block"

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item d-flex align-items-center">
            <img src="${item.image}" alt="${item.name}" class="me-3">
            <div class="flex-grow-1">
                <h6 class="fw-bold mb-1">${item.name}</h6>
                <p class="text-purple fw-bold mb-2">R$ ${item.price.toFixed(2)}</p>
                <div class="quantity-control">
                    <button class="btn btn-sm btn-outline-purple" onclick="updateQuantity(${item.id}, -1)">
                        <i class="bi bi-dash"></i>
                    </button>
                    <span class="fw-bold">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-purple" onclick="updateQuantity(${item.id}, 1)">
                        <i class="bi bi-plus"></i>
                    </button>
                </div>
            </div>
            <div class="text-end">
                <p class="fw-bold mb-2">R$ ${(item.price * item.quantity).toFixed(2)}</p>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `,
    )
    .join("")

  updateCartSummary()
}

function updateCartSummary() {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal >= 99 ? 0 : 15
  const total = subtotal + shipping

  const subtotalEl = document.getElementById("cart-subtotal")
  const shippingEl = document.getElementById("cart-shipping")
  const totalEl = document.getElementById("cart-total")

  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2)}`
  if (shippingEl) {
    shippingEl.textContent = shipping === 0 ? "Grátis" : `R$ ${shipping.toFixed(2)}`
    shippingEl.className = shipping === 0 ? "text-success fw-bold" : ""
  }
  if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2)}`
}

function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!")
    return
  }
  alert("Funcionalidade de checkout em desenvolvimento. Em breve você poderá finalizar sua compra!")
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()

  // Load content based on current page
  if (document.getElementById("featured-products")) {
    loadFeaturedProducts()
  }

  if (document.getElementById("products-grid")) {
    loadProducts()
  }

  if (document.getElementById("product-details")) {
    loadProductDetails()
  }

  if (document.getElementById("cart-items")) {
    loadCart()
  }
})

function showToast(title, message) {
  // Remove any existing toasts
  const existingToast = document.querySelector(".custom-toast")
  if (existingToast) {
    existingToast.remove()
  }

  // Create toast element
  const toast = document.createElement("div")
  toast.className = "custom-toast"
  toast.innerHTML = `
    <div class="custom-toast-icon">
      <i class="bi bi-check-circle-fill"></i>
    </div>
    <div class="custom-toast-content">
      <p class="custom-toast-title">${title}</p>
      <p class="custom-toast-message">${message}</p>
    </div>
    <button class="custom-toast-close" onclick="this.parentElement.remove()">
      <i class="bi bi-x-lg"></i>
    </button>
  `

  document.body.appendChild(toast)

  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.classList.add("hiding")
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}
