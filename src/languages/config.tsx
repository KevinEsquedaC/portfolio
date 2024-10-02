
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importación de traducciones
import es_translation from "./es/translation.json";
import en_translation from "./en/translation.json";

i18n.use(initReactI18next).init({
  lng: 'es',
  debug: true,
  resources: {
    es: {
      translation: es_translation
    },
    en: {
      translation: en_translation
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;