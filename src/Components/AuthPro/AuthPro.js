import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();



const auth = getAuth(app);

const AuthPro = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

    const usersLogin = (users) => {
        setLoding(false);
        return signInWithPopup(auth, users);
    }

    const userProfile = (profile) => {
        return updateProfile(auth.currentUser);
    }
    const creatUser = (name, email, password) => {
        setLoding(false);
        return createUserWithEmailAndPassword(auth, name, email, password)
    }
    const signInu = (email, password) => {
        setLoding(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoding(false);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoding(false);
        }));
        return () => {
            unsubscribe();
        }
    })
    const authInfo = { user, usersLogin, logOut, creatUser, signInu, loading, userProfile };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthPro;