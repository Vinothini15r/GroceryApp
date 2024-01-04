import React from 'react';
import './GroceryList.css';

function GroceryList() {
  const groceries = [
    {
      id: 1,
      name: 'Apples',
      description: 'Fresh and delicious apples',
      price: '$2.99',
      imageUrl: '/assets/apple.jpg',
    },
    {
      id: 2,
      name: 'Bananas',
      description: 'Ripe and sweet bananas',
      price: '$1.49',
      imageUrl: '/assets/banana.jpg',
    },
    {
      id: 3,
      name: 'Milk',
      description: 'Nutritious milk',
      price: '$2.49',
      imageUrl: '/assets/milk.jpg',
    },
    {
      id: 4,
      name: 'Bread',
      description: 'Freshly baked bread',
      price: '$3.99',
      imageUrl: '/assets/bread.jpg',
    },
    {
      id: 5,
      name: 'Eggs',
      description: 'Farm-fresh eggs',
      price: '$1.99',
      imageUrl: '/assets/eggs.jpg',
    },
    {
      id: 6,
      name: 'Oranges',
      description: 'Juicy and sweet oranges',
      price: '$3.49',
      imageUrl: '/assets/oranges.jpg',
    },
  ];

  const breadProducts = [
    {
      id: 7,
      name: 'Whole Wheat Bread',
      description: 'Healthy whole wheat bread',
      price: '$3.49',
      imageUrl: '/assets/whole_wheat_bread.jpg',
    },
    {
      id: 8,
      name: 'Bagels',
      description: 'Freshly baked bagels',
      price: '$2.99',
      imageUrl: '/assets/bagels.jpg',
    },
  ];

  const meatAndSeafoodProducts = [
    {
      id: 9,
      name: 'Chicken Breast',
      description: 'Boneless chicken breast',
      price: '$5.99',
      imageUrl: '/assets/chicken_breast.jpg',
    },
    {
      id: 10,
      name: 'Salmon Fillet',
      description: 'Fresh salmon fillet',
      price: '$8.99',
      imageUrl: '/assets/salmon_fillet.jpg',
    },
  ];

  const pastaAndRiceProducts = [
    {
      id: 11,
      name: 'Spaghetti',
      description: 'Italian spaghetti pasta',
      price: '$1.99',
      imageUrl: '/assets/spaghetti.jpg',
    },
    {
      id: 12,
      name: 'Brown Rice',
      description: 'Healthy brown rice',
      price: '$2.49',
      imageUrl: '/assets/brown_rice.jpg',
    },
  ];

  const oilSaucesProducts = [
    {
      id: 13,
      name: 'Olive Oil',
      description: 'Extra virgin olive oil',
      price: '$6.99',
      imageUrl: '/assets/olive_oil.jpg',
    },
    {
      id: 14,
      name: 'Tomato Sauce',
      description: 'Classic tomato pasta sauce',
      price: '$2.49',
      imageUrl: '/assets/tomato_sauce.jpg',
    },
  ];

  const coffeeSweetenersProducts = [
    {
      id: 15,
      name: 'Coffee Beans',
      description: 'Freshly roasted coffee beans',
      price: '$9.99',
      imageUrl: '/assets/coffee_beans.jpg',
    },
    {
      id: 16,
      name: 'Sugar',
      description: 'Granulated sugar',
      price: '$1.99',
      imageUrl: '/assets/sugar.jpg',
    },
  ];

  const cerealsBreakfastProducts = [
    {
      id: 17,
      name: 'Cereal Bars',
      description: 'Healthy cereal bars',
      price: '$3.49',
      imageUrl: '/assets/cereal_bars.jpg',
    },
    {
      id: 18,
      name: 'Oatmeal',
      description: 'Instant oatmeal packets',
      price: '$2.99',
      imageUrl: '/assets/oatmeal.jpg',
    },
  ];

  const soupsCannedGoodsProducts = [
    {
      id: 19,
      name: 'Chicken Soup',
      description: 'Homestyle chicken soup',
      price: '$2.99',
      imageUrl: '/assets/chicken_soup.jpg',
    },
    {
      id: 20,
      name: 'Canned Vegetables',
      description: 'Assorted canned vegetables',
      price: '$1.99',
      imageUrl: '/assets/canned_vegetables.jpg',
    },
  ];

  const frozenFoodsProducts = [
    {
      id: 21,
      name: 'Frozen Pizza',
      description: 'Delicious frozen pizza',
      price: '$4.99',
      imageUrl: '/assets/frozen_pizza.jpg',
    },
    {
      id: 22,
      name: 'Frozen Vegetables',
      description: 'Mixed frozen vegetables',
      price: '$2.49',
      imageUrl: '/assets/frozen_vegetables.jpg',
    },
  ];

  const snacksProducts = [
    {
      id: 23,
      name: 'Potato Chips',
      description: 'Crunchy potato chips',
      price: '$2.99',
      imageUrl: '/assets/potato_chips.jpg',
    },
    {
      id: 24,
      name: 'Chocolate Bars',
      description: 'Assorted chocolate bars',
      price: '$1.99',
      imageUrl: '/assets/chocolate_bars.jpg',
    },
  ];

  const groceryListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
    padding: '20px',
  };

  const groceryItemStyles = {
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    width: '280px',
    marginBottom: '20px',
    cursor: 'pointer',
  };

  const groceryItemHoverStyles = {
    transform: 'translateY(-5px)',
  };

  const groceryImageStyles = {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  };

  const groceryDetailsStyles = {
    padding: '15px',
  };

  const groceryNameStyles = {
    fontSize: '1.2rem',
    margin: '0',
  };

  const groceryDescriptionStyles = {
    fontSize: '0.9rem',
    color: '#666',
    margin: '10px 0',
  };

  const groceryPriceStyles = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0',
  };

  const addToCartButtonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
    marginTop: '10px',
  };

  const addToCartButtonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  const allGroceries = [
    ...groceries,
    ...breadProducts,
    ...meatAndSeafoodProducts,
    ...pastaAndRiceProducts,
    ...oilSaucesProducts,
    ...coffeeSweetenersProducts,
    ...cerealsBreakfastProducts,
    ...soupsCannedGoodsProducts,
    ...frozenFoodsProducts,
    ...snacksProducts,
  ];

  return (
    <div className="grocery-list" style={groceryListStyles}>
      {allGroceries.map((grocery) => (
        <div
          className="grocery-item"
          key={grocery.id}
          style={groceryItemStyles}
        >
          <img
            src={grocery.imageUrl}
            alt={grocery.name}
            className="grocery-image"
            style={groceryImageStyles}
          />
          <div className="grocery-details" style={groceryDetailsStyles}>
            <h3 className="grocery-name" style={groceryNameStyles}>
              {grocery.name}
            </h3>
            <p className="grocery-description" style={groceryDescriptionStyles}>
              {grocery.description}
            </p>
            <p className="grocery-price" style={groceryPriceStyles}>
              {grocery.price}
            </p>
            <button
              className="add-to-cart"
              style={addToCartButtonStyles}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroceryList;



