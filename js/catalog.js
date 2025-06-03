document.addEventListener('DOMContentLoaded', function() {

    let products = [
        {
             id: 1,
            name: "Cheeseburger",
            description: "Juicy beef patty with cheddar",
            price: 8.50, 
            category: "Burgers", 
            rating: 4.5, 
            image: "images/big_burger_img1.png", 
            weight: "200g" 
        },
        { 
            id: 2, 
            name: "Pepperoni Pizza", 
            description: "Spicy pepperoni with mozzarella", 
            price: 12.00, 
            category: "Pizza", 
            rating: 4.8, image: 
            "images/pizza.png", 
            weight: "400g" 
        },
        { 
            id: 3, 
            name: "Chicken Sandwich", 
            description: "Grilled chicken with lettuce", 
            price: 7.50, 
            category: "Sandwiches", 
            rating: 4.2, 
            image: "images/sandwich_coffe_img.png", 
            weight: "150g" 
        },
        { 
            id: 4, 
            name: "Ramen", 
            description: "Japanese noodle soup with pork", 
            price: 10.00, 
            category: "Asian Food", 
            rating: 4.7, 
            image: "images/asian_food.png", 
            weight: "300g" 
        },
        { 
            id: 5, 
            name: "Black Burger", 
            description: "Burger with black bun and sauce", 
            price: 9.00, 
            category: "Burgers", 
            rating: 4.3, 
            image: "images/big_burger_img4.png", 
            weight: "220g" 
        },
        { 
            id: 6, 
            name: "Margherita Pizza", 
            description: "Tomato, mozzarella, basil",
             price: 10.50, 
             category: "Pizza", 
             rating: 4.6, 
             image: "images/pizza.png", 
             weight: "350g" 
        },
        { 
            id: 7, 
            name: "Club Sandwich", 
            description: "Bacon, egg, and tomato", 
            price: 8.00, 
            category: "Sandwiches", 
            rating: 4.4, 
            image: "images/sandwich_coffe_img.png", 
            weight: "180g" 
        },
        { 
            id: 8, 
            name: "Sushi Set", 
            description: "Assorted sushi and rolls", 
            price: 15.00, 
            category: "Asian Food", 
            rating: 4.9, 
            image: "images/asian_food.png", 
            weight: "250g" 
        },
        { 
            id: 9, 
            name: "Double Cheeseburger", 
            description: "Double patty with cheese", 
            price: 11.00, 
            category: "Burgers", 
            rating: 4.5, 
            image: "images/big_burger_img1.png", 
            weight: "300g" 
        },
        { 
            id: 10, 
            name: "Hawaiian Pizza", 
            description: "Pineapple, ham, mozzarella", 
            price: 11.50,
            category: "Pizza", 
            rating: 4.3, 
            image: "images/pizza.png", 
            weight: "380g" 
        },
        { 
            id: 11, 
            name: "Vegan Sandwich", 
            description: "Vegetables with hummus", 
            price: 6.50, 
            category: "Sandwiches", 
            rating: 4.0, 
            image: "images/sandwich_coffe_img.png", 
            weight: "140g" 
        },
        { 
            id: 12, 
            name: "Tom Yum", 
            description: "Spicy Thai shrimp soup", 
            price: 12.50, 
            category: "Asian Food", 
            rating: 4.8, 
            image: "images/asian_food.png", 
            weight: "320g" 
        },
        { 
            id: 13, 
            name: "Royal Burger", 
            description: "Premium burger with truffle sauce", 
            price: 10.00, 
            category: "Burgers", 
            rating: 4.6, 
            image: "images/big_burger_img3.png", 
            weight: "250g"
         },
        { 
            id: 14, 
            name: "Four Cheese Pizza", 
            description: "Blend of four cheeses", 
            price: 13.00, 
            category: "Pizza", 
            rating: 4.7, 
            image: "images/pizza.png", 
            weight: "400g" 
        },
        { id: 15,
             name: "Falafel Roll",
              description: "Falafel with tahini sauce", 
              price: 7.00, 
              category: "Sandwiches", 
              rating: 4.1, 
              image: "images/sandwich_coffe_img.png", 
              weight: "160g" }
    ];

    const catalogItems = document.getElementById('catalog-items');
    const noResults = document.getElementById('no-results');
    const productCount = document.getElementById('product-count');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const arrayButtons = document.querySelectorAll('.array-btn');
    const clearFiltersButton = document.querySelector('.clear-filters');
    const arrayButtonsContainer = document.querySelector('.array-buttons-container');


    let currentProducts = [...products];



    function renderProducts(productList) {
        catalogItems.innerHTML = '';
        noResults.style.display = productList.length === 0 ? 'block' : 'none';
        productCount.textContent = `${productList.length} ${productList.length === 1 ? 'item' : 'items'}`;

        productList.forEach(product => {
            const stars = Array(Math.floor(product.rating)).fill('<img src="images/Icons=Star.png" alt="Star" class="icon">').join('');
            const halfStar = product.rating % 1 >= 0.5 ? '<img src="images/Icons=HalfStar.png" alt="Half Star" class="icon">' : '';
            
            const item = document.createElement('div');
            item.className = 'catalog-item';
            item.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-details">
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <p class="product-weight">${product.weight}</p>
                    </div>
                    <div class="product-meta">
                        <p class="product-category">${product.category}</p>
                        <div class="icons">${stars}${halfStar}</div>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            catalogItems.appendChild(item);
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = currentProducts.find(p => p.id === productId);
                if (product) {
                    alert(`Added to cart: ${product.name}`);
                }
            });
        });
    }


     function applyFiltersAndSort() {
        let filtered = [...products];

        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(query) || 
                product.description.toLowerCase().includes(query)
            );
        }

        const activeCategory = document.querySelector('.category-btn.active')?.dataset.category;
        if (activeCategory && activeCategory !== 'all') {
            filtered = filtered.filter(product => product.category === activeCategory);
        }

        const sortValue = sortSelect.value;
        switch (sortValue) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'rating-desc':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'weight-asc':
                filtered.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
                break;
            case 'weight-desc':
                filtered.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
                break;
            default:
                break;
        }

        currentProducts = filtered;
        renderProducts(filtered);
    }

     searchInput.addEventListener('input', debounce(applyFiltersAndSort, 300));
    sortSelect.addEventListener('change', applyFiltersAndSort);

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyFiltersAndSort();
        });
    });

});