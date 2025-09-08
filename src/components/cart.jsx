import React from 'react';
import { useCart } from './cartContext';
import './cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">{item.price}</p>
                  <p className="item-quantity">Quantity: {item.quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2 className="summary-title">Cart Summary</h2>
            <div className="summary-total">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;