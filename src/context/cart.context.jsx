import { createContext, useState } from 'react';



export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  addItemToCart: () => {},

});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  // function to add product to cart items array and update the state
  // explain how addCartItem function works and how it updates the state
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  // value object that contains the state and functions to update the state
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
