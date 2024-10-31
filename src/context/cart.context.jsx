import { createContext, useState, useEffect } from 'react';

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
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // calculate the total quantity of items in the cart and update the state
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    // calculate the total quantity of items in the cart and update the state
    const newCartCount = cartItems.reduce(
      // total is the accumulator, cartItem is the current item in the array, quantity is the quantity of the
      // cardItem is the accumulator, cartItem is the current item in the array, quantity is the quantity of the
      // quantity of the current item in the array. The reduce function will loop through each item in the array
      // how does this reduce function work?
      // reduce function will return the accumulated total of all the quantities of the items in the cartItems array
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  // function to add product to cart items array and update the state
  // explain how addCartItem function works and how it updates the state
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  // value object that contains the state and functions to update the state
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
