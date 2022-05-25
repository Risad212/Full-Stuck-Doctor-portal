import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const idToken = sessionStorage.getItem('token')
    
    return idToken ? children : <Navigate to="/login" />
};

export default PrivetRoute;