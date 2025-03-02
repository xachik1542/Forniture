import i18n from "i18next";
import Translationcz from "./locales/cz/translation.json";
import Translationen from "./locales/en/translation.json";
import Translationam from "./locales/am/translation.json";
import Translationru from "./locales/ru/translation.json";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  cz: {
    translation: Translationcz,
  },
  en: {
    translation: Translationen,
  },
  am: {
    translation: Translationam,
  },
  ru: {
    translation: Translationru,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: 'en',
    resources: resources,
    detaction: {
      caches: ["localStorage"],
    },
  });

export default i18n;
