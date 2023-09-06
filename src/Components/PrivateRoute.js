import React from 'react';
import {  Outlet, Navigate } from 'react-router-dom';


const PrivateRoute = () => {
    let getToken = localStorage.getItem('token');
    return ( getToken ? <Outlet/> : <Navigate to="/login" />)
    
}

export default PrivateRoute; 