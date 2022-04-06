import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React',
    },
  },
  pt: {
    translation: {
      'Welcome to React': 'Bem vindo ao React',
    },
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
