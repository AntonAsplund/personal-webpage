import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import sv from "./locales/sv.json";

const LOCAL_STORAGE_LANGUAGE = "language";
const PAGE_DEFAULT_LANGUAGE = "en";

const resources = {
  en: {
    translation: en
  },
  sv: {
    translation: sv
  }
};

const getLanguageFromLocalStorage = () => {
  const language = localStorage.getItem(LOCAL_STORAGE_LANGUAGE);
  return language ? language : PAGE_DEFAULT_LANGUAGE;
};

const setLanguageToLocalStorage = (language) => {
  localStorage.setItem(LOCAL_STORAGE_LANGUAGE, language);
};

i18n.use(initReactI18next)
  .init({
    resources,
    lng: getLanguageFromLocalStorage(),

    interpolation: {
      escapeValue: false
    }
  });

i18n.on("languageChanged", (language) => {
  setLanguageToLocalStorage(language);
});

export default i18n;