import { createContext, useContext, useState } from 'react';

// Create a new Context
const CartContext = createContext();

// Create a Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// ✅ Custom hook to access CartContext
export const useCart = () => {
  return useContext(CartContext);
};
