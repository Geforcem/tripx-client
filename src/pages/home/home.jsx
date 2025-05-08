import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const onLogout = async () => {
        await logout();
        navigate('/login', { replace: true });
    };

    return (
        <div>
            <h1>Hoş geldiniz, {user.email}</h1>
            <p>Hoş geldiniz, {user.token}</p>
            <button onClick={onLogout}>Çıkış Yap</button>
        </div>
    );
}