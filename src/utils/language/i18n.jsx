import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from '../language/locales/en/translation.json';
import trTranslations from '../language//locales/tr/translation.json';
import esTranslations from '../language//locales/es/translation.json';

const resources = {
    en: { translation: enTranslations },
    tr: { translation: trTranslations },
    es: { translation: esTranslations }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources,
        interpolation: { escapeValue: false }
    });

export default i18n;