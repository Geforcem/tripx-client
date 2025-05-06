import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut
} from 'firebase/auth';
import { auth } from '../../config/firebase';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

/**
 * Email/Password ile oturum açma
 */
export function loginWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Email/Password ile kayıt olma
 */
export function registerWithEmail(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

/**
 * Google OAuth ile oturum açma
 */
export function loginWithGoogle() {
    return signInWithPopup(auth, googleProvider);
}

/**
 * Facebook OAuth ile oturum açma
 */
export function loginWithFacebook() {
    return signInWithPopup(auth, facebookProvider);
}

/**
 * Oturumu kapatma
 */
export function logout() {
    return signOut(auth);
}