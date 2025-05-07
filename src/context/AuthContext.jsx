import React, { createContext, useReducer, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { login, register, loginSocial, logout as logoutService } from '../services/auth/authService';
import { AuthProviders } from '../config/authProviders';
import { saveAuthUser, getAuthUser, clearAuthUser } from '../utils/storage';

const initialState = { user: getAuthUser(), initializing: true };

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload, initializing: false };
        case 'LOGOUT':
            return { user: null, initializing: false };
        default:
            return state;
    }
};

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Firebase auth değişikliklerini dinle
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
            if (fbUser) {
                const token = await fbUser.getIdToken();
                const user = { email: fbUser.email, token };
                saveAuthUser(user);
                dispatch({ type: 'LOGIN', payload: user });
            } else {
                clearAuthUser();
                dispatch({ type: 'LOGOUT' });
            }
        });
        return unsubscribe;
    }, []);

    // Email/password ile giriş
    const handleLogin = async (email, pwd) => {
        const user = await login(email, pwd);
        saveAuthUser(user);
        dispatch({ type: 'LOGIN', payload: user });
    };

    // Email/password ile kayıt
    const handleRegister = async (email, pwd) => {
        const user = await register(email, pwd);
        saveAuthUser(user);
        dispatch({ type: 'LOGIN', payload: user });
    };

    // Sosyal giriş
    const handleLoginSocial = async (provider) => {
        const user = await loginSocial(provider);
        saveAuthUser(user);
        dispatch({ type: 'LOGIN', payload: user });
    };

    // Çıkış
    const handleLogout = async () => {
        await logoutService();
        clearAuthUser();
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                initializing: state.initializing,
                providers: AuthProviders,
                login: handleLogin,
                register: handleRegister,
                loginSocial: handleLoginSocial,
                logout: handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
