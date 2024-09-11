import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user); 

    }
    return(
        <div>
            <h1>Sing in Page</h1>
            <button onClick={logGoogleUser}>
                Sing In with Google
            </button>
        </div>
    )
}

export default SignIn;

