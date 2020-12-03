import i18next from 'i18next';

i18next.init({
  fallbackLng: 'pl',
  resources: {
    pl: {
      translations: require('../locales/pl/translations.json'),
    },
    en: {
      translations: require('../locales/en/translations.json'),
    },
    de: {
      translations: require('../locales/de/translations.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
});

i18next.languages = ['pl', 'en', 'de'];

export default i18next;
