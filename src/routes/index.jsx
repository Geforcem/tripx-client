import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import SplashScreen from '../pages/Splash';
import LoginPage from '../pages/auth/login';
import RegisterPage from '../pages/auth/register';
import HomePage from '../pages/home/home.jsx';
import useAuth from '../hooks/useAuth';

function PrivateRoute({children}) {
    const {user, initializing} = useAuth();
    if (initializing) return <div>Yükleniyor...</div>;
    return user ? children : <Navigate to="/login" replace/>;
}

export default function AppRoutes() {
    const {user} = useAuth();

    return (
        <Routes>
            <Route path="/" element={<SplashScreen/>}/>
            <Route path="/login" element={user ? <Navigate to="/" replace/> : <LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/home" element={ <PrivateRoute> <HomePage/></PrivateRoute>}
            />
        </Routes>
    );
}