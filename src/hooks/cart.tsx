import React, { createContext, useContext, useState } from 'react';

import IProduct from '../interfaces/IProduct';

interface CartProduct {
  id: number;
  idCategory: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextData {
  cart: CartProduct[];
  addToCart(product: IProduct): void;
  removeFromCart(productId: number): void;
  increaseProduct(productId: number): void;
  decreaseProsuct(productId: number): void;
  clearCart(): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartProduct[]>(() => {
    const savedCart = localStorage.getItem('@lecafe:cart');

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });

  function addToCart(product: IProduct) {
    setCart(data => [...data, { ...product, quantity: 1 }]);
  }

  function removeFromCart(productId: number) {
    setCart(data => data.filter(item => item.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  function increaseProduct(productId: number) {
    setCart(data =>
      data.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      }),
    );
  }

  function decreaseProsuct(productId: number) {
    const product = cart.find(item => item.id === productId);

    if (!product) return;

    if (product?.quantity > 1) {
      setCart(data =>
        data.map(item => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }

          return item;
        }),
      );
      return;
    }

    removeFromCart(productId);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseProduct,
        decreaseProsuct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function usecart(): CartContextData {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an cartProvider');
  }

  return context;
}
