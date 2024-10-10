import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/card-icon/cart-icon.component';
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase.utils';

import './navigation.style.scss';

const Navigation = () => {
  //why we take curretUser from the context?
  //The UserContext provides the current user object and a function to update the user object.
  const { currentUser } = useContext(UserContext);
  //why we take isCartOpen from the context?
  //The CartContext provides the current cart open state and a function to update the cart open state.
  //So, when the navigation component renders, it will display the cart icon and the dropdown menu if the cart is open.
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'>Logo</CrwnLogo>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {/* // Create the navigation links based on the current user and the UserContext 
              if setCurrentUser is not null, then show the "SIGN OUT" link; otherwise, show the "SING IN" link.
              */}
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SING IN
            </Link>
          )}
          <CartIcon />
        </div>
        {/* isCartOpen is a boolean value that determines whether the cart dropdown menu is open or not.*/}
        {isCartOpen && <CardDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
