import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterScreen from '../../../components/ui/auth/RegisterScreen.jsx';
import useAuth from '../../../hooks/useAuth';

export default function RegisterPage() {
    const navigate = useNavigate();
    const { register, loginSocial, providers } = useAuth();
    const [error, setError] = useState('');

    // E-posta/şifre ile kayıt
    const handleRegister = async (email, password) => {
        try {
            setError('');
            await register(email, password);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    // Sosyal giriş (Google / Facebook)
    const handleSocial = async (providerKey) => {
        try {
            setError('');
            await loginSocial(providerKey);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    // Misafir devam
    const handleGuest = () => navigate('/home');

    return (
        <>
            {error && <div className="error-banner">{error}</div>}
            <RegisterScreen
                onRegister={handleRegister}
                onSocial={handleSocial}
                onGuest={handleGuest}
                providers={providers}
            />
        </>
    );
}