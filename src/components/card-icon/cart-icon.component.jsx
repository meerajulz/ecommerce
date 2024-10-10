import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = () => {
    // Fetch the current cart open state and the function to update it from the CartContext.
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    //  a function that toggles the cart open state.
    // So, when the user clicks on the cart icon, it will toggle the cart open state.
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <div onClick={toggleIsCartOpen} className='cart-icon-container'>
            <ShoppingIcon className="shopping-icon" />
            <span className='item-count'>13</span>
        </div>
    );
}

export default CartIcon;
