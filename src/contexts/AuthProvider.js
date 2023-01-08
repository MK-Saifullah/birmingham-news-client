import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

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

    const googleProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateProfileUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const signIn = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

  useEffect ( () => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('Current user: ',  currentUser)
        if(currentUser === null || currentUser.emailVerified) {
            setUser(currentUser);
        }
        setLoading(false);
      })
      return () => unSubscribe();
  }, [])

    const authInfo = {
        user, 
        googleProviderLogin, 
        logOut, 
        createUser, 
        signIn, 
        updateProfileUser,
        verifyEmail, 
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;