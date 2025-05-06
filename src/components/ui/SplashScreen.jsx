import React from 'react';
import '../../assets/css/ui/SplashScreen.css';
import {ASSET_PATHS} from "../../config/constants.jsx";

export default function SplashScreen({ fadeIn }) {
    return (
        <div className="splash-container">
            <div className={`${fadeIn ? 'fade-in' : ''} splash-content`}>
                <img
                    src={ASSET_PATHS.LOGO}
                    alt="TripX Logo"
                    className="splash-logo"
                />
                {/* Minimal ve net bir karşılama mesajı */}
                <h1 className="splash-title">
                    Hoş Geldiniz
                </h1>
                <p className="splash-subtitle">
                    Hayalindeki rotayı bütçene uygun planla!
                </p>
            </div>
        </div>
    );
}