import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../assets/css/ui/LoginScreen.css';
import { ASSET_PATHS } from '../../../config/constants.jsx';
import i18n from 'i18next';
import {Link} from "react-router-dom";

export default function LoginScreen({ currentLang, onGuest, onEmail, onSocial }) {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <img
                    src={ASSET_PATHS.LOGO}
                    alt="TripX Logo"
                    className="login-logo"
                />
                <h1 className="login-title">{t('login.title')}</h1>

                <select
                    className="language-select"
                    value={currentLang}
                    onChange={handleLanguageChange}
                >
                    <option value="en">English</option>
                    <option value="tr">Türkçe</option>
                    <option value="es">Español</option>
                </select>

                {/* --- Email / Password Inputs --- */}
                <input
                    type="email"
                    className="login-input"
                    placeholder={t('login.emailPlaceholder')}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder={t('login.passwordPlaceholder')}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button
                    className="btn btn-email"
                    onClick={() => onEmail(email, password)}
                >
                    {t('login.email')}
                </button>

                <p className="login-register-prompt">
                    {t('login.noAccount')}{' '}
                    <Link to="/register" className="login-register-link">
                        {t('login.register')}
                    </Link>
                </p>

                <div className="social-buttons">
                    <button
                        className="btn btn-social btn-google"
                        onClick={() => onSocial('google')}
                    >
                        {t('login.google')}
                    </button>
                    <button
                        className="btn btn-social btn-apple"
                        onClick={() => onSocial('apple')}
                    >
                        {t('login.apple')}
                    </button>
                    <button
                        className="btn btn-social btn-facebook"
                        onClick={() => onSocial('facebook')}
                    >
                        {t('login.facebook')}
                    </button>
                </div>
            </div>

            <div className="login-footer">
                <button
                    className="btn btn-guest"
                    onClick={onGuest}
                >
                    {t('login.guest')}
                </button>
            </div>
        </div>
    );
}