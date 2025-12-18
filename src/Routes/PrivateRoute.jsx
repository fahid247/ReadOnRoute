import React from 'react';

import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/UseAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    
    if (loading) {
        return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
    }

    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;