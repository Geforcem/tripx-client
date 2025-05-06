import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from '../pages/Splash';
import LoginScreen from "../components/ui/LoginScreen.jsx";
// import other page components as needed

export default function Index() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            {/* Add additional routes here */}
        </Routes>
    );
}