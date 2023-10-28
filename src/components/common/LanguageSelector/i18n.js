import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from '../../../locales/en/en.json';
import translationRu from '../../../locales/ru/ru.json';

const resources = {
    en: {
        translation: translationEn,
    },

    ru: {
        translation: translationRu,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;