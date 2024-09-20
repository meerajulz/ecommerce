import { getRedirectResult } from 'firebase/auth';



import {
  auth,
  signInWithGooglePopup,
  singWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing in Page</h1>
      <button onClick={logGoogleUser}>Sing In with Google</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
