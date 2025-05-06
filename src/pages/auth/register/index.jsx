import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterScreen from '../../../components/ui/auth/RegisterScreen.jsx';
import { registerWithEmail, loginWithGoogle, loginWithFacebook } from '../../../services/auth/auth.jsx';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = async (email, password) => {
        try {
            setError('');
            await registerWithEmail(email, password);
            navigate('/routes');  // kayıt sonrası yönlendirme
        } catch (err) {
            setError(err.message);
        }
    };

    const handleSocial = async (provider) => {
        try {
            setError('');
            if (provider === 'google') {
                await loginWithGoogle();
            } else if (provider === 'facebook') {
                await loginWithFacebook();
            }
            navigate('/routes');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGuest = () => navigate('/routes');

    return (
        <>
            {error && <div className="error-banner">{error}</div>}
            <RegisterScreen
                onRegister={handleRegister}
                onSocial={handleSocial}
                onGuest={handleGuest}
            />
        </>
    );
}