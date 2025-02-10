import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Español": "Spanish",
            "English": "English",
        }
    },
    es: {
        translation: {
            "Español": "Español",
            "English": "Inglés",
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;