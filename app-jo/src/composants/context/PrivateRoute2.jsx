import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute2 = () => {
    const { authData } = useContext(AuthContext);
    console.log(authData);

    if (authData && authData.success === 'ADMIN') {
        // Si l'utilisateur est authentifié et son rôle est USER, permettre l'accès
        return <Outlet />;
    } else {
        // Sinon, rediriger vers la page de connexion
        return <Navigate to="/login" />;
    }
};

export default PrivateRoute2;