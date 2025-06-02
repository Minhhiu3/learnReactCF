import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = () => {
    const user = JSON.parse(localStorage.getItem("user") || {});
    return (
        <>
            {user.id === 11 ? <Outlet /> : <Navigate to="/auth/login" />}
        </>
    )
}

export default ProtectedRoute