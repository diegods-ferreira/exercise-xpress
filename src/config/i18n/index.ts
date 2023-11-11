import { getLocales } from 'expo-localization';
import { I18n, TranslateOptions } from 'i18n-js';

import { en } from './en-US';
import { pt } from './pt-BR';

const i18n = new I18n();

const normalizedLocales = {
  'en-US': 'en_US',
  'pt-BR': 'pt_BR',
  en: 'en_US',
  'pt-US': 'pt_BR',
};

const getDeviceLanguage = () => {
  const [locale] = getLocales();
  return locale.languageTag;
};

i18n.translations = {
  en_US: en,
  pt_BR: pt,
};

i18n.defaultLocale = 'en_US';

export const setLanguageToI18n = () => {
  const language = getDeviceLanguage();
  const locale = normalizedLocales[language];

  if (locale in i18n.translations) {
    i18n.locale = locale;
  }
};

// setLanguageToI18n();
type LocaleObject = typeof en;
type LocaleObjectKey = keyof LocaleObject;
type TranslationKey = `${LocaleObjectKey}.${string}`;

export const translate = (key: TranslationKey, options?: TranslateOptions) =>
  i18n.t(key, options);
