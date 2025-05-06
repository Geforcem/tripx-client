import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from '../pages/Splash';
import LoginPage from "../pages/auth/login/index.jsx";
import RegisterPage from "../pages/auth/register/index.jsx";
// import other page components as needed

export default function Index() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/*<Route path="/home" element={<HomePage />} />*/}
        </Routes>
    );
}