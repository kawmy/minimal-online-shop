import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150' },
];


const Base = () => {
  return (
    <div>
      <h1 className="page-title">Welcome to My Shop</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Base;
