import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import expoLanguageDetector from "./plugins/expoLanguageDetector";
import { en, tr } from "./locales";

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  }
};

i18n
  .use(initReactI18next)
  .use(expoLanguageDetector)
  .init({
    compatibilityJSON: "v3",
    resources, // Include your resources here
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;
