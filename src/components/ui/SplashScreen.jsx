import React from 'react';
import '../../assets/css/ui/SplashScreen.css';
import {ASSET_PATHS} from "../../config/constants.jsx";
import {useTranslation} from "react-i18next";

export default function SplashScreen({ fadeIn }) {
    const { t } = useTranslation();

    return (
        <div className="splash-container">
            <div className={`${fadeIn ? 'fade-in' : ''} splash-content`}>
                <img
                    src={ASSET_PATHS.LOGO}
                    alt={t('splash.login')}
                    className="splash-logo"
                />
                <h1 className="splash-title">{t('splash.login')}</h1>
                <p className="splash-subtitle">{t('splash.subtitle')}</p>
            </div>
        </div>
    );
}