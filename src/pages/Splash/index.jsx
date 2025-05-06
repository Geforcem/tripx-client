import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SplashScreen from '../../components/ui/SplashScreen';

export default function SplashPage() {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
        const timer = setTimeout(() => {
            navigate('/login');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return <SplashScreen fadeIn={fadeIn} />;
}