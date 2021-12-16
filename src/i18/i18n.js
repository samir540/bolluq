import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
// baseurl
import { baseUrl } from "../services/api";

const trans = JSON.parse(
  localStorage.getItem(`TRANSLATE${localStorage.getItem("i18nextLng")}`)
);

const resources = {
  [localStorage.getItem("i18nextLng")]: {
    translation: trans,
  },
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("i18nextLng"),
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: baseUrl + "translation/{{lng}}",
    },
    debug: process.env.NODE_ENV !== "production",
    lng: localStorage.getItem("i18nextLng"),
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
