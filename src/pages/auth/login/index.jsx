import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginScreen from '../../../components/ui/auth/LoginScreen.jsx';
import useAuth from '../../../hooks/useAuth';

export default function LoginPage() {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const [error, setError] = useState('');

    // Context’ten login fonksiyonları ve provider enum’ları alıyoruz
    const { login, loginSocial, providers } = useAuth();

    // Misafir devam
    const handleGuest = () => navigate('/home');

    // E-posta/şifre ile giriş
    const handleEmail = async (email, pwd) => {
        try {
            await login(email, pwd);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    // Google/Facebook ile sosyal giriş
    const handleSocial = async (providerKey) => {
        try {
            await loginSocial(providerKey);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            {error && <div className="error-banner">{error}</div>}
            <LoginScreen
                currentLang={i18n.language}
                onGuest={handleGuest}
                onEmail={handleEmail}
                onSocial={handleSocial}
                // LoginScreen artık providers prop’unu da alabilir:
                providers={providers}
            />
        </>
    );
}