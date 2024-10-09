import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

//as the actual value you want access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {}

});

// this is the wrapper component that will provide the context to the children components
//where to use this component: in the root component of the application
//this component will wrap the entire application
//this component will be used in the index.js file

export const UserProvider = ({ children }) => {
    //need useState to store the user object
    const [currentUser, setCurrentUser] = useState(null);
    
    //create an object with the current user and the function to set the current user
    const value = {currentUser, setCurrentUser}

    //useEffect hook to listen for changes in the user authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                //if the user is logged in, set the user object
                //and also create a user document in Firestore if it doesn't exist
                //if the user is not logged in, the user object will be null
                createUserDocumentFromAuth(user);
            }
           setCurrentUser(user);
           console.log("User changed:", user);
        });
       // return () => unsubscribe;
       return () => unsubscribe;
    }, []);

    //when the component is unmounted, clean up the listener
    //this is important to avoid memory leaks
    //you can return a cleanup function that gets called when the component is unmounted
    //in this case, we're returning the unsubscribe function from the onAuthStateChangedListener function
    //which will be called when the component is unmounted
    //this will stop the listener from listening for changes in the user authentication state
    //and prevent memory leaks
    
    //return () => unsubscribe;
    
    //return the context provider with the current user state
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

