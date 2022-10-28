import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();



const auth = getAuth(app);

const AuthPro = ({ children }) => {
    const [user, setUser] = useState(null);

    const usersLogin = (users) => {
        return signInWithPopup(auth, users);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        }));
        return () => {
            unsubscribe();
        }
    })
    const authInfo = { user, usersLogin, logOut };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthPro;