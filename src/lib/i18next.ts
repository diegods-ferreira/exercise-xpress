import { initReactI18next } from 'react-i18next';

import { getLocales } from 'expo-localization';
import i18n from 'i18next';

import { en, es, pt } from '@/config/i18n';

import { storage } from './react-native-mmkv';

export type Locale = 'en_US' | 'pt_BR' | 'es_ES';

const normalizedLocales: Record<string, Locale> = {
  'en-US': 'en_US',
  'pt-BR': 'pt_BR',
  en: 'en_US',
  'pt-US': 'pt_BR',
  'es-ES': 'es_ES',
  es: 'es_ES',
};

export const resources = {
  en_US: en,
  es_ES: es,
  pt_BR: pt,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en_US',
  fallbackLng: 'en_US',
  ns: [],
  nsSeparator: '.',
  keySeparator: ':',
  interpolation: {
    escapeValue: false,
  },
});

const getDeviceLanguage = () => {
  const [locale] = getLocales();
  return locale.languageTag;
};

export const getCurrentLocale = (): Locale => {
  const locale = storage.getLocale();

  if (locale) {
    i18n.changeLanguage(locale);
    return locale;
  }

  const deviceLanguage = getDeviceLanguage();
  const normalizedLocale = normalizedLocales[deviceLanguage] || 'en_US';

  i18n.changeLanguage(normalizedLocale);

  return normalizedLocale;
};

export { i18n };
