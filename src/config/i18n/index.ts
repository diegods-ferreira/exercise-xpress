import { getLocales } from 'expo-localization';
import { I18n, TranslateOptions } from 'i18n-js';

import { I18nTextsKeys } from '@/types';

import { en } from './en-US';
import { pt } from './pt-BR';

export type Locale = 'en_US' | 'pt_BR';

const i18n = new I18n();

export const normalizedLocales: Record<string, Locale> = {
  'en-US': 'en_US',
  'pt-BR': 'pt_BR',
  en: 'en_US',
  'pt-US': 'pt_BR',
};

export const getDeviceLanguage = () => {
  const [locale] = getLocales();
  return locale.languageTag;
};

i18n.translations = {
  en_US: en,
  pt_BR: pt,
};

i18n.defaultLocale = 'en_US';

export const setLanguageToI18n = (locale: Locale) => {
  if (locale in i18n.translations) {
    i18n.locale = locale;
  }
};

export const translate = (key: I18nTextsKeys, options?: TranslateOptions) =>
  i18n.t(key, options);
