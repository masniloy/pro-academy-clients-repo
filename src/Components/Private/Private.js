import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthPro/AuthPro';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <p>Loading....</p>
    }
    if (!user) {
        return <Navigate to='/SignIn' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default Private;