import React from 'react';
import useAuth from '../Hooks/UseAuth';
import UseRole from '../Hooks/UseRole';
import Loading from '../Components/Loading/Loading';
import Forbidden from '../Components/Forbidden/Forbidden';





const AdminRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = UseRole()

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'admin') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default AdminRoute;