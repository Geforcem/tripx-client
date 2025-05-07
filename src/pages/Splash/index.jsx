import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SplashScreen from '../../components/ui/SplashScreen';
import useAuth from '../../hooks/useAuth';

export default function SplashPage() {
    const navigate = useNavigate();
    const { user, initializing } = useAuth();
    const [fadeIn, setFadeIn] = useState(false);

    // Fade-in animasyonu için
    useEffect(() => {
        setFadeIn(true);
    }, []);

    useEffect(() => {
        // Auth state hazır olana kadar bekle
        if (initializing) return;

        if (user) {
            // Eğer login olmuşsa splash’i beklemeden direkt home’a
            navigate('/home', { replace: true });
        } else {
            // Aksi halde 3s sonra login’e
            const timer = setTimeout(() => {
                navigate('/login', { replace: true });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [initializing, user, navigate]);

    return <SplashScreen fadeIn={fadeIn} />;
}