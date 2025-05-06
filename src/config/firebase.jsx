import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCNHSKZ2wt7rluF9Q1nfOxkogAYhDZj2NE",
    authDomain: "trip-x-fd74e.firebaseapp.com",
    projectId: "trip-x-fd74e",
    storageBucket: "trip-x-fd74e.firebasestorage.app",
    messagingSenderId: "460796188148",
    appId: "1:460796188148:web:0d171968f9ad01586915a1"
};

// Firebase uygulamasını başlat
const firebaseApp = initializeApp(firebaseConfig);

// Auth modülünü dışarı ver
export const auth = getAuth(firebaseApp);