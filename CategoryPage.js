import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage = () => {
  // Sample data for categories
  const categories = [
    {
      id: 1,
      name: 'Veggiesss',
      image: 'gro-veg.jpg',
    },
    {
      id: 2,
      name: 'Healthly Fruits',
      image: 'gro-fru.jpg',
    },
    {
      id: 3,
      name: 'Category 3',
      image: 'path_to_image_for_category_3.jpg',
    },
    {
      id: 4,
      name: 'Category 4',
      image: 'path_to_image_for_category_4.jpg',
    },
    {
      id: 5,
      name: 'Category 5',
      image: 'path_to_image_for_category_5.jpg',
    },
    {
      id: 6,
      name: 'Category 6',
      image: 'path_to_image_for_category_6.jpg',
    },
    {
      id: 7,
      name: 'Category 7',
      image: 'path_to_image_for_category_7.jpg',
    },
    {
      id: 8,
      name: 'Category 8',
      image: 'path_to_image_for_category_8.jpg',
    },
    {
      id: 9,
      name: 'Category 9',
      image: 'path_to_image_for_category_9.jpg',
    },
    {
      id: 10,
      name: 'Category 10',
      image: 'path_to_image_for_category_10.jpg',
    },
    // Add more categories with their respective image URLs
  ];

  return (
    <div className="category-page">
      <h1>Grocery Categories</h1>
      <div className="category-list">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id}>
            <div className="category-container">
              <img src={category.image} alt={category.name} />
              <h2>{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
