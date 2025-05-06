import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginScreen from '../../components/ui/LoginScreen';

export default function LoginPage() {
    const navigate = useNavigate();
    const { i18n } = useTranslation();



    const handleGuest = () => navigate('/home');
    const handleEmail = () => navigate('/login');
    const handleSocial = (provider) => navigate(`/auth/${provider}`);

    return (
        <LoginScreen
            currentLang={i18n.language}
            onGuest={handleGuest}
            onEmail={handleEmail}
            onSocial={handleSocial}
        />
    );
}