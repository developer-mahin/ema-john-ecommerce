import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser('sing out successfully');
        })
        .catch((error)=>{
            console.error(error)
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })

        return () => unSubscribe();
    }, [])

    const authInfo = { user, createUser, login, auth, setUser, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;