import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // const user = {displayName: 'Khalid Saifullah'}
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // const signInWithPopupHandler = async () => {
    //     setLoading(true);
    // }

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

  useEffect ( () => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('Current user: ',  currentUser)
        setUser(currentUser);
        setLoading(false);
      })
      return () => unSubscribe();
  }, [])

    const authInfo = {user, providerLogin, loading}
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;