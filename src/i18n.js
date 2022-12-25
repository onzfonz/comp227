import i18n from 'i18next';

import en from './locales/en';
import es from './locales/es';

const resources = {
  en,
  es,
};

i18n.init({
  resources,
  fallbackLng: 'en',
  lng: 'en',
  defaultNS: 'common',
  react: {
    useSuspense: false,
  },
});

export default i18n;
