import React, { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { LoadingContext } from '../../../App';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const setloading = useContext(LoadingContext)
    const [user, loading] = useAuthState(auth)

    const location = useLocation();

    if (loading) {
        setloading(true)
        return <Loading></Loading>
    }

    if (!user) {
        { toast('Please Login') }
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }



    return (
        children
    );
};

export default RequireAuth;