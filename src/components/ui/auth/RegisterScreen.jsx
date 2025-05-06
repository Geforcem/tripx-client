import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../assets/css/ui/RegisterScreen.css';
import { ASSET_PATHS } from '../../../config/constants';
import {Link} from "react-router-dom";

export default function RegisterScreen({ onRegister, onSocial, onGuest }) {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="register-container">
            <div className="register-content">
                <img src={ASSET_PATHS.LOGO} alt="TripX Logo" className="register-logo"/>
                <h1 className="register-title">{t('register.title')}</h1>

                <input
                    type="email"
                    className="register-input"
                    placeholder={t('register.emailPlaceholder')}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="register-input"
                    placeholder={t('register.passwordPlaceholder')}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="btn btn-email" onClick={() => onRegister(email, password)}>
                    {t('register.email')}
                </button>

                <p className="register-login-prompt">
                    {t('register.haveAccount')}{' '}
                    <Link to="/login" className="register-login-link">
                        {t('register.login')}
                    </Link>
                </p>

                <div className="social-buttons">
                    <button className="btn btn-social btn-google" onClick={() => onSocial('google')}>
                        {t('register.google')}
                    </button>
                    <button className="btn btn-social btn-facebook" onClick={() => onSocial('facebook')}>
                        {t('register.facebook')}
                    </button>
                </div>
            </div>

            <div className="register-footer">
                <button className="btn btn-guest" onClick={onGuest}>
                    {t('register.guest')}
                </button>
            </div>
        </div>
    );
}