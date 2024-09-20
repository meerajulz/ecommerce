import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sing-in/sign-in.component';
import Button from '../../components/button/button.component';
import './authentication.styles.scss';

const Authentication = () => {


  return (
    <div className='authentication-container'>
      <SignInForm />  
      <SignUpForm />
    </div>
  );
};

export default Authentication;
