import React, { useState } from 'react';
import './products.css';
import { useCart } from './cartContext';
import AddToCartPopup from './addToCartPopup'; // Assuming you have this component

const productsData = [
  { id: 1, name: 'General Purpose Gloves', price: '$12.99', image: '/images/product1.webp' },
  { id: 2, name: 'Welding Gloves', price: '$25.50', image: '/images/product2.webp' },
  { id: 3, name: 'Disposable Gloves ', price: '$8.75', image: '/images/product3.webp' },
  { id: 4, name: 'Cut-Resistant Sleeves', price: '$18.00', image: '/images/product4.webp' },
  { id: 5, name: 'Chemical Resistant Gloves', price: '$15.99', image: '/images/product5.webp' },
  { id: 6, name: 'High-Visibility Gloves', price: '$19.99', image: '/images/product6.webp' },
  { id: 7, name: 'Gardening Gloves', price: '$9.50', image: '/images/product7.webp' },
  { id: 8, name: 'Mechanics Gloves', price: '$14.25', image: '/images/product8.webp' },
  { id: 9, name: 'Insulated Gloves', price: '$22.00', image: '/images/product9.webp' },
  { id: 10, name: 'Leather Work Gloves', price: '$20.75', image: '/images/product10.webp' },
  { id: 11, name: 'Medical Gloves', price: '$11.99', image: '/images/product11.webp' },
  { id: 12, name: 'Winter Gloves', price: '$28.00', image: '/images/product12.webp' },
];

const Products = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [productName, setProductName] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setProductName(product.name);
    setShowPopup(true);

    // Hide the pop-up after 1 second
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  return (
    <div className="products-page">
      <h1 className="products-heading">Our Products</h1>
      <p className="products-subheading">Browse our full collection of safety gloves and protective gear.</p>
      <div className="products-grid">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <AddToCartPopup isVisible={showPopup} productName={productName} />
    </div>
  );
};

export default Products;