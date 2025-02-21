'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type CartItem = {
  product: Product;
  count: number;
};

type CartContext = {
  items: CartItem[];
  updateCart(product: Product, qty: number): void;
  removeFromCart(product: Product): void;
  countAllItems(): number;
  countTotalPrice(): string;
  clearCart(): void;
};

const updateCartInLS = (products: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(products));
};

const CartContext = createContext<CartContext>({
  items: [],
  updateCart() {},
  removeFromCart() {},
  clearCart() {},
  countAllItems() {
    return 0;
  },
  countTotalPrice() {
    return '0';
  },
});

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const removeFromCart = (product: Product) => {
    const newProducts = cartItems.filter((item) => item.product.id !== product.id);
    setCartItems(newProducts);
    updateCartInLS(newProducts);
  };

  const clearCart = () => {
    setCartItems([]);
    updateCartInLS([]);
  };

  const updateCart = (product: Product, qty: number) => {
    const finalCartItems = [...cartItems];
    const index = cartItems.findIndex((item) => product.id === item.product.id);

    if (index === -1) {
      finalCartItems.push({ count: qty, product });
    } else {
      finalCartItems[index].count += qty;
    }

    if (finalCartItems[index]?.count === 0) {
      removeFromCart(product);
    } else {
      setCartItems(finalCartItems);
      updateCartInLS(finalCartItems);
    }
  };

  const countAllItems = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.count, 0);
  };

  const countTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.product.price * cartItem.count, 0).toFixed(2);
  };

  useEffect(() => {
    const result = localStorage.getItem('cartItems');
    if (result !== null) {
      setCartItems(JSON.parse(result));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        updateCart,
        removeFromCart,
        countTotalPrice,
        countAllItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
