import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginScreen from '../../../components/ui/auth/LoginScreen.jsx';
import {
    loginWithEmail,
    loginWithGoogle,
    loginWithFacebook
} from '../../../services/auth/auth.jsx'

export default function LoginPage() {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const [error, setError] = useState('');

    // Misafir devam
    const handleGuest = () => navigate('/home');

    // Email ile giriş
    const handleEmail = async (email, password) => {
        try {
            setError('');
            await loginWithEmail(email, password);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    // Google ile giriş
    const handleSocial = async (provider) => {
        try {
            setError('');
            if (provider === 'google') {
                await loginWithGoogle();
            } else if (provider === 'facebook') {
                await loginWithFacebook();
            }
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
            />
        </>
    );
}