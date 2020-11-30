import React from 'react';

export const CartContext = React.createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);

  // Code to fetch and set the items

  return (
    <CartContext.Provider value={{ items, count: items.length }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
