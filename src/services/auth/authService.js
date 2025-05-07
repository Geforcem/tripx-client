import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { socialStrategies } from './socialAuthStrategy.js';

/**
 * Email/Password ile oturum açma ve token+email döndürme
 */
export const login = async (email, password) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const token = await user.getIdToken();
    return { email: user.email, token };
};

/**
 * Email/Password ile kayıt olma ve token+email döndürme
 */
export const register = async (email, password) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const token = await user.getIdToken();
    return { email: user.email, token };
};

/**
 * Generic social login using strategy pattern
 * providerName: AuthProviders.GOOGLE, AuthProviders.FACEBOOK, ...
 */
export const loginSocial = async (providerName) => {
    const strategy = socialStrategies[providerName];
    if (!strategy) {
        throw new Error(`Unsupported social provider: ${providerName}`);
    }
    return await strategy.login();
};

/**
 * Oturumu kapatma
 */
export const logout = async () => {
    await signOut(auth);
};
