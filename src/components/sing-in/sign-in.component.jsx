import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in.styles.scss';

const defaultFormValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  //SIng in with google button
  const signInWithGoogle = async () => {
    try {
     await signInWithGooglePopup();

    }
    catch (error) {
        if (error.code === 'auth/popup-closed-by-user') {
            console.log('Popup closed by user');
            // Optionally, show a message to the user or just silently catch the error
          } else {
            console.error('Error signing in with Google', error);
          }
    }
  
  };

  console.log('HIT')

  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const {user} = await signInAuthWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('Email already in use');
          break;
        case 'auth/wrong-password':
          alert('Wrong password');
          break;

        default:
          alert('auth/invalid-credential: ' + error.message);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already having an account?</h2>
      <span>Sign in with your email and password</span>
      <form action='' onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />

        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
