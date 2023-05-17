import i18n from "i18next";
import { fromJSON } from "postcss";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationLT from "./locales/lt/translation.json";

// Set up i18next
async function initializeI18n() {
  try {
    await i18n.use(initReactI18next).init({
      resources: {
        en: {
          translation: translationEN,
        },
        lt: {
          translation: translationLT,
        },
        fr: {
          translation: translationFR,
        },
      },
      fallbackLng: "en",
      debug: false,
      interpolation: {
        escapeValue: false,
      },
    });
  } catch (error) {
    // Handle initialization error
    console.error("Failed to initialize i18next:", error);
  }
}

initializeI18n();

export default i18n;
