import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import { UserContext } from '../../context/user.context';

import {signOutUser} from '../../utils/firebase.utils';

import './navigation.style.scss';


const Navigation = () => {
  //why we take curretUser from the context?
  //The UserContext provides the current user object and a function to update the user object.
  const { currentUser } = useContext(UserContext);


    return (
      <Fragment>
        <div className='navigation'>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logo'>Logo</CrwnLogo>
        </Link>
         <div className="nav-links-container">
              <Link className='nav-link' to='/shop'>SHOP</Link>
              {/* // Create the navigation links based on the current user and the UserContext 
              if setCurrentUser is not null, then show the "SIGN OUT" link; otherwise, show the "SING IN" link.
              */}
              {currentUser ? (
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> )
                : 
                ( <Link className='nav-link' to='/auth'>SING IN</Link>)
            }
             
         </div>
        
        </div>
        <Outlet/>
      </Fragment>
    )
  }
  
  export default Navigation;
