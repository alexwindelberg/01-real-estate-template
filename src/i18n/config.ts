import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { navigationTranslations } from './translations/navigation';
import { contactTranslations } from './translations/contact';
import { heroTranslations } from './translations/hero';
import { aboutTranslations } from './translations/about';
import { footerTranslations } from './translations/footer';
import { languageTranslations } from './translations/language';
import { propertiesTranslations } from './translations/properties';

// Merge all translations
const resources = {
  en: {
    translations: {
      ...navigationTranslations.en,
      ...contactTranslations.en,
      ...heroTranslations.en,
      ...aboutTranslations.en,
      ...footerTranslations.en,
      ...languageTranslations.en,
      ...propertiesTranslations.en,
    }
  },
  es: {
    translations: {
      ...navigationTranslations.es,
      ...contactTranslations.es,
      ...heroTranslations.es,
      ...aboutTranslations.es,
      ...footerTranslations.es,
      ...languageTranslations.es,
      ...propertiesTranslations.es,
    }
  }
};

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  lng: 'es',
  resources,
  ns: ["translations"],
  defaultNS: "translations"
});

export default i18n;