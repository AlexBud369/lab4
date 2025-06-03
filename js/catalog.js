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

    let currentProducts = [...products];

});