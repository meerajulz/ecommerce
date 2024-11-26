import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx';

const CartIcon = () => {
  // Fetch the current cart open state and the function to update it from the CartContext.
  // fetch the cart count from the CartContext.
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  //  a function that toggles the cart open state.
  // So, when the user clicks on the cart icon, it will toggle the cart open state.
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
