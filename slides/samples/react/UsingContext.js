import React from 'react';
import { CartProvider, useCart } from './CartProvider';

function App() {
  return (
    <CartProvider>
      <Child />
    </CartProvider>
  );
}

function Child() {
  const { items, count } = useCart();

  return <div>Cart: {count}</div>;
}
