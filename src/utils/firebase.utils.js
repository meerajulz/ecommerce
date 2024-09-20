import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqqCtNNXNlpwNz9SxseHzNsMeZIddyGU0",
    authDomain: "crwn-shop-363b8.firebaseapp.com",
    projectId: "crwn-shop-363b8",
    storageBucket: "crwn-shop-363b8.appspot.com",
    messagingSenderId: "877585151813",
    appId: "1:877585151813:web:53df89dc70250e6712b02c",
    measurementId: "G-GM4KQJVBNB"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const singWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(
    userAuth,
    additionalInformation = {},
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.error('Error creating user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAnPassword = async(email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}